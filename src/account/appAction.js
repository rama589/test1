import { account } from "../lib/Appwrite";
import { getConversationTitle,getAiResponse } from "../api/googleAi";





const userPromptAction = async (formData) =>{
  const userPrompt = formData.get('user_prompt');
 
 console.log(userPrompt);

const conversationTitle = await getConversationTitle(userPrompt);
console.log(conversationTitle);

const aiResponse = await getAiResponse(userPrompt);
console.log(aiResponse);

  return null;
}



const appAction = async({request}) =>{
    const formData = await request.formData();
    const requestType = formData.get('request_type');

    if (requestType ==='user_prompt'){
        return await userPromptAction(formData);
    }
};

export default appAction;