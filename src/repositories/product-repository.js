'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports.get = () => {
        return Product
            .find({
                active: true
            }, 'title price slug');
    }

module.exports.getById = (id) => {
        return Product
            .findById(id);
    }    
    
module.exports.getBySlug = (slug) => {
        return Product
            .findOne({
                slug: slug,
                active: true
            }, 'title description price slug tags');
    }

module.exports.getByTag = (tag) => {
        return Product
            .find({
                tags: tag,
                active: true
            }, 'title description price slug tags');
    }

module.exports.create = (data) => {
    var product = new Product(data);
    return product.save();
}

module.exports.update = (id, data) => {
    return Product
    .findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price
        }
    })
}

module.exports.delete = (id) => {
    return Product
    .findByIdAndRemove(id)
}