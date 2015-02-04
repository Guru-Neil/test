$( ".MenuClose" ).hide();
$( ".menu" ).hide();

$( ".MenuTitle" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
	$( ".MenuTitle" ).hide();
	$( ".MenuClose" ).show();
	});
});

$( ".MenuClose" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
	$( ".MenuClose" ).hide();
	$( ".MenuTitle" ).show();
	});
});