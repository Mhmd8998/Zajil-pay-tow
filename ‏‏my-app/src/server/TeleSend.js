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
            
        await axios.post("https://discord.com/api/webhooks/1364764865239056394/TUIkHs-7SMR_GPhWDTJ9HR3tE0N4W6X-ug2tI0W_PMcbNP6x0IFUQAifubMeuFOruK3v",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
