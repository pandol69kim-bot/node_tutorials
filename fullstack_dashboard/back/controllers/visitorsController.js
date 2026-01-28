const db = require('../db/db');


exports.getVisitors =  async (req,res) => {
    try {
        const result = await db.pool.query('SELECT * FROM visitors;');
        return res.status(200).json(result.rows); // 데이터를 json 형태로 반환   
    } catch (error) {
        return res.status(500).json({ message: `Get visitors Error: ${error}` }); // 데이터를 json 형태로 반환
    }
}
