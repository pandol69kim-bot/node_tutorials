const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json()); // express 모듈의 json() 메서드 사용

app.get('/', (req, res) => {
  res.send('Hello world  back');
});

app.use(require('./routes/visitorsRoute'));
app.use(require('./routes/revenueRoute'));
app.use(require('./routes/customerRoute'));
app.use(require('./routes/targetRealityRoute'));
app.use(require('./routes/topProductsRoute'));
app.use(require('./routes/salesMapRoute'));
app.use(require('./routes/volumeServiceRoute'));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
