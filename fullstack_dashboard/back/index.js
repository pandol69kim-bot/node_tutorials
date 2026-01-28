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


app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
});