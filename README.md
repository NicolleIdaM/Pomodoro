# Pomodoro

## Prerequisites
- ElectronJS
- Node.js installed
- npm

## Links
- [ElectronJs](https://www.electronjs.org/pt/docs/latest/tutorial/tutorial-prerequisites)
- [Node.js Download](https://nodejs.org/en/download)
- [How install Node.js](https://youtu.be/lt5D2EWZMN0?si=WPaNDNJWNgTV8r1G)

## Installation (on terminal)
```bash
npm install -g electron
npm init -y
npm install electron --save-dev
```

## Run project
```bash
npx electron .
```

## Command to publish
```bash
npm install --save-dev @electron-forge/cli
npx electron-forge import
npm run make
```

*If there is error, delete the paste "out" and in the paste "package.json" add the author and load again the command 'npm run make'*
