# koa2-boilerplate for a REST API
WIP!!!!!!

Just listing resources at the moment.


## Sample data
We will use users and companies collection in the test database. 

The following is a sample documents of the companies collection:
 
```
  {
    "_id": "56bc593d3d047a23a990b209",
    "index": 0,
    "balance": "$1,102.03",
    "manager": "Wilma Hewitt",
    "gender": "female",
    "company": "ACCIDENCY",
    "email": "wilmahewitt@accidency.com",
    "phone": "+1 (961) 518-2761",
    "address": "779 Barlow Drive, Bowie, Delaware, 2782"
  },
```

The following is a sample documents of the users collection:
``` 
  {
    "_id": "56bc57c4a615547381588062",
    "index": 0,
    "isActive": false,
    "name": "Moore",
    "surname": "Vinson",
    "email": "moorevinson@conferia.com",
    "phone": "+1 (902) 511-2314",
    "address": "433 Sullivan Street, Twilight, Maine, 4931"
  },
```
json files were generated using an [online json generator](http://www.json-generator.com/) and can be imported to mongo using script *mongoimport.sh* provided.

## Install
```
./mongoimport.sh
npm install
npm start
```

Open the browser using the following urls:
* http://localhost/api/users for users resources
* http://localhost/api/companies for companies resouces

