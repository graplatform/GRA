'use strict';

var express = require("express");
var roleApi = express.Router();
var Role = require("./roleModel").Role;

roleApi.param("_id",function(req, res, next,id){
	Role.findById(id,function(err,doc){
		if(err) return next (err);
		if(!doc){
			err = new Error("Not Found");
			err.status = 404;
			return next(err);
		}
		req.role = doc;
		return next();
	});
});

//GET /user
//route for user collection
roleApi.get("/", function(req, res, next){
	Role.find({},null ,function(err,roles){
		if(err) return next (err);
		res.json(roles)
	});
});

//POST /user
//route for create new user
roleApi.post("/", function(req, res,next){
	var role = new Role(req.body);
	role.save(function(err,question){
		if(err) return next (err);
		res.status(201);
		res.json(role)
	});
});

//GET /user/:userId
//route for a especific user
roleApi.get("/:_id", function(req, res){
	res.json(req.role);
});


module.exports = roleApi;



