
import mongoose from 'mongoose' ;

const Connection= async()=>{

   try{ 
     const URL='mongodb://user:12345@blogweb-shard-00-00.ol6v5.mongodb.net:27017,blogweb-shard-00-01.ol6v5.mongodb.net:27017,blogweb-shard-00-02.ol6v5.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-i7d0dp-shard-0&authSource=admin&retryWrites=true&w=majority';

    await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true}) ;
    console.log('Database connected successfully') ;
   }
   catch(error)
   {
       console.log('Error while connecting to MongoDB',error) ; 
   }
}
export default Connection ;