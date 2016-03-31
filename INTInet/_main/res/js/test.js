// JavaScript Document
/*(function() {
	var el = document.getElementById("header");
	
	el.addEventListener('click', function() {
		if (classie.has(el,"btn--current")) {
    		classie.remove(el,"btn--current");
		} else {
    		classie.add(el,"btn--current");
		}
	});
});*/
$( ".navigation_panel" ).delegate( "*", "focus blur", function() {
  var elem = $( this );
  setTimeout(function() {
    elem.toggleClass( "focused", elem.is( ":focus" ) );
  }, 0 );
});
