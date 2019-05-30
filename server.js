const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
// Use the array below to store the users. Add/remove/update items in it based off
let storage = [];
let index = 0;
app.use(bodyParser.json());

app.get("/users/:name", function(req, res){
  let index = -1
  let name_id = req.params.name

  for(let i=0; i < storage.length; i++){
    if(storage[i]["name"] === name_id){
      index = i
      
    }
  }
  if (index > 0){
    res.json(storage[index])
  } else res.send("user not found");
})

app.get("/users", function(req, res){
  res.json(storage);
})

app.post("/users", function(req, res){
  var guest = req.body

  if (!guest){
    return res.sendStatus(404);
  }

  storage.push(guest);
  res.json(guest);

})

app.put("/users/:name", function(req, res){ //update a user
  let guest = req.body
  let name_id = req.params.name


  if (!guest){
    return res.sendStatus(404);
  }

  let index = -1;
  for(let i=0; i < storage.length; i++){
    if(storage[i]["name"] === name_id){
      index = i;
    }
  }

  if(index > -1){
    storage[index] = guest
    res.json(guest)
  } else {
    res.send("user not found");
  }

})

app.delete("/users/:name", function(req, res){ //delete user
  let index = -1;
  let name_id = req.params.name

  for(let i=0; i < storage.length; i++){
    if(storage[i]["name"] === name_id){
      index = i;
    }
  }

  if(index > -1){
    let returned = storage[index]
    storage.splice(index, 1);
    res.json(returned);
  } else {
    res.send("user not found");
  }
})

//post new users
//
//get all users
//
//get a user by name
//
//update a user by name
//
//delete a user by name

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
})
