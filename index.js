import 'dotenv/config';
import express from 'express';
import { engine } from 'express-handlebars';
import session from 'express-session';
import { MongoClient } from 'mongodb';
import services from './routes/routes.js';

const app = express()

app.use(express.static('public'));
app.use(express.static('images'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
  secret: process.env.APP_SECRET,
  resave: false,
  saveInitialized: false
}));

export async function connectToCluster(uri) {
    let mongoClient;
 
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
 
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
 }


 const route= new services();
 app.get("/",route.homePage);


const PORT= process.env.PORT||3000;

app.listen(PORT,function(){
    console.log("App starting on port "+PORT);
});