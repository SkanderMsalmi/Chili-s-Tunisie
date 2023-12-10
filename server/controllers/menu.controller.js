const Menu = require('../models/menu.model');
const Item = require('../models/item.model');
const createMenu = async (req, res) => {
    try {

        const newMenu = new Menu(req.body);
        const savedMenu = await newMenu.save();
        res.status(201).json(savedMenu);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getAllMenus = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.status(200).json(menus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllMenusWithItems = async (req, res) => {
    try {
        const menus = await Menu.find().populate('items');
        res.status(200).json(menus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getMenuById = async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id).populate('items');
        if (!menu) {
            return res.status(404).json({ error: 'Menu not found' });
        }
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateMenuById = async (req, res) => {
    try {
        const updatedMenu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMenu) {
            return res.status(404).json({ error: 'Menu not found' });
        }
        res.status(200).json(updatedMenu);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteMenuById = async (req, res) => {
    try {
        const deletedMenu = await Menu.findByIdAndDelete(req.params.id);
        if (!deletedMenu) {
            return res.status(404).json({ error: 'Menu not found' });
        }
        res.status(200).json(deletedMenu);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addItemToMenu = async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.menuId);
        if (!menu) {
            return res.status(404).json({ error: 'Menu not found' });
        }

        const item = await Item.findById(req.params.itemId);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

        // if item exist
        if (menu.items.indexOf(req.params.itemId) === -1) {
            menu.items.push(item);
            await menu.save();
        }

        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const removeItemFromMenu = async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.menuId);
        if (!menu) {
            return res.status(404).json({ error: 'Menu not found' });
        }

        const itemIndex = menu.items.indexOf(req.params.itemId);
        if (itemIndex !== -1) {
            menu.items.splice(itemIndex, 1);
            await menu.save();
        }

        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createMenu,
    getAllMenus,
    getAllMenusWithItems,
    getMenuById,
    updateMenuById,
    deleteMenuById,
    addItemToMenu,
    removeItemFromMenu
};
