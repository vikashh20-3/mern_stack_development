const dbConnect= require('./mongodb')

const updateData=async ()=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        { name:'max 5'},
        {
            $set:{name:'max ', price:1000}
        }
        )
    console.log(result)

}

updateData();