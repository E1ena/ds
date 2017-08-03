$(document).ready(function() {
    $('a[href^="#"].anchor').click(function(){
        var el = $(this).attr('href');
        $('body').animate({scrollTop: $(el).offset().top}, 2500);
        return false;
    });
});

var time = 2, cc=1;
$(window).scroll(function(){
    $(team).each(function(){
        var cPos=$(this).offset().top;
        var topWindow = $(window).scrollTop();
        if (cPos<topWindow+200) {
            if (cc<2) {
                $('.number').addClass('viz');
                $('div').each(function(){
                    var i =1;
                    var num = $(this).data('num');
                    var step = 1000*time/num;
                    var that = $(this);
                    var int = setInterval(function () {
                        if (i<=num) {
                            that.html(i);
                        } else {
                            cc=cc+2;
                            clearInterval(int);
                        }
                        i++;
                    }, step)
                })
            }
        }
    })
});

var pb=1;
$(window).scroll(function(){
    $('.specialization').each(function(){
        var cPos=$(this).offset().top;
        var topWindow = $(window).scrollTop();
        if (cPos<topWindow+200) {
            if (pb<2) {
                $('.progress-bar').each(function(){
                    var i =1;
                    var num = $(this).data('num');
                    var step = 1000*time/num;
                    var that = $(this);
                    var int = setInterval(function () {
                        if (i<=num) {
                            that.css('width', i+'%');
                        } else {
                            pb=pb+2;
                            clearInterval(int);
                        }
                        i++;
                    }, step)
                })
            }
        }
    })
});


$(function() {
	var newSelection = "";
	$("#portfolio__menu a").click(function(){
	    $("#gallery").fadeTo(200, 0.10);
		$("#portfolio__menu a").removeClass("current");
		$(this).addClass("current");
		newSelection = $(this).attr("rel");
		$(".flavor").not("."+newSelection).slideUp();
		$("."+newSelection).slideDown();
	    $("#gallery").fadeTo(600, 1);
	});
});

console.log('Работаю')