var express = require('express')
var cors = require('cors')


var app = express();
app.use(cors());

app.listen(8000, () => {
    console.log('Server started!');
});

app.route('/api/result1').get((req, res) => {
    console.log("result1 api called.");

    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }]
    });
});

app.route('/api/result2').get((req, res) => {

    console.log("result2 api called.");

    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }]
    });
});


app.route('/api/user').get((req, res) => {

    console.log("user api called.");
    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }]
    });
});