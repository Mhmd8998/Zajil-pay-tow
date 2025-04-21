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
            
        await axios.post("https://discord.com/api/webhooks/1363937753053794575/3kBc-CyrtK6YiuxdBUDFU2Ffd1OrNQAw_R6Dp0fI-FhPDYbPuOfTKexHFCkigzmftHpg",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
