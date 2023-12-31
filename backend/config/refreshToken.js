const jwt = require('jsonwebtoken')

const genarateRefreshToken = (id)=>{
    return jwt.sign({id},"SECRET",{expiresIn:"3d"})
}

module.exports ={genarateRefreshToken}