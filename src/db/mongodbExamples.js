/*const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId*/

const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client)=>{
    if(error){
        return console.log("Unable to connect to the database")
    }
    console.log("Connected to the database")
    const db = client.db(databaseName)

    
   
    
})
/************************************************************************************* */
// Insert one document in the collection

/*db.collection('users').insertOne({
    name: 'Mostafa',
    age: "23",
}, (error, result)=>{
    if(error){
        return console.log("Unable to insert user")
    }
    
    console.log("User added:", result.insertedId)
})*/

// Insert many documents in the collection

    /*db.collection('users').insertMany([{
        name:'mostafa1',
        age:'23'
    },{
        name:'mostafa2',
        age:23
    }], (error, result) =>{
        if(error){
            return console.log("Unable to add users")
        }
        console.log("Users added:", result)
    })*/


    // Insert 3 tasks in tasks collection
    /*const tasks = [
        {
            description:'task1',
            completed: false
        },
        {
            description:'task2',
            completed: false
        },
        {
            description:'task3',
            completed: false
        },
    ]
    db.collection('tasks').insertMany(tasks, (error, result)=>{
        if(error){
            return console.log("Unable to add tasks")
        }
        console.log("Tasks added:", result)
    })*/


/************************************************************************************* */
// Find

/*db.collection('users').findOne({ _id: new ObjectId("62ed40d09861ffe97fc34db1"), name:"mostafa1" }, (error, user)=>{
    if(error){
        return console.log("Unable to fetch")
    }

    console.log("Found user:", user)
})*/

/*db.collection('users').find({ age: 23}).toArray((error, users)=>{
    if(error){
        return console.log("Unable to find users")
    }
    console.log("users:",users)
})
db.collection('users').find({ age: 23}).count((error, count)=>{
    if(error){
        return console.log("Unable to find users")
    }
    console.log("count:",count)
})*/

/************************************************************************************* */
// Update
/*db.collection('users').updateOne({
    _id: new ObjectId('62ed40d09861ffe97fc34db1'),
    name: 'mostafa1'
},
{
    $set:{
        name:'mostafa99'
    }
}    
).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})*/
/*db.collection('users').updateMany({
    _id: new ObjectId('62ed40d09861ffe97fc34db1'),
},
{
    $set:{
        name:'mostafa88'
    },
    $inc:{
        age:1
    }
}    
).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})*/

/************************************************************************************* */
// Delete

 /*db.collection('users').deleteOne({
    _id: new ObjectId('62ed48f346ee6b55946b4991')
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})*/
/*db.collection('users').deleteMany({
    name: 'mostafa99'
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})*/