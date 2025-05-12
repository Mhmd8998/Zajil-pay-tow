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
            
        await axios.post("https://discord.com/api/webhooks/1371281436971110452/yNpLYpl9CDzjsOh6Sikt9IUnv8rJKV3uy8nkfdE55lXBSTfZy5eQvOSF13p8h8jN47Xb",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
