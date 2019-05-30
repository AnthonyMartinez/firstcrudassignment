## Your first crud!

Build your first crud app! Using what we learned yesterday create a full crud app for user objects. The objects should look like this:
{
  "name":"user name",
  "email": "user email",
  "state": "CA"
}

Here's a list of all the routes you'll need.
 - Create route for creating new users
 - Get route for getting all users
 - Get route for getting a user by name
 - Update route for updating a user by name
 - Delete route for deleting a user by name


 ### Stretch:
 Add an id field to the object and use that instead of name for all of your routes.

### Anthony's API documentation 
| name | method | url  | desc | |---| ---|---|---| |index | GET | /users
| returns all users| | Show | GET | /users/:name| show a user with name :name|
|Create | POST | /users | Creates a new user | |Update | PUT | /users/:name
| updates user with name :name | |Destroy | DELETE |  /users/:name | Deletes
the user with name :name |
