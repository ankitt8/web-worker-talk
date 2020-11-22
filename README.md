# web-worker-talk

This repo contains everything I reffered to give the talk on Web Worker.

## How To Run Code
If live-server is not installed install it using ```npm install live-server -g``` <br>
Once installed run the code using ```live-server``` command

## How to see difference between the performance with and without web - worker
Click the performance tab in google developer console<br>
Click on Record profile button and observe that in case of web worker<br>
The main thread isn't blocked and all computation is done inside web worker.
