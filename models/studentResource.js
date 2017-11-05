var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//mongoose.Promise = global.Promise;

var resourceSchema = new Schema({
    name:{
        type: String, 
        require: 'kindly enter your name'
    },
    createdDate:{
        type: Date,
        default: Date.now
    },
    type:{
        type: String,
        require: 'select the type of resource' 
    },
    group:{
        type: String,
        require: 'Select your Class'
    },
    selection:{
        type: String,
        require: 'Select your grouping for the resource'
    },
    note:{
        type: String,
        require: 'Enter details on the resource'
    }

})

module.exports = mongoose.model('Resource', resourceSchema)