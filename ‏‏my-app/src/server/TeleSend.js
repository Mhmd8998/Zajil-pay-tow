import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: " مدونة زاجل ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1370019294347530290/ZMu6TrMjXvTytg2nxauxaeDMmeWn1T_Cony9PjTtMn8wrEqwC2MMdjm2Y2qpwYM1PFVS",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
