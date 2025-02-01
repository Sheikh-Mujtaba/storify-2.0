const db = require ('../config/db');

exports.categoriesController= (req , res)=>{
    const sql = "SELECT id ,name FROM categories " ;
    db.query (sql ,(err ,results) =>{
        if (err) {
            return res.status(500).json ({message  :'Error fetching '})
        }
        res.json(results);
    })
}