/* $('.covervid-video').coverVid(1920, 1080); */

var h2Scroll = $('.myLatestWork').offset().top;
var h2Scroll2 = $('.myResume').offset().top;
var h2Scroll3 = $('.myEducation').offset().top;
var h2Scroll4 = $('.mySkills').offset().top;
var h2Scroll5 = $('.getIntouch').offset().top;
$('.myLatestWork').hide();
$('.myResume').hide();
$('.myEducation').hide();
$('.mySkills').hide();
$('.getIntouch').hide();
$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();
  var distanceScrolled2 = $(window).scrollTop();
  var distanceScrolled3 = $(window).scrollTop();
  var distanceScrolled4 = $(window).scrollTop();
  var distanceScrolled5 = $(window).scrollTop();
		if (distanceScrolled >= (h2Scroll - 600)){
			$('.myLatestWork').slideDown(800);
		}	
    if (distanceScrolled2 >= (h2Scroll2 - 600)){
			$('.myResume').slideDown(800);
		}	
    if (distanceScrolled3 >= (h2Scroll3 - 600)){
			$('.myEducation').slideDown(800);
		}
    if (distanceScrolled4 >= (h2Scroll4 - 600)){
			$('.mySkills').slideDown(800);
		}
     if (distanceScrolled5 >= (h2Scroll5 - 600)){
			$('.getIntouch').slideDown(800);
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

