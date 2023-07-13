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

    module.exports=dbConnect();
// #METHOD 1 TO see the data of your data base 
// dbConnect().then((response)=>{
//     response.find().toArray().then((data)=>{
//         console.log(data)
//     });
// })

// # METHOD 2
// const main=async()=>{
//     let data=await dbConnect();
//     data= await data.find().toArray();
//     console.log(data);
// }


// main();

const insertData=async ()=>{
    let data = await dbConnect();
   let result = await data.insertMany(
       [
           {name:'max 5',brand:'micromax',price:420,category:'mobile'},
           {name:'max 6',brand:'micromax',price:520,category:'mobile'},
           {name:'max 7',brand:'micromax',price:620,category:'mobile'},
 
       ]
       )
       console.log(result)
    }
    insertData();















