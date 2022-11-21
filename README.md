Get YouTube Subscribers - Backend Capstone Project

First install npm dependencies of express and mongoose using npm install command.
Start the backend server using npm start or node src/index.js command.

Hii all this is simple api made with the technologies node js, express js, mongoose and mongodb
This is a youtube subscribers rest api which fetches the data from the databse and furthers return it as a response 
There are 3 api endpoints in it which are as follows :-
THe first one will fetch you all the subscribers object , the second one won't be having a timestamp and the third one will generally fetch by the respective id
if the id does not match it will in return give an error object with a message in it.

In this api generally combination of node express and mongo is combined to get the desired results.It is a very simple and easy to make api and everything
has been clearly written in the code itself in the comments how everything has been donee and how everything is working.

the main approach is that the routes mentioned above are all get routes and are giving something in return. According to the requests they are looking into the 
database and are providing with the data which is then handled and some work is performed on it and is thus returned by the api. This work which is being done to it 
all is mentioned very clearly in the app.
one has to clone the repo and download all the node packages and can see how it is running and can experience it.
All the errors are handled and variables are given with proper naming . The MVC pattern is followed for the making of the api. It is a simple and easy to understand 
project as everything is mentioned very clearly.

GET https://youtube-subscriber-almabetter.herokuapp.com/subscribers  to get array of subscribers.

GET https://youtube-subscriber-almabetter.herokuapp.com/subscribers/names to get array of subscribers with only name and subscribedChannel fields.

GET https://youtube-subscriber-almabetter.herokuapp.com/subscribers/id to get a subscriber by its unique id.

Note: If the wrong id is entered in the url, then the client will encounter 400 Bad Request status code indicating that the server cannot or will not process the request due to something that is perceived to be a client error.


