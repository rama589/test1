import { account } from "../lib/Appwrite";

const logout = async (navigate) => {
    try{
await account.deleteSession('current');
} catch (err) {
  return console.log(`Error deleting user session: ${err}`);
}

return navigate('/login');
};
export default logout;