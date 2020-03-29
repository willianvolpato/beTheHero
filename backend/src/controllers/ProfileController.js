const dbConnection = require('../database/dbConnection');

module.exports = {
    async index(req, res){
        const ong_id = req.headers.authorization;

        const indcidents = await dbConnection('incidents').where('ong_id', ong_id).select('*');

        return res.json(indcidents);
    }
}