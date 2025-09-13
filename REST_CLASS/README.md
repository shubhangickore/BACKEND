Microsoft Windows [Version 10.0.19045.6332]
(c) Microsoft Corporation. All rights reserved.

C:\Users\dell>mongosh
Current Mongosh Log ID: 68c5b13cbe46ac1cb1c73bf7
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.1
Using MongoDB:          8.0.0
Using Mongosh:          2.3.1
mongosh 2.5.8 is available for download: https://www.mongodb.com/try/download/shell

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2025-09-13T23:29:17.795+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> ls
ReferenceError: ls is not defined (Are you trying to run a script written for the legacy shell? Try running `snippet install mongocompat`)
test> help

  Shell Help:

    use                                        Set current database
    show                                       'show databases'/'show dbs': Print a list of all available databases.
                                               'show collections'/'show tables': Print a list of all collections for current database.
                                               'show profile': Prints system.profile information.
                                               'show users': Print a list of all users for current database.
                                               'show roles': Print a list of all roles for current database.
                                               'show log <type>': log for current connection, if type is not set uses 'global'
                                               'show logs': Print all logs.

    exit                                       Quit the MongoDB shell with exit/exit()/.exit
    quit                                       Quit the MongoDB shell with quit/quit()
    Mongo                                      Create a new connection and return the Mongo object. Usage: new Mongo(URI, options [optional])
    connect                                    Create a new connection and return the Database object. Usage: connect(URI, username [optional], password [optional])
    it                                         result of the last line evaluated; use to further iterate
    version                                    Shell version
    load                                       Loads and runs a JavaScript file into the current shell environment
    enableTelemetry                            Enables collection of anonymous usage data to improve the mongosh CLI
    disableTelemetry                           Disables collection of anonymous usage data to improve the mongosh CLI
    passwordPrompt                             Prompts the user for a password
    sleep                                      Sleep for the specified number of milliseconds
    print                                      Prints the contents of an object to the output
    printjson                                  Alias for print()
    convertShardKeyToHashed                    Returns the hashed value for the input using the same hashing function as a hashed index.
    cls                                        Clears the screen like console.clear()
    isInteractive                              Returns whether the shell will enter or has entered interactive mode

  For more information on usage: https://docs.mongodb.com/manual/reference/method
test> use college
switched to db college
college> show collections
student      72.00 KiB
college> db.student.insertOne({ name:"Isu" , age: 3 , marks:88 })
{onfig       72.00 KiB
  acknowledged: true,B
  insertedId: ObjectId('68c5b84dbe46ac1cb1c73bf8')
}ostman      40.00 KiB
college> db.insertOne({name:"Ved" , age: 5, marks:99 })
TypeError: db.insertOne is not a function
college> db.student.insertOne({name:"Ved" , age: 5, marks:99 })
{hatsapp     40.00 KiB
  acknowledged: true,
  insertedId: ObjectId('68c5b8e6be46ac1cb1c73bf9')
}
college> db.student.insertMany([{name:"Vishu" , age : 25 },{name:"shiva" , age:21 , city:"Pune"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('68c5bc4ebe46ac1cb1c73bfa'),
    '1': ObjectId('68c5bc4ebe46ac1cb1c73bfb')
  }
}
college> db.student.find()
[
  {
    _id: ObjectId('66efc2ff403b7d3ac5c73bfc'),
    name: 'ishu',
    performance: { marks: 99, grade: 'a' }
  },
  {
    _id: ObjectId('68c5b84dbe46ac1cb1c73bf8'),
    name: 'Isu',
    age: 3,
    marks: 88
  },
  {
    _id: ObjectId('68c5b8e6be46ac1cb1c73bf9'),
    name: 'Ved',
    age: 5,
    marks: 99
  },
  { _id: ObjectId('68c5bc4ebe46ac1cb1c73bfa'), name: 'Vishu', age: 25 },
  {
    _id: ObjectId('68c5bc4ebe46ac1cb1c73bfb'),
    name: 'shiva',
    age: 21,
    city: 'Pune'
  }
]
college> db.student.find({marks:{$gt:75}})
[
  {
    _id: ObjectId('68c5b84dbe46ac1cb1c73bf8'),
    name: 'Isu',
    age: 3,
    marks: 88
  },
  {
    _id: ObjectId('68c5b8e6be46ac1cb1c73bf9'),
    name: 'Ved',
    age: 5,
    marks: 99
  }
]
college> db.student.find({city:{$in:["Mumbai","Pune"]}})
[
  {
    _id: ObjectId('68c5bc4ebe46ac1cb1c73bfb'),
    name: 'shiva',
    age: 21,
    city: 'Pune'
  }
]
college> db.student.find({$or:[{marks:{$gt:75}{city:{$in:["Mumbai","Pune"]}}}]})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:37)

> 1 | db.student.find({$or:[{marks:{$gt:75}{city:{$in:["Mumbai","Pune"]}}}]})
    |                                      ^
  2 |

college> db.student.find({$or:[{marks:{$gt:75},{city:{$in:["Mumbai","Pune"]}}}]})
Uncaught:
SyntaxError: Unexpected token (1:38)

> 1 | db.student.find({$or:[{marks:{$gt:75},{city:{$in:["Mumbai","Pune"]}}}]})
    |                                       ^
  2 |

college> db.student.find({$or:[{marks:{$gt: 75}},{city:"Pune"}]})
[
  {
    _id: ObjectId('68c5b84dbe46ac1cb1c73bf8'),
    name: 'Isu',
    age: 3,
    marks: 88
  },
  {
    _id: ObjectId('68c5b8e6be46ac1cb1c73bf9'),
    name: 'Ved',
    age: 5,
    marks: 99
  },
  {
    _id: ObjectId('68c5bc4ebe46ac1cb1c73bfb'),
    name: 'shiva',
    age: 21,
    city: 'Pune'
  }
]
college> db.student.insertOne({name:"shubhangi" , performance:{marks:93 , grade :"A"}})
{
  acknowledged: true,
  insertedId: ObjectId('68c5cb35be46ac1cb1c73bfc')
}
college> db.student.findOne({"performance.marks":93})
{
  _id: ObjectId('68c5cb35be46ac1cb1c73bfc'),
  name: 'shubhangi',
  performance: { marks: 93, grade: 'A' }
}
college> db.student.deleteOne({city:"Pune"})
{ acknowledged: true, deletedCount: 1 }
college> db.student.find()
[
  {
    _id: ObjectId('66efc2ff403b7d3ac5c73bfc'),
    name: 'ishu',
    performance: { marks: 99, grade: 'a' }
  },
  {
    _id: ObjectId('68c5b84dbe46ac1cb1c73bf8'),
    name: 'Isu',
    age: 3,
    marks: 88
  },
  {
    _id: ObjectId('68c5b8e6be46ac1cb1c73bf9'),
    name: 'Ved',
    age: 5,
    marks: 99
  },
  { _id: ObjectId('68c5bc4ebe46ac1cb1c73bfa'), name: 'Vishu', age: 25 },
  {
    _id: ObjectId('68c5cb35be46ac1cb1c73bfc'),
    name: 'shubhangi',
    performance: { marks: 93, grade: 'A' }
  }
]
college> db.student.deleteMany({marks:{$lt:75}})
{ acknowledged: true, deletedCount: 0 }
college> db.dropDatabase()
{ ok: 1, dropped: 'college' }
college>
