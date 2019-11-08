var express = require('express');
var router = express.Router();
//import {acc} from "../db/newRandomAccs";
import { sqlite } from "../db/maindb";
const DB = new sqlite()



router.get('/', (req: any, res:any, next: any) => {
  res.render('index', { title: 'Express' });
});

router.get('/getdb', (req: any, res:any, next: any) => {  
  DB.getAll().then(Users => {
    res.send(Users)
  })    
});

export default router;
