//u23591732 Neo Bosoga 
const {MongoClient} = require('mongodb');

const url = "mongodb+srv://IMYuser:Eduplex2023@cluster0.1zrlw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url);

async function main() {
    try {
        // Create Connection
        await client.connect();
        

        // Set Database
        const db = client.db("prac5db");
        const coll = db.collection("events");

       

const query = {locations : {
     $elemMatch : {
        area : 'Brooklyn',
        capacity : {$gt : 20},
        date : {$gt : "2022/10/08" ,$lt : "2022/10/26"}
     }
}}
        const event = await coll.find(query,{projection : {name:1,description:1,_id:0}}).toArray();
        console.log('Filtered events:', event);

        

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);