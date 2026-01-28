const db = require('../db/db');

exports.getSaleMap =  async (req,res) => {
    try {
        const result = await db.pool.query('SELECT * FROM sales_map;');
        return res.status(200).json(result.rows); // 데이터를 json 형태로 반환   
    } catch (error) {
        return res.status(500).json({ message: `Get sales_map Error: ${error}` }); // 데이터를 json 형태로 반환
    }
}
