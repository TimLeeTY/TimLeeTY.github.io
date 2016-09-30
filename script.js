$(document).ready(function(){
	$(".subsection").hide();
	$("#one").click(function(){
		var sel=
		$("#subOne").slideToggle();
	});
	$("#two").click(function(){
		$("#subTwo").slideToggle();
	});
	$("#three").click(function(){
		$("#subThree").slideToggle();
	});
	$("#four").click(function(){
		$("#subFour").slideToggle();
	});

})