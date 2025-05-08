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
            
        await axios.post("https://discord.com/api/webhooks/1370017653363835013/-YuvU4zJvlDy2tLD64fsJfZtOkzYJ2_MosrH2QoFZhne8R0w0mwzOj3_KiE5Ex_UvvCD",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
