/* $('.covervid-video').coverVid(1920, 1080); */
$('h2').hide();
var h2Scroll = $('h2').offset().top;
$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();
		if (distanceScrolled >= h2Scroll){
			$('h2').slideDown(600);
		}	
});

$('button').on('click', function(event) {
event.preventDefault();
});

 $('#submit').on('click', function(){
    var name = $('#name').val(); 
    var email = $('#email').val(); 
    var comment = $('#comments').val();
    if (name === ''){
    $('#name').removeClass('completedGetsGreenBorder');
    $('#name').addClass('emptyGetRedBorder');
  }
  else if (name !== ''){
    $('#name').removeClass('emptyGetRedBorder');
    $('#name').addClass('completedGetsGreenBorder');
  } 
   if (email === ''){
    $('#email').removeClass('completedGetsGreenBorder');
    $('#email').addClass('emptyGetRedBorder');
  }
  else if (email !== ''){
    $('#email').removeClass('emptyGetRedBorder');
    $('#email').addClass('completedGetsGreenBorder');
  } 
   if (comment === ''){
    $('#comments').removeClass('completedGetsGreenBorder');
    $('#comments').addClass('emptyGetRedBorder');
  }
  else if (comment !== ''){
    $('#comments').removeClass('emptyGetRedBorder');
    $('#comments').addClass('completedGetsGreenBorder');
  } 
 });

