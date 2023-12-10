const express = require('express');
const menuController = require('../controllers/menu.controller');
const multer = require('multer');
const upload = multer({dest:'uploads/'});
const path = require('path');
const router = express.Router();

router.post('/',menuController.createMenu);
router.get('/', menuController.getAllMenus);
router.get('/withItems', menuController.getAllMenusWithItems);
router.get('/:id', menuController.getMenuById);
router.put('/:id', menuController.updateMenuById);
router.delete('/:id', menuController.deleteMenuById);


// add remv items from menu
router.post('/:menuId/addItem/:itemId', menuController.addItemToMenu);
router.delete('/:menuId/removeItem/:itemId', menuController.removeItemFromMenu);

module.exports = router;