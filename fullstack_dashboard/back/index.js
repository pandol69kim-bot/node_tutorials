const express = require('express');
const cors = require('cors');
require("dotenv").config();
const db = require('./db/db');

// - node setting 순서
/// 1 . 초기 실행 : npm init -y
// 2 . 기본 모듈 설치 : npm install express cors nodemon dotenv pg ...
// 3. package.json 수정 : start script 추가, nodemon index.js


const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world  bakc');
});

app.get('/status', (req,res) => {
    res.json({status: 'OK'})
})

app.get('/users', async (req,res) => {

    try {
        const result = await db.pool.query('SELECT * FROM visitors;');
        return res.status(200).json(result.rows); // 데이터를 json 형태로 반환   
    } catch (error) {
        return res.status(500).json({ message: `Get Users Error: ${error}` }); // 데이터를 json 형태로 반환
    }``

})

app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
});