const express = require("express");
const Post = require("../models/Post")
const router = express.Router();

router.post('/', async(req,res)=>{
    
    const newPost = new Post({
        tittle: req.body.tittle,
        description: req.body.description
    });
    try{
        const savedPost = await newPost.save();//guarda en la bd
        res.json(savedPost);
    }catch (error){
        res.json({message:error});
    }

});

router.get('/', async (req, res)=>{
    try{
        const post = await Post.find();
        res.json(post);
    }catch{
        res.json({message:error});
    }
});

router.delete('/:postId', async (req, res)=>{
    try{
        const removedPost = await Post.deleteOne({_id: req.params.postId});//borrar
        res.json(removedPost);
    }catch{
        res.json({message: error});
    }
});

router.patch('/:postId', async(req,res)=>{
    try{
        const updatePost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {tittle: req.body.title, description: req.body.description}});
            res.json(updatePost);
    }catch{
        res.json({message: error});
    }
});

module.exports = router;