'use strict';

var express = require("express");
var userApi = express.Router();
var User = require("./userModel").User;

userApi.param("_id",function(req, res, next,id){
	User.findById(id,function(err,doc){
		if(err) return next (err);
		if(!doc){
			err = new Error("Not Found");
			err.status = 404;
			return next(err);
		}
		req.user = doc;
		return next();
	});
});



//GET /user
//route for user collection
userApi.get("/", function(req, res, next){
	User.find({},null ,function(err,users){
		if(err) return next (err);
		res.json(users)
	});
});

//POST /user
//route for create new user
userApi.post("/", function(req, res,next){
	var user = new User(req.body);
	user.save(function(err,question){
		if(err) return next (err);
		res.status(201);
		res.json(user)
	});
});

//GET /user/:userId
//route for a especific user
userApi.get("/:_id", function(req, res){
	res.json(req.user);
});

//POST /user/:userId/tool/
//route for creating a tool in a profile
userApi.post("/:_id/skills", function(req, res, next){
	req.user.skills.push(req.body);
	req.user.save(function(err, user){
		if(err) return next (err);
		res.status(201);
		res.json(user)
	});
});



module.exports = userApi;



