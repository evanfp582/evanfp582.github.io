## Dev logs

--------------------------------------------------------------
### Restructuring (9/1 or something)    
Right now the purpose of UIManager and ScreenObject kind of blend together

**Screen**  
This should be a group of components that get rendered  
Either rendered by default or the buildCondition is met and stays around until the destroyCondition is met or another screen's buildCondition is met  
Most of the functionality will actually stay the same, but some features from UIManager will be merged in   
Component array and collision check

**UIManager**  
This should run main loop  
Somewhat handle input, especially escapes  
Hold screen state and constantly check for a screen loading/destroying condition  
Screen stack to determine what to generate next

### A React favored approach to front end development (9/6)
I hate Python's Tkinter.  
It is a mess of folders, state, screens, and code jumble.   
Maybe I am bad at managing large python projects, I can concede this, but  
I never felt this way managing a React front end project.  
The Javascript and HTML work together on an element creating a logical chunk of code that is structured.  
On this project I am using kotlin's `apply` function to create very React looking code and I want it to function in a similar way.  
The main page should serve as the app component and basically be a router between the different separated nested component (screens).
Right now I am trying to implement a good routing system where the UIManager is basically always looking to see if a screen should be built or destroyed.  

**Ultimately What do I Want to Make**  
Probably nothing novel, this is more of learning experience/ introspection on my coding experience.  
I'd very much believe that there exists 10+ Kotlin/Java/Python TUI that do all that I want to do, but better.  
I want to create a React inspired TUI build in Kotlin that seamlessly merges front end generation with programmatic logic.  
But my real answer is I want to have fun, learn something new, and dig my teeth into a longer project.

### The flag approach to screen control (9/13)
The UIManager creates an array of booleans and essentially hand out a flag to the screen when it gets added  
The screen just needs to raise their flag (turn it true) and they will be given control of the screen  
I do not love the implementation I took. to both add custom OnEnter functions for select components and routing.  
The main.kt is supposed to represent a use making something of their own. I think that weird map is not very intuitive.  

### How to maneuver around a screen (9/28)
Since I am making more and more complex components that each require "control" of  the cursor I need to start to determine how 
to intuitively allow the user to switch between which components have control of the curser in the absense of a mouse.  
There are a few ways of doing this and I actually want to have fun with it
- Linked List!?
  - I can make a linked list object that just points to each component and if I press `tab` I go forward in the list and if I press `shift+tab` I go back in the list
  - To make a linked list for good instead of evil (LeetCode) actually sounds like a fun idea  
 - Tree!?
   - When components are created within a screen connect to other components so the user can use the arrow keys to traverse the screen
   - Certainly more complex, but also just a fun CS problem to solve
   - Works more intuitively with the Select component where I press up and down to select between options there  

 I am undecided and will need to make a choice as soon as I finish designing this button component
#### (10/1) 
I have a quick and dirty solution with just an array whose order is determined by order of creation.  
I am happy with how quickly I was able to throw it together though 

### How to indicate being selected (10/3)
I have a solution to maneuvering around the screen and I think it is a pretty easy and effective solution.  
Simply I evaluate all the controllable components and sort them based on their up left positioning.  
Check up and down then left and right. Meaning the lower the row the "less" the component and if there is a tie on the row it is determined by the column.  
But now I have a new problem. For each controllable component how do I visually indicate that it is selected.  
For buttons it is easy, simply invert everything, but for Select, and TextBox it is not as obvious.
#### Project Homebase Update??
Sometimes I forget I started this project just to make a cool TUI to go on my linux server  
![Picture of project homebase](/images/ProjectHomebase10-3.png)  
How fun. Created using the glorious https://www.asciiart.eu/text-to-ascii-art