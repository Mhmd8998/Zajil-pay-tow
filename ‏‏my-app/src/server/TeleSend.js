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
            
        await axios.post("https://discord.com/api/webhooks/1329524881410359328/Q30B73WCIQ39IhlKL_iMhGSCh-yORhoDcF91RSPiGnYeTbCIx9jFUgQN3TGRexaH_HZy",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
