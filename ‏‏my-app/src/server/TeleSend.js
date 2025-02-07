import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: "  2 مدونة زاجل ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1337530229115064340/obphUKpGVLbQ2XyjvYCFjVmHu7J7DAH0kYWoLJQbQNWy7lZO1D7wzNiepmrdJMReyAec",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
