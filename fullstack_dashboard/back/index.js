const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Hello world  back');
// });

app.use( require('./routes/visitorsRoute'));
app.use( require('./routes/revenueRoute'));
app.use( require('./routes/customerRoute'));
app.use( require('./routes/targetRealityRoute'));
app.use( require('./routes/topProductsRoute'));
app.use( require('./routes/salesMapRoute'));



app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
});