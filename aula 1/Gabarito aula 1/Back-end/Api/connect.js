
// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
 "mongodb+srv://Vnvinih:@Vnvinih1@cluster0>.mongodb.net/<database>?retryWrites=true&w=majority"

  
const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
