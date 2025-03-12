import { motion } from "framer-motion";
import { IconBtn } from "./Button";
import { useRef,useCallback,useState } from "react";
import {useNavigation ,useSubmit } from "react-router-dom";



const PromptField = () =>{

  

const inputField =useRef();
const inputFieldContainer =useRef();

const submit =useSubmit();

const navigation = useNavigation();

const [placeholderShown,setPlaceholdrShown]=useState
(true);
const [isMultiline, setMultiline] =useState(false);
const [inputValue,setInputValue]= useState('');

const handleInputChange =useCallback(() =>{

if(inputField.current.innerText ==='/n')
    inputField.current.innerHTML='';

    setPlaceholdrShown(!inputField.current.innerText);
    setMultiline(inputFieldContainer.current.clientHeight>
        64);
        setInputValue(inputField.current.innerText.trim());
},[]);

const moveCursorToEnd = useCallback(() =>{
  const editableElem = inputField.current;
  const range = document.createRange();
  const selection = window.getSelection();


  range.selectNodeContents(editableElem);
  range.collapse(false);

  selection.removeAllRanges();
  selection.addRange(range);
},[]);

const handlepaste = useCallback((e) =>{
e.PromptFieldVariant();
inputField.current.innerText+=e.clipbordData.getData('text');
handleInputChange();
moveCursorToEnd();
},[handleInputChange,moveCursorToEnd]);

const handleSubmit = useCallback(() =>{

if (!inputValue || navigation.state == 'submitting' )
    return;

submit({
    user_prompt:inputValue,
    request_type:'user_prompt'
}, {
    method:'POST',
    encType: 'application/x-www-form-urlencoded',
    action: '/',
},
);

inputField.current.innerHTML='';
handleInputChange();
},[handleInputChange,inputValue,navigation.state,submit]);



const PromptFieldVariant ={
    hidden:{ scaleX:0},
    visible:{
        scaleX:1,
        transition:{
            when:'beforeChildren',
            staggerChildren:0.2,
            duration: 0.4,
            delay: 0.4,
            ease:[0.05 ,0.7 ,0.1 ,1],
        },
    },
};

const PromptFieldChildrenVariant ={
     hidden: {opacity:0},
     visible: {opacity:1},
};

    return (
        <motion.div 
        className={`prompt-field-container ${isMultiline ?'rounded-large' : ''}`}
        variants={PromptFieldVariant}
        initial='hidden'
        animate='visible'
        ref={inputFieldContainer}
        >
            <motion.div 
            className={`prompt-field ${placeholderShown ?''
                :'after:hidden'}`}
             contentEditable={true}
             role="textbox"
             aria-multiline={true}
             aria-label="Enter a prompt here"
             data-placeholder='Enter a prompt here'
             variants={PromptFieldChildrenVariant}
             ref={inputField}
             onInput={handleInputChange}
             onPaste={handlepaste}
             onKeyDown={(e) =>{
                if (e.key=='Enter' && !e.shiftKey){
                    e.preventDefault();
                    handleSubmit();
                }
             }}
            />
                <IconBtn
                    icon='send'
                    title="Submit"
                    size="large"
                    Classes='ms-auto'
                    variants='PromptFieldChildrenVariant'
                    onClick={handleSubmit}
                    />

            <div className="state-Layer"></div>
            
        </motion.div>
    );
};


export default PromptField;