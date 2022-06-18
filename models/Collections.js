const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Products = require('./Products')
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Collections = new Schema({
    collection_name: {type: String, required: true, unique: true},
    collection_slug: {type: String, slug: "collection_name", unique: true},
    classes: [{
        class_name: {type: String, required: true, unique: true},
        class_slug: {type: String, slug: "class_name", unique: true},
        products: [Products]
    }],
},
{
    timestamps: true,
})

module.exports = mongoose.model('Collections', Collections);