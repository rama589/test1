
import { redirect } from 'react-router-dom';



import { account } from "../lib/Appwrite";
import generateID from '../utils/generateID';

const registerAction = async ({ request }) => {
   
   try{
    await account.create(
        generateID(), // Generates a unique ID for the user
        formData.get('email'), // Retrieves email from form data
        formData.get('password'), // Retrieves password from form data
        formData.get('name'), // Retrieves name from form data
    );
} catch (err) {
    // Returns an error object if account creation fails
    return {
        message: err.message, // Error message from the caught error
    };
}

try {
    // Creates a session for the new user with the provided email and password
    await account.createEmailPasswordSession(
        formData.get('email'),
        formData.get('password'),
    );
} catch (err) {

    console.log('Error creating email session: ${err.massage}');
    return redirect('/login');

}


return redirect('/');

  };
  
  export default registerAction;
  