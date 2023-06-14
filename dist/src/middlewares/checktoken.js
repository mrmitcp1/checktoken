"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkToken = void 0;
const checkToken = async (req, res, next) => {
    let token = req.body.token;
    if (token === '1') {
        console.log('token is ok');
        next();
    }
    else {
        res.status(401).json({
            message: 'Unauthorized'
        });
    }
};
exports.checkToken = checkToken;
//# sourceMappingURL=checktoken.js.map