const express = require ('express');
const {productsController , productsByIdController} = require ('../controller/productsController');
const router = express.Router();

router.get('/',productsController);
router.get('/:id',productsByIdController);



module.exports = router;
