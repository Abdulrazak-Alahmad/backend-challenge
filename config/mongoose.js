const mongoose = require('mongoose');
const dbURL = "mongodb+srv://abd1:1234@cluster0.ovmjb.mongodb.net/demo-challenge?retryWrites=true&w=majority";
mongoose.connect(dbURL)
    .then((result) => { 
       
        console.log('connected')
    })
    .catch((err) => {console.log(err)
    });