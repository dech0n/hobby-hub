const db = require('./db/models');

const loginUser = (req, res, user) => {
    req.session.auth = {
        userId: user.id
    }
}

const restoreUser = async (req, res, next) => {
    if(req.session.auth) {
        const { userId } = req.session.auth;
        try {
            const user = await db.User.findByPk(userId);
            if (user) {
                res.locals.authenticated = true;
                res.locals.user = user;
                next();
            }
        } catch (e) {
            res.locals.authenticated = false;
            next(e);
        }
    } else {
        res.locals.authenticated = false;
        next();
    }
}

const logoutUser = (req, res) => {
    delete req.session.auth;
}



module.exports = {
    restoreUser,
    loginUser,
    logoutUser
}
