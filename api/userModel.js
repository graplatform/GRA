'use strict'

var mongoose = require ("mongoose");
var Schema = mongoose.Schema;

var SkillSchema = new Schema ({
	_id: String,
	tool_name: String,
	pl: String	
});

var UserSchema = new Schema({
	_id: String,
	p_name :String, 
    p_lastname : String,
    capability: String,
    career_level: String ,
    org_level: String,
    talent_segment: String,
    career_track: String,
    currentProject: String,
    PastProject: String,
    level: String,
    skills: [SkillSchema]             
});



var User = mongoose.model("User",UserSchema);
module.exports.User = User;