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
    addUser(users: string[]){
        const interer = `
        INSERT INTO Users (FirstName, LastName, Something, Email, Pass) 
        VALUES (?,?,?,?,?)
        `
        users
        .map((res)=>{return Object.values(res)})
        .map((res)=>{return res
            .map((res)=>{return res})
        })
        .map((res)=>{
            this.DB.run(interer,res, (err)=>{
                if (err) throw err;
                console.log("ok");
            })
        })
    }
}
export { sqlite }
