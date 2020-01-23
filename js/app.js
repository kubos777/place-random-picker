var places = [];
console.log(places)
$(function() {

	if (places.length == 0){
		output = true; 
		$('#box').append('<p id="empty" class="center">Your list is empty!</p>')
		$("#calculate").attr("disabled", true);
	}

});


function showAlert(msg){
	$('#alert').html(msg);	
	$('#alert').fadeIn(500);
	setTimeout(function() { 
		$.when($("#alert").fadeOut(500))
		.done(function() {
			$("#alert").removeClass();
		});
	}, 3500)
}

function findPlace(value,arr){
	var result = 0;
	for(var i=0; i<places.length; i++){
		var place = arr[i];
		if(place == value){
			result = 'The place is already in list';
			break;
		}
	}
	return result;
}

function removePlace(name_place){
	console.log(typeof name_place)
	for(var i = places.length - 1; i >= 0; i--) {
		if(places[i] === name_place) {
			places.splice(i, 1);
			$('#'+name_place.replace(/\s/g, '')).remove();
		}
		console.log(places);
	}
	if (places.length == 0){
		output = true; 
		$('#box').append('<p id="empty" class="center">Your list is empty!</p>')
		$("#calculate").attr("disabled", true);

	}
}

function createNewPlace(){
	name_place = document.getElementById('place').value
	if(name_place===""){
		$('#alert').addClass('alertFail')
		showAlert('This place doesn\'t exist');

	}else{
		response = findPlace(name_place,places);
		if (response === 0) {
			$('#alert').addClass('alertSuccess')
			showAlert('Place added');
			places.push(name_place);
			$('#empty').remove();
			$('#places').append('<li id="'+name_place.replace(/\s/g, '')+'" class="place">' + name_place +'<button onclick="removePlace('+'\''+name_place+'\''+')" type="button" class="btn-sm btn-outline-danger btn-left">X</button></li>')
			$("#goplace")[0].reset();
			$("#calculate").attr("disabled", false);


		}else{
			$('#alert').addClass('alertWarning')
			showAlert(response);
		}
		
	}
	console.log(places);
}

function wherewilligo(){
	$("#placeselected").hide();
	var place = places[Math.floor(Math.random() * places.length)];
	console.log(place)
	$.when($("#loader").show().delay(5000).fadeOut())
	.done((function() {
			$("#placeselected").show();
			$("#placeselected").html('<h3>You will go to: '+place+'</h3>');
			$("#placeselected").append('<img  class="responsive-img gif-response" src="img/think.gif" alt="Thinker">');
			
		}));

}
















