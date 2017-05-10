/* $('.covervid-video').coverVid(1920, 1080); */


var h2Scroll = $('.myLatestWork').offset().top;
var h2Scroll2 = $('.myResume').offset().top;

$('.myLatestWork').hide();
$('.myResume').hide();
$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();
  var distanceScrolled2 = $(window).scrollTop();
		if (distanceScrolled >= (h2Scroll - 600)){
			$('.myLatestWork').slideDown(600);
		}	
    	if (distanceScrolled2 >= (h2Scroll2 - 600)){
			$('.myResume').slideDown(600);
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

