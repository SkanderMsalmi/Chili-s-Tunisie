const Item = require('../models/item.model');
const Menu = require('../models/menu.model');


const createItem = async (req, res) => {
    try {
        const {name,price} = req.body;
        const firstMenu = await Menu.findOne();
        let image;
        let newItem;
        if(req.file){
           image = `uploads/${req.file.filename}`;
             newItem = new Item({name,price,image});
        }else{
            newItem = new Item({name,price,image:"uploads/default.png"});
        }
            
        const savedItem = await newItem.save();
       
        await Menu.findByIdAndUpdate(firstMenu._id, { $push: { items: savedItem._id } });
        res.status(201).json(savedItem);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateItemById = async (req, res) => {
    try {
        console.log(req.body);
        const {name,price} = req.body;
        const image = `uploads/${req.file.filename}`;
        const newItem = new Item({name,price,image});
        console.log(newItem);
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, {name,price,image},{new:true});
        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
};

const deleteItemById = async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(deletedItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createItem,
    getAllItems,
    getItemById,
    updateItemById,
    deleteItemById,
};
