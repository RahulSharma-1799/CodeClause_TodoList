<H1 align ="center" > To_Do_List </h1>
<h5  align ="center"> 
Fullstack open source blogging application made with MongoDB, Express, React & Nodejs (MERN) </h5>
<br/>

  * [Configuration and Setup](#configuration-and-setup)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  * [📸 Screenshots](#screenshots)
  * [Author](#author)
  * [License](#license)


## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the Client on one terminal and the Server on the other terminal)

In the first terminal

```
$ cd client
$ npm install (to install client-side dependencies)
$ npm run  start (to start the client)
```

In the second terminal

- cd server and Set environment variables in config.env under ./config
- Create your mongoDB connection url, which you'll use as your MONGODB_URL
- Supply the following credentials

```
#  ---  Config.env  ---

MONGODB_URL =

```


```
# --- Terminal ---

$ npm install (to install server-side dependencies)
$ node index.js (to start the server)
```

##  Key Features

- CRUD operations (ToDo create, read, update and delete)
- Mark task as completed / uncompleted
- Delete single task
- Delete completed tasks
- Delete all tasks
- Responsive Design

<br/>

##  Technologies used

This project was created using the following technologies.

####  Frontend 

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks  ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [Css](https://developer.mozilla.org/en-US/docs/Web/CSS) - For User Interface
- [Material icons](https://mui.com/material-ui/getting-started/) -
 Small library that helps you add icons  to your react apps.

####  Backend 

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [Mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to JavaScript
- [cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware


####  Database 

 - [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.
 
 ##  Screenshots
 --- -
![1](https://github.com/RahulSharma-1799/CodeClause_TodoList/assets/110728597/cc17ee94-3048-41b7-96ba-3961d5d6f6af)
--- -
![2](https://github.com/RahulSharma-1799/CodeClause_TodoList/assets/110728597/72039763-4e7f-4ab1-9744-c7a341813800)
--- -
![3](https://github.com/RahulSharma-1799/CodeClause_TodoList/assets/110728597/bd7f918c-899d-4993-928b-48f9754c64b6)
--- -
![4](https://github.com/RahulSharma-1799/CodeClause_TodoList/assets/110728597/9381acd4-e130-4a46-bc99-220a50569be7)
--- -
![5](https://github.com/RahulSharma-1799/CodeClause_TodoList/assets/110728597/ae4e6e00-9b12-424a-86bf-ed1512f83f44)
--- -
![6](https://github.com/RahulSharma-1799/CodeClause_TodoList/assets/110728597/725b8b95-e36c-44bb-9efc-356769586e9c)
--- -
![7](https://github.com/RahulSharma-1799/CodeClause_TodoList/assets/110728597/b3bacb34-9231-4146-8ad1-26aaefef3d59)

## Author
- Github: [RahulSharma](https://github.com/RahulSharma-1799)
- Linkedin: [RahulSharma](https://www.linkedin.com/in/rahul011/)
- Email: [142002rahulsharma@gmail.com](mailto:142002rahulsharma@gmail.com)

## License
