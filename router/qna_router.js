var express  = require('express');
var qna_router = express.Router();
var Post = require('../models/qna');

qna_router.get('/', function(req, res){
  Post.find({})                  // 1
  .sort('-createdAt')            // 1
  .exec(function(err, posts){    // 1
    if(err) return res.json(err);
    res.render('posts/index', {posts:posts});
  });
});

// New
qna_router.get('/new', function(req, res){
  res.render('posts/new');
});

// create
qna_router.post('/', function(req, res){
  Post.create(req.body, function(err, post){
    if(err) return res.json(err);
    res.redirect('/posts');
  });
});

// show
qna_router.get('/:id', function(req, res){
  Post.findOne({_id:req.params.id}, function(err, post){
    if(err) return res.json(err);
    res.render('posts/show', {post:post});
  });
});

// update
// qna_router.post('/:id', function(req, res){
//   req.body.updatedAt = Date.now(); //2
//   Post.findOneAndUpdate({_id:req.params.id}, req.body, function(err, post){
//     if(err) return res.json(err);
//     res.redirect("/posts/"+req.params.id);
//   });
// });

// destroy
qna_router.post('/:id', function(req, res){
  Post.deleteOne({_id:req.params.id}, function(err){
    if(err) return res.json(err);
    res.redirect('/posts');
  });
});

module.exports = qna_router;