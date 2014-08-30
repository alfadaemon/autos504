/**
* Entry.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	schema: true,

  	attributes: {

  		license:{
  			type: "string",
  			required: true
  		},

	  	maker:{
	  		type: "string",
	  		required: true
	  	},

	  	color:{
	  		type: "string"
	  	},

	  	period:{
	  		type: "integer",
	  		required: true
	  	},

	  	dei:{
	  		type: "float",
	  		required: true
	  	},

	  	municipal:{
	  		type: "float",
	  		required: true
	  	},

	  	note:{
	  		type: "string"
	  	},

	  	picture_url:{
	  		type: "string"
	  	}
	}
};

