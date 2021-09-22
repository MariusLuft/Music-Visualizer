# Music-Visualizer
A program to visualize audio files in an appealing way

## Concepts and Technology

After a browser update that denies playing audio without explicit user conscent, the p5.sound.js file does not seem to work. Even with a freshly installed p5.js package using the icnludes from p5's example project. Thats why I opted to work with the p5.js web editor which avoids this bug.

Sound is currently not working in Chrome due to changes in the way that sound can be played. It seems that Chrome now only allows a sound context to be created with a user click. This is what forced me to implement a play button which was initially not intended.
