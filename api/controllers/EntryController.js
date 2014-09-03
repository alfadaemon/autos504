/**
 * EntryController
 *
 * @description :: Server-side logic for managing entries
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	new: function (req, res){
		res.view();
	},

	index: function(req, res){
		Entry.find().exec(function(err, entries) {
			res.view({'entries':entries});
			return;
		});
	}
};

