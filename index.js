const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
// C:\Program Files\MySQL\MySQL Server 8.0\bin
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Connect DB',
  password:'Lavanya@22102',
});
//INSERTING NEW DATA
let q = "INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)";
let user = ["123","123_newuser","abc@gmail.com","abc"];
try{
connection.query(q,user,(err,result)=>{
    if(err) throw err;
    console.log(result);
})}
catch(err){
    console.log(err);
}
let getRandomUser = ()=> {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    
  };
}
// console.log(getRandomUser());