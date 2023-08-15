# Dashboard for creating graphs

## How to use

### First of all, make sure NODEJS is installed on your machine

### The fisrt passe is clone this repository 

```
https://github.com/jvmartinsdaSilva/dashboard.git
``` 
### Configuring the API
  #### Go to API folder directory
  #### First of all we need to setup our MONGODB database.
  ##### Configuring the Database 
  <ul>
    <li>Acess <a href="https://www.mongodb.com">https://www.mongodb.com</a> and create a new project, with a name of your choice</li>
    <li>In this same project create a new Cluster, with a name of your choice</li>
    <li>Now, in this Cluster, create a new DataBase, named dashboard</li>
    <li>And , for lastest, create two new collection in this same database</li>
    <li>Finally, in the same database, create two new Collections with the names of "graphs" and "users" , with both being of type: "Clustered index Collection", with : _id, being its index</li>
  </ul>

  #### Now that our database is ready, let's finish configuring our api, first we install the dependencies with: 

      npm install

  ### Environment variables
  
  #### After installing the dependencies, create a new file called: .env ,
and put:


```
  MONGO_URL= {"Your URI for connecting in you database"}
  SECRET_TOKEN={"Your secret token"}
```
  The MONGO_URL variable, must contain your URI to connect to your MONGODB database;
  The variable SECRET TOKEN, must contain a random string

  ### Now start your server with
      npm run server
  This will make our API run on port 8080

  <hr/>
  
 ### Configuring the APP 
 
   #### Go to APP folder directory
   
   #### Install the dependencies with:
      npm install

  ### Now, cretae new file called: .env, and put: 
      NEXT_PUBLIC_API_URL=http://localhost:8080

  ### Now start your server with
      npm run dev
  This will make our API run on port 3000