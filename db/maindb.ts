import * as sqlite3 from "sqlite3";
class sqlite {
    DB: sqlite3.Database;
    constructor() {
        this.DB = this.init()
    }
    init () {
        const DB_PATH = "./db/sqlite.db";
        let DB = new sqlite3.Database(DB_PATH, (err: any) => {if (err) {return;}});
        return DB
    }
    getAll() {
        return new Promise((resolve, reject) => {
            this.DB.all(`SELECT * FROM Users`,(err,data)=>{
                if (err) {throw err}
                data ? resolve(data) : reject("Not Found");
            })
        })
    }
    addUser(users: string){
        return new Promise((resolve, reject) => {
            const interer = `
            REPLACE INTO Users (FirstName, LastName, Something, Email, Pass) 
            VALUES (?,?,?,?,?)
            `
            const add = JSON.parse(users)
            this.DB.run(interer,add, (err)=>{
                if (err) throw err;
                console.log("ok");
                resolve("ok")
            })
        })
    }
}
export { sqlite }
