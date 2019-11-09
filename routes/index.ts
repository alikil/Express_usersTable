var express = require('express');
var router = express.Router();
//import {acc} from "../db/newRandomAccs";
import { sqlite } from "../db/maindb";
const DB = new sqlite()



router.get('/', (req: any, res:any, next: any) => {
  res.render('index');
});

router.get('/table', (req: any, res:any, next: any) => {
  if (req.query.table == "main"){
    DB.getAll().then(Users => {
      res.send(Users)
    })  
  }
  if (req.query.table == "addUser"){
    DB.addUser(req.query.data)
    res.send("ok")
  }
});

router.post('/table', (req: any, res:any, next: any) => {
  if (req.query.table == "addUser"){
    DB.addUser(req.body).then(() => {
      res.send("ok")
    })    
  }
});




export default router;
