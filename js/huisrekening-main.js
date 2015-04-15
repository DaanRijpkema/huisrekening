// yo2

$(document).ready(function() {

	// fill in from settings
	//console.log(settings);
	
	address = settings.address.street + " " + settings.address.nr + " " + settings.address.zip + " " + settings.address.city
	$('#labelAddress').html(address);



	$('#settingsContent').html(settings.address);

});