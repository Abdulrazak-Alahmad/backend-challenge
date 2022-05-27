const mongoose = require('mongoose');
const dbURL = "mongodb+srv://USERNAME:PASSWORD@cluster0.ovmjb.mongodb.net/Workbench?retryWrites=true&w=majority";
mongoose.connect(dbURL)
    .then((result) => { 
       
        console.log('connected')
    })
    .catch((err) => {console.log(err)
    });