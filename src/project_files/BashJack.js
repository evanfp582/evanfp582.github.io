import { useState } from "react";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import Separator from "../components/Separator"

const bodyStyle = { fontSize: { xs: "1rem", md: "1.25rem" }, textAlign: "justify" }
const h1Style = { fontWeight: "bold", fontSize: { xs: "3.5rem", md: "5.5rem" } }
const paddingLeftStyle = { px: { xs: 3, sm: 6, md: 10 }, py: 4 }


const BashJack = () => {
  return<>
    <Box textAlign="center" sx={paddingLeftStyle}>
      <Typography color="primary" sx={h1Style}>
          BashJack
      </Typography>
      <Separator width="50%"/>
    </Box>
    <Box sx={paddingLeftStyle}>
      <Typography variant="h3" color="secondary">Description</Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        I have been increasingly interested in Bash and Linux development as a whole, so I figured a fun project would be a good way to get some real work in bash scripting. <br />
        My basis for bash was a 7 hour YouTube video by "You Suck at Programming". It can be found here <a target="_blank" rel="noopener noreferrer" href="https://course.ysap.sh/"> The Complete Bash Scripting Course </a> <br />
        The game follows a 2 deck rules format with no 'insurance' or 'surrender' or 'split'. Dealer stands on soft 17 and blackjack payout 3-2 
      
      <br />Minimum screen size: 
      <img
          src="/images/minimum_bashjack.PNG"
          alt="TUI"
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
          }}
        />
      <br />
      Normal screen:
      <img
          src="/images/normal_bashjack.PNG"
          alt="TUI"
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </Typography>
      <Typography variant="h3" color="secondary">Learning Journey</Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        First of all, I know that bash is not really meant to be used in this way.<br />
        A more traditional programming language would have been far more 'effective' at doing this, but the joy is in the journey. not the destination<br />
        I am learning a whole lot about bash from this project<br />
        <br />
        You can't return values like how you expect, the return is a status code<br />
        You can return things by just echo'ing what you want to save and capturing it in a variable<br />
        You can return things like how you expect by using the life saving local -n variable declarations<br />
        <br />
        Since finding out about these it made my project possible so I am actually able to do what I want Scope can and will get in your way, which is why I do not mess with the sub-terminals<br />
        Arrays are finicky, fail in unexpected ways, and like to become strings rather than arrays<br />
        My entire experience changed once I learned about "local namerefs" in bash.<br />
        As soon as I learned how to pass things are reference, I was no longer restrained to a really bad function system and being in scope hell.<br />
        <br />
        I learned that if something is working unexpectedly, more often than not, it is a scope issue. Without a comprehensive debugger that can differentiate scope and global variables it because quite difficult to debug.<br />
        I often resorted to just changing variable names even when it was not needed to rule that out as a possibility.<br />
        <br />
        <strong>Overall</strong><br />
        I learned that Bash can do some really powerful things and some really visually interesting things, but it is NOT a conventional programming language. Many of the conventions I have grown to love become a hassle or requiring and newish work around to achieve.<br />
        By doing this project I have learned much of the basic and fun that bash has to offer. I will continue to use bash scripting and vim more and more in both person projects and at work (Managing RHEL Server)<br />
      </Typography>
      <Typography variant="h3" color="secondary">
        The Future
      </Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        While this project is no longer listed as WIP, it is possible I go back to this project and implement multiple users. <br />  
        I think this would be more painful than it is worth right now. Visually, I am not sure where multiple players would go either. <br />  
        The only thing that keeps me interested is that I think it would be interesting to implement multiple "play styles" and compare their results<br />
        <strong>Greedy</strong>- Keep drawing until your hand is >= Dealer's card + 10 <br /> 
        <strong>Conservative</strong>- Never hit if there is a chance of busting <br /> 
        <strong>Card counter</strong>- Keep count of the deck and play accordingly <br /> 
        <strong>Random</strong>- Randomly hit or stand <br /> 
        <strong>Doubler</strong>- If cards= 9,10, or 11 always double <br /> 
        <strong>High better, low better</strong>- Bet high or low <br /> 
        It would be pretty cool to compare results of these play styles 
      </Typography>

      <Typography variant="h3" color="secondary">
        Interractive Demo
      </Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        To be implemented... <br />
        I do not think I will fully implement blackjack, but rather made a little Bash quiz that shows off some of the quirks I learned.
      </Typography>
    </Box>
  </>
}

export default BashJack