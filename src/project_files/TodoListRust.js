import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Separator from "../components/Separator"


const bodyStyle = { fontSize: { xs: "1rem", md: "1.25rem" }, textAlign: "justify" }
const h1Style = { fontWeight: "bold", fontSize: { xs: "3.5rem", md: "5.5rem" } }
const paddingLeftStyle = { px: { xs: 3, sm: 6, md: 10 }, py: 4 }

const TodoListRust = () => {
  return(<>
    <Box textAlign="center">
      <Typography variant="h1" color="primary" sx={h1Style}>
          Todo List Rust (WIP)
      </Typography>
      <Separator width="50%"/>
    </Box>
    <Box sx={paddingLeftStyle}>
      <Typography variant="h3" color="secondary">Description</Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        I am learning Rust and want a basic project to get the basic down. <br />
        This will also be useful for me because I am annoyed with google calendar for the purpose of todo lists. <br />
        Currently a work in progress as Rust is not the easiest language to learn.
      </Typography>
      <Typography variant="h3" color="secondary">Tech</Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
       Rust.
      </Typography>
      <Typography variant="h3" color="secondary">
       Future
      </Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        Get it working
      </Typography>
    </Box>   
  </>)
}

export default TodoListRust