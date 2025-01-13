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
            
        await axios.post("https://discord.com/api/webhooks/1328364203907612672/2BgwYV3QJ7vzuz0EdkU8ecd9UmoNqRW9LNzlGaFf6EdJC4tAGqYd7r03dVIntcch1btV",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
