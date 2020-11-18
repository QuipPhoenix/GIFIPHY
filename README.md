hosted at : [https://quipphoenix.github.io/GIFIPHY/](https://quipphoenix.github.io/GIFIPHY/ "GIFIPHY")

## **GIFIPHY** 
Using Web Assembly to build an app that converts video files to GIF (using FFmpeg), entirely from a frontend React JavaScript application.

# How it Works:
I have downloaded web assembly binaries for ffmpeg directly into the react app allowing me to combine the C programming language to javascript and offload the video editing works to end user hardware. I have generated a new react app using snowpack. 

Inside the app I have installed the package **"npm install @ffmpeg/ffmpeg @ffmpeg/core"**

We can upload the video from our desktop and select the length of the gif and starting time and converted the video file into a gif file.

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.js` config file.

### npm test

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.
