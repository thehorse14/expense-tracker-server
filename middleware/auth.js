const jwt = require('jsonwebtoken')
const config =  require('../config/keys')

const { secretOrKey } = config;

const auth = (req, res, next) => {
    const authHeader = req.header('Authorization')
    if (authHeader.startsWith("Bearer ")){
    token = authHeader.substring(7, authHeader.length);
    } else {
        return res.status(401).json({ msg: 'Authorization denied' })
    }
    console.log(token);
    // Check for token
    if (!token)
        return res.status(401).json({ msg: 'Authorization denied' })

    try {
        // Verify token
        const decoded = jwt.verify(token, secretOrKey)
        // Add user from payload
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' })
    }
};

module.exports = auth