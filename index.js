const express = require('express');
const app = express();
const cors = require('cors');
// const port = process.env.PORT || 5000;
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from node! I am here!');
});

const users = [
    {id:0, name: 'Shakib Al Hasan', email: 'shakib0@gmail.com'},
    {id:1, name: 'Tamim Iqbal', email: 'tamim1@gmail.com'},
    {id:2, name: 'Mushfiqur Rahim', email: 'mushi2@gmail.com'},
    {id:3, name: 'Mustafizur Rahman', email: 'fizz3@gmail.com'}
]

app.get('/users', (req, res) => {
    //use query parameter
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
})

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.send(JSON.stringify(newUser));
    // res.json(newUser);
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)

})

app.listen(port, () => {
    console.log('Listening to port', port);
});