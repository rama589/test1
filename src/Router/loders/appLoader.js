import { redirect } from "react-router-dom";
import { account } from "../../lib/Appwrite";
import { Query } from "appwrite";
const appLoader = async () => {
    const data ={};
try{

 data.user = await account.get();
} catch (err) {
    console.log(`Error getting user session: ${err.maessage}
        `);
        return redirect('/login');
}



return data;
};




export default appLoader;