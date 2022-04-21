const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello smarty learn node js')
});

const users = [
    { "id": 1, "name": "Ashik", "email": "adashik585@gmail.com", "phone": "017xxxxxxxx" },
    { "id": 2, "name": "moin", "email": "moni@gmail.com", "phone": "017xxxxxxxx" },
    { "id": 3, "name": "soma", "email": "soma@gmail.com", "phone": "017xxxxxxxx" },
    { "id": 4, "name": "aaraf", "email": "aaraf@gmail.com", "phone": "017xxxxxxxx" },
    { "id": 5, "name": "aafif", "email": "aafif@gmail.com", "phone": "017xxxxxxxx" },
]

app.get('/users', (req, res) => {
    console.log("Query ", req.query);
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users)
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('Listing to port: ', port);
})