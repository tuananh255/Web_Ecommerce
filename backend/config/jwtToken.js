const jwt = require('jsonwebtoken')

const genarateToken = (id)=>{
    return jwt.sign({id},"SECRET",{expiresIn:"1d"})
}

module.exports ={genarateToken}