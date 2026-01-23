# Pomodoro

## Prerequisites
- Node.js installed
- npm

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