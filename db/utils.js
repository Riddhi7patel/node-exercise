import connection from "../db";


function dbquery(queryStr, vals){
    return new Promise((resolve, reject)=> {
        connection.query(queryStr, vals,(err, result)=> {
            if (err) reject(err);
            resolve(result);
        });

    })
}
export default dbquery;