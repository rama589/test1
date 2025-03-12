import { createContext,useState,useRef,useCallback,useMemo } from "react";
import PropTypes from "prop-types";
import Snackbar from "../../components/Snackbar";

const initialCtxValue = {
    snackbar:{
        open:false,
        message:"",
        severity:"info",
    },
    showSnackbar: ({message,type = 'info', timeOut=5000}) => {},
    hideSnackbar: () => {},
}






export const SnackarContext = createContext(initialCtxValue);

const SnackarProvider = ({children}) => {
const [snackbar,setSnackbar] = useState({
    open:false,
    message:"",
    severity:"info",
});

const timeoutRef = useRef();

const showSnackbar = useCallback(({message,type ='info',timeOut=5000}) => {

    if(timeoutRef.current)
        clearTimeout(timeoutRef.current); 

    setSnackbar({open:true,message,type});

    timeoutRef.current = setTimeout(() => {
        setSnackbar((prev) => {
            return {...prev,open:false};
        });
    }, timeOut);
},
[]
);

const hideSnackbar = useCallback(() => {
    if(timeoutRef.current)clearTimeout(timeoutRef.
        current);
    setSnackbar({open:false,message:"",severity:"info"});

},[]);



    const contextValue = useMemo(() => {
        return {showSnackbar,hideSnackbar}
    },[showSnackbar,hideSnackbar]);

return (
    <SnackarContext.Provider value={contextValue}>
        {children}

        <Snackbar snackbar={snackbar} />
    </SnackarContext.Provider>
);
};

SnackarProvider.PropTypes = {
    children:PropTypes.any,
};

export default SnackarProvider;