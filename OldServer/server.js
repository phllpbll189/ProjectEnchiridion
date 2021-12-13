const express = require('express')
const app = express();
const path = require('path')

const new_path = __dirname.split("/")
new_path.pop()

app.use(express.static(path.join(new_path.toString(), 'build')));

app.get('/', function (req, res){
    res.sendFile((path.join(new_path.toString(),'build', 'index.html')))
});

app.get('/SignIn', function (req, res){
    res.sendFile((path.join(new_path.toString(),'build', 'SignIn.html')))
});
app.listen(5000, () => console.log(`listening on port ${5000}`));