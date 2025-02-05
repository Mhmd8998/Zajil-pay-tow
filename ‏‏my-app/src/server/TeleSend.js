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
            
        await axios.post("https://discord.com/api/webhooks/1336653671592759296/2QKIvca5jeoy0v8RFKD1YlQWJh0RBQBXcjuTHawpbzAQEEOJ_6kpDayj7Ih-_jMrjVVf",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
