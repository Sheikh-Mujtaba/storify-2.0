const db = require ('../config/db');

exports.productsController = (req, res) => {
    const sql = `
      SELECT 
        products.id,
        products.name,
        products.description,
        products.price,
        products.image_path,
        categories.name AS category_name
      FROM 
        products
      JOIN 
        categories 
      ON 
        products.category_id = categories.id
    `;
  
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).json({ 
          success: false, 
          message: 'Error fetching products', 
          error: err.message 
        });
      }
  
      res.status(200).json(results);
    });
  };

  exports.productsByIdController = (req,res) => {
    const productsId =req.params.id ;
    const sql = "SELECT * FROM products WHERE id = ?";
    db.query(sql, [productsId], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error fetching  details', error: err.message });
      }
  
      if (results.length === 0) {
        return res.status(404).json({ message: ' not found' });
      }
  
      res.json(results[0]);

    });
  }