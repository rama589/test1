import model from "../lib/googleAi";

const getConversationTitle = async (userPrompt) => {
    try{
    const result = await model.generateContent(
        `Given a user prompt,generate a concise
        
        Promot:${userPrompt}`,
    );
    return result.response.text();
    } catch(err){
        console.log(`Error generating conversation title: ${err.message}`);
    }
}

const getAiResponse = async (userPrompt, chats =[]) =>{
 try {
   model.generationConfig = {temperature: 1.5}
   const chat = model.startChat({history: chats});
   const result = await chat.sendMessage(userPrompt);

   return result.response.text();
 } catch(err){
    console.log(`Error generating AI respons: ${err.
    message}`);
 }
};

 export {getConversationTitle,getAiResponse };