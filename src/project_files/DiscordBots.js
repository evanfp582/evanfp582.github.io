import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import Separator from "../components/Separator"

const bodyStyle = { fontSize: { xs: "1rem", md: "1.25rem" }, textAlign: "justify" }
const h1Style = { fontWeight: "bold", fontSize: { xs: "3.5rem", md: "5.5rem" } }
const paddingLeftStyle = { px: { xs: 3, sm: 6, md: 10 }, py: 4 }

const DiscordBots = () => {
  return(<>
    <Box textAlign="center">
      <Typography variant="h1" color="primary" sx={h1Style}>
          Discord Bots 
      </Typography>
      <Separator width="50%"/>
    </Box>
    <Box sx={paddingLeftStyle}>
      <Typography variant="h3" color="secondary">Description</Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        This is more of a proof of concept project where I can see if I can create a Discord Bot. <br />
        This goes along with a group project in a private repository called Pokemon Bot where discord users could create a party of pokemon and battle each other. <br />
      </Typography>
      <Typography variant="h3" color="secondary">Tech</Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
       Utilizes the discord Software Developer Kit, python, and a local "database" aka a JSON file.
      </Typography>
      <Typography variant="h3" color="secondary">
       Future
      </Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        I'm sure the discord SDK has only gotten better since I made this and the Pokemon Discord bot. <br />
        I would love to make some new discord bots that have some fun or useful features. 
      </Typography>
    </Box>   
  </>)
}

export default DiscordBots