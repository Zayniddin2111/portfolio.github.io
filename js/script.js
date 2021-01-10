var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } 
  else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
};

$(document).ready(function(){
	$('.menu-toggle').click(function(){
		$('.menu-toggle').toggleClass('active');
	});
});

$(document).ready(function(){
$( "#navbar-right" ).click(function(){
	    $( ".overlay" ).slideDown( {
	      duration: 700,
	      easing: "swing",
	      complete: function(){
	        console.log("slideToggle completed");
	      },
	      queue: false
	    });
	  });
});

$(document).ready(function(){
$( ".exit" ).click(function(){
	    $( ".overlay" ).slideUp( {
	      duration: 700,
	      easing: "swing",
	      complete: function(){
	        console.log("slideToggle completed");
	      },
	      queue: false
	    });
	  });
});
