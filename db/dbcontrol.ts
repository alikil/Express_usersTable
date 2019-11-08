import * as sqlite3 from "sqlite3";
  const init = () => {
    const DB_PATH = "./db/sqlite.db";
    let db = new sqlite3.Database(DB_PATH, (err) => {if (err) {return;}});
    let schema = `
    CREATE TABLE IF NOT EXISTS Users (
        FirstName TEXT NOT NULL PRIMARY KEY,
        LastName TEXT NOT NULL,
        Something TEXT NOT NULL,
        Email TEXT NOT NULL,
        Pass TEXT NOT NULL
    )`
    db.exec(schema, (err) => {if (err) {console.log(err);}});
    //db.close((err) => {if (err) {return console.error(err.message);}});
    return db
  }

  const db = init()
    const interer = `
    INSERT INTO Users (FirstName, LastName, Something,Email,Pass) 
    VALUES (?,?,?,?,?)
    `

import {acc} from "./newRandomAccs"
acc
.map((res)=>{return Object.values(res)})
    .map((res)=>{return res
    .map((res)=>{return res})
    })
    .map((res)=>{  
        const append = res
        db.run(interer,append, (err)=>{
            if (err) throw err;
            console.log("ok");
        })        
    })




    

