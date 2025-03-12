import { redirect } from "react-router-dom";
import { account } from "../lib/Appwrite";

const loginAction = async ({request}) => {

const formData = await request.formData();

try{
await account.createEmailPasswordSession(
    formData.get("email"),
    formData.get("password")
);

redirect("/");
} catch (err) {
return {
    error: err.message,
};
}
};


export default loginAction;