const express = require('express');
const router = require('./routes/users');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', router);
app.get('/', (req, res) => {
    res.send('Welcome')
});

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));