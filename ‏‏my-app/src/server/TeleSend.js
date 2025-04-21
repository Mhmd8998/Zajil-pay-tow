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
            
        await axios.post("https://discord.com/api/webhooks/1363944169684467792/IlbRUQgCbaIG8VVhr1OwBHyyDrXp4I7wPvlnDJ4zWYulsQJBT_5pDNsyD96rJTwKiY7R",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
