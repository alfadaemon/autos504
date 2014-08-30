/**
 * QueryController
 *
 * @description :: Server-side logic for managing queries
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var request = require('request');
var cheerio = require('cheerio');

module.exports = {

	index: function (req, res){
		url = 'http://www.dei.gob.hn/website/consultas/vehiculos/index.php';

		console.log(req.param('license'));
		var placa, fabricante, color, periodo, dei, municipal;
		var json = { placa : "", fabricante : "", color : "", periodo : "", dei : "", municipal : ""};

		var r = request.post(url, function(error, response, html){
			if(!error){
				var $ = cheerio.load(html);
				var data = $('#caja2 table');

				placa = data.children()['1'].children[2].next.children[0].children[0].data;
				console.log('#--------PLACA----------------#');
				console.log(placa);
				json.placa = placa.trim();
				fabricante = data.children()['2'].children[2].next.children[0].children[0].data;
				console.log('#--------FABRICANTE------------#');
				console.log(fabricante);
				json.fabricante=fabricante.trim();
				color = data.children()['3'].children[2].next.children[0].children[0].data;
				console.log('#-----------COLOR--------------#');
				console.log(color);
				json.color=color.trim();
				periodo = data.children()['11'].children[2].next.children[0].children[0].children[0].data;
				console.log('#-----------PERIODO------------#');
				console.log(periodo);
				json.periodo=periodo.trim();
				dei = data.children()['14'].children[2].next.children[0].children[0].data;
				console.log('#-------------DEI--------------#');
				console.log(dei.trim());
				json.dei=dei.trim();
				municipal = data.children()['17'].children[2].next.children[0].children[0].children[0].data;
				console.log('#-----------MUNICIPAL----------#');
				console.log(municipal.trim());
				json.municipal=municipal.trim();

				res.send(json);
			} else {
				json = { error: 'error'};
				res.send(json);
			}
		}).form({placa:req.param('license'), 'Submit':'Consultar'});
	}
};

