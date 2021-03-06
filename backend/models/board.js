var mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment')

autoIncrement.initialize(mongoose.connection)

var boardSchema = mongoose.Schema({
    userId: {type:String, required:true},
    writer: {type:String, required:true},
    title: {type:String, required:true},
    contents: {type:String, required:true},
    comments: [{
        id: {type:String, required:true},
        name: {type:String, required:true},
        memo: String,
        createAt: { type: Date, default: Date.now }
    }],
    count: { type: Number, default: 0 },
    createAt: { type: Date, default: Date.now },
    _id: {
        type: Number,
        unique: true
    }
},{
    versionKey:false
});

boardSchema.plugin(autoIncrement.plugin, {
    model: 'Board',
    field: '_id',
    startAt: 1
})

var Board = mongoose.model('Board', boardSchema, 'Boardlist');
module.exports =  Board;