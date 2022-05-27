const feed = require('../models/Post')
let title =''
let allPosts=''
const redirectHomepage = (req, res) => {
    res.redirect('/feed')
}
const getHomepage = (req, res) => {
    feed.find().sort({ createdAt: -1 })
        .then((result) => {
            allPosts=result;
            res.render('index', { result, err:false,
            title:'Welcome to Facebook' })
        })
}
const postNewPost = (req, res) => {
    if (req.method === 'GET') {
        res.render('index',{err:false,title:'Welcome to Facebook' });
    }
    if (req.method === 'POST') {
       
        if(req.body.name.length <15 && req.body.message.length <40){
        const message = new feed(req.body)
        message.save()
            .then(result => {
                res.redirect('/feed')
            })
            .catch(err => {
               res.redirect('index',{err:err.errors,title:'Welcome to Facebook' })
            })
        }
        else if (req.body.name.length <15 && req.body.message.length >40) {
            
            res.render('index',{ result:allPosts,err:' The Message field must be no longer than 40 characters',title:'Welcome to Facebook'})
        }else if  (req.body.name.length >15 && req.body.message.length <40){
            
            res.render('index',{ result:allPosts,err:' The Name field must be no longer than 15 characters',title:'Welcome to Facebook'})
        }
        else{
            
            res.render('index',{ result:allPosts,err:' The Name field must be no longer than 15 characters and The Message field must be no longer than 40 characters ',title:'Welcome to Facebook'})
        }
    }
}
const showOnePost = (req, res) => {
    feed.findById(req.params.id)
        .then((result) => {
            res.render('showOne', { result,title:'Show one page'  })
        })
        .catch(err => console.log(err))
}
const updateOnePost = (req, res) => {
    if (req.method === 'GET') {
        feed.findById(req.params.id)
            .then((result) => {
                res.render('editPost', { result,title:'Edit page'  })
            })
            .catch(err => console.log(err))
    }
    if (req.method === 'POST') {
        feed.findByIdAndUpdate(req.params.id)
            .then(result => {
                result.name = req.body.name
                result.message = req.body.message
               
               
                result.save()
                    .then(() => {
                        res.redirect(`/feed/${req.params.id}`)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
}
const deleteOnePost = (req, res) => {
    feed.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/feed')
        })
        .catch(err => console.log(err))
}
module.exports = {
    getHomepage,
    postNewPost,
    showOnePost,
    updateOnePost,
    deleteOnePost,
    redirectHomepage
}