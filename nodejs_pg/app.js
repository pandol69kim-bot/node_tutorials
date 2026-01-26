const express = require('express');
const cors = require('cors');
require("dotenv").config();
const db = require('./db/db');

const app = express();

app.use(cors());
app.use(express.json()); // ㄷ테

app.get('/', (req, res) => {
    res.send('Hello world  app.js');
});

// users path를 엔드포인트로 시작했를때 get 요청 베동기
app.get('/users', async (req,res) => {

    try {
        const result = await db.pool.query('SELECT * FROM users;');
        return res.status(200).json(result.rows); // 데이터를 json 형태로 반환   
    } catch (error) {
        return res.status(500).json({ message: `Get Users Error: ${error}` }); // 데이터를 json 형태로 반환
    }``

})


app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
});