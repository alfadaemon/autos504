# autos504

Auditoria Social de la matricula vehicular de Honduras.

Backend de la aplicacion

Para realizar consultas:

http://autos504.herokuapp.com/query/?license=<licencia_a_consultar>

La consulta retornara un objeto JSON con el siguiente formato:

{
  "placa": "no_placa",
  "fabricante": "fabricante",
  "color": "color",
  "periodo": "period",
  "dei": "valor_dei",
  "municipal": "valor_muni"
}

Para reportar una placa es necesario hacer una llamada POST al url:

http://autos504.herokuapp.com/entry/create

El cuerpo de la llamada debe contener un objeto JSON con al menos los siguientes atributos:

{ 
	"license": "no_placa", 
	"maker": "fabricante", 
	"color": "color", 
	"period": periodo, 
	"dei": valor_dei, 
	"municipal": valor_muni 
}

Notese los valores de texto entre comillas y los numericos sin ellas.