const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Item = require('./item.model');

const menuSchema = new Schema({
    name: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
