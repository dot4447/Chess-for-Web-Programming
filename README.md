
# MyChess ♞
A chess mini project made with React. Supports multiplayer and local play.


## Installation

The current version simply runs locally. 

Download the program files and open terminal to the download folder. This can be done by right clicking in your folder and selecting "Open in Terminal". 

Run the following commands (in order!):
```bash
cd .\chess_backend
```
You should now be in the chess backend folder. Now run:

```bash
npm install express socket.io uuid
```
```bash
npm install nodemon --save-dev
```
Now move to the chess client folder:
```bash
cd ..\chess_client
```
You should now be in the chess client folder. Now run:
```bash
npm i
```
```bash
npm install react-chessboard chess.js socket.io-client @mui/material @emotion/react @emotion/styled
```
Do not close the terminal yet to run the program. Simply switch tabs to your file explorer.
## Starting the Website

To first run the online game server, go to the backend folder and open 'server.js'.

Now go back to your terminal which is in the chess client folder and run:
```bash
  npm run dev
```
The terminal should show you a localhost link you can open to play the game. Open it in two tabs/browsers for multiplayer.


## Authors

- [Adidev Anand](https://github.com/CodinGakpo)
- [Aditya Sharma](https://github.com/dot4447)
- [Prateek Purohit](https://github.com/prateekpurohit13)

