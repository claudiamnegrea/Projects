const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://claudianegrea:claudianegrea-blog-app@cluster0.ufxx6.mongodb.net/').then(() => console.log('Connencted mongo db')).catch((e) => console.log(e));
