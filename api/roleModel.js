'use strict'

var mongoose = require ("mongoose");
var Schema = mongoose.Schema;

var RoleSchema = new Schema ({
	_id: String,
    name_role: String,
    client_name_role: String,
    tool_role: String,
    skill_role: String,
    skill_pl_role:String
});



var Role = mongoose.model("Role",RoleSchema);
module.exports.Role = Role;