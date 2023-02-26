# Readme

This is a simple Rest Api created using Node and Express JS with local Mongo DB. The object Model is Candidate with fname(string), lname(string), email(string) and score(int).
When the Api started, it will preloaded with 4 Candidates with predefined names and random scores from 60 to 100.


## Install via Git

1. Make sure Node.js 18+ (https://nodejs.org/en/) and MongoDB (https://www.mongodb.com/try/download/community) is installed in the local environment.
When install MongoDB, Select Run the service as Network Service user (Default) and Installed MongoDB as a Windows Service
Use following command in command line to check if node is installed.
```sh
node -v
npm -v
```
2. Use git clone to copy repo to local
```sh
git clone https://github.com/ThomasWYang/candidate_express_app.git
```
3. Change directory into that folder and run following command, the app will run on default port 8080.
```sh
node index.js
```
