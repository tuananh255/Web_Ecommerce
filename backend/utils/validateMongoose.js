const mongoose = require('mongoose')

const validateMongooseDbId = (id)=>{
    const isvalid = mongoose.Types.ObjectId.isValid(id)
    if(!isvalid)
    {
        throw new Error('this id is not valid or not found')
    }
}

module.exports = validateMongooseDbId 