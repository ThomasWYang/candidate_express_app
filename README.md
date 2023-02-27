# Readme

This is a simple Rest Api created using Node and Express JS with local Mongo DB. The object Model is Candidate with fname(string), lname(string), email(string) and score(int).
When the Api started, it will preloaded with 4 Candidates with predefined names and random scores from 60 to 100.


## Install via Git

1. Make sure Node.js 18+ (https://nodejs.org/en/) and MongoDB (https://www.mongodb.com/try/download/community) is installed in the local environment.
When install MongoDB, Select "Run the service as Network Service user (Default)" and "Installed MongoDB as a Windows Service".
Use following command in command line to check if node is installed.
```sh
node -v
npm -v
```
2. Use git clone to copy repo to local
```sh
git clone https://github.com/ThomasWYang/candidate_express_app.git
```
3. Change directory into that folder and run following command, the app will run on port 4000.
```sh
node index.js
```
## Install via Docker

1. Make sure Docker desktop (https://www.docker.com/) is running.
2. Pull the docker image from docker hub.
```sh
docker pull thomasy2022/candidate_express_app
docker pull mongo
```
3. Use docker-compose.yml file inside this repo combined with the docker image to run the app on port 4000
```sh
docker compose up
```
## Usage

You may test the script via various tools like browsers and postman, I will show how to use curl to test the api in windows cmd or linux below. (add -v after curl to show detailed info)
1. Show all candidates
```sh
curl -v "localhost:4000/candidates"
```
2. Show single candidate by ID, if exist, that candidate will be returned. 
```sh
curl "localhost:4000/candidates/1"
```
3. Show single candidate by ID, if not exist, Not found info will be returned. 
```sh
curl "localhost:4000/candidates/99"
```
4. Search candidates by fname, lname or email (you can give any combination of these 3 fields).
```sh
curl “localhost:4000/candidates?fname=Thomas&lname=Yang”
```
```sh
curl “localhost:4000/candidates?email=thomas.y2022@gmail.com”
```
5. Create candidate with fname, lname and email (id will be generated automatically)
```sh
curl -v -X POST "localhost:4000/candidates" -H "Content-type:application/json" -d "{\"fname\": \"aaa\", \"lname\": \"bbb\", \"email\":\"aaa@gmail.com\"}"
```
6. Create candidate with fname, lname, email and score (id will be generated automatically)
```sh
curl -v -X POST "localhost:4000/candidates" -H "Content-type:application/json" -d "{\"fname\": \"mmm\", \"lname\": \"nnn\", \"email\":\"mmm@gmail.com\", \"score\":80}"
```
7. Update candidate with id
```sh
curl -v -X PUT "localhost:4000/candidates/4" -H "Content-type:application/json" -d "{\"fname\": \"xxx\", \"lname\": \"yyy\", \"email\":\"xxx@gmail.com\", \"score\":90}"
```
8. Delete candidate with id
```sh
curl -v -X DELETE "localhost:4000/candidates/4"
```
