const express = require('express');
const itemController = require('../controllers/item.controller');
const multer = require('multer');
const router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
 
      cb(null, 'uploads/')
    },
    filename: (req, file, cb)=>{
        const timestamp = Date.now();
        const extension = file.originalname.split('.').pop(); // Get the file extension
        const uniqueFilename = `plat-${timestamp}.${extension}`;
        cb(null, uniqueFilename);
    }
  })
  

  const upload = multer({ storage: storage })
router.get('/', itemController.getAllItems);
router.post('/',upload.single('image'), itemController.createItem);
router.get('/:id', itemController.getItemById);
router.put('/:id',upload.single('image'), itemController.updateItemById);
router.delete('/:id', itemController.deleteItemById);

module.exports = router;