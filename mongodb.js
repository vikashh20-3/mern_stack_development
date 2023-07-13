const {MongoClient} =require('mongodb');
const url ='mongodb://localhost:27017';
const client =new MongoClient(url);
const databaseName='databse';


async function dbConnect (){
    let result =await client.connect();
    let db=result.db(databaseName);
    return db.collection('products');
    // console.log(collection)
    // let data =await collection.find({}).toArray();
    // console.log(data)
}
// #METHOD 1 TO GET 
// dbConnect().then((response)=>{
//     response.find().toArray().then((data)=>{
//         console.log(data)
//     });
// })

// # METHOD 2
const main=async()=>{
    let data=await dbConnect();
    data= await data.find().toArray();
    console.log(data);
}
main();














