var main = $(function () {
  $('.vids').addClass('active');
  $('.images').addClass('right');
  $('.webDesign').addClass('vRight');
  $('.contact').addClass('vvRight');

  $('.mVids').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.contentBlock').removeClass('vvLeft vLeft left active right vRight vvRight');
    $('.vids').addClass('active');
    $('.images').addClass('right');
    $('.webDesign').addClass('vRight');
    $('.contact').addClass('vvRight');
  });
  $('.mImages').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.contentBlock').removeClass('vvLeft vLeft left active right vRight vvRight');
    $('.vids').addClass('left');
    $('.images').addClass('active');
    $('.webDesign').addClass('right');
    $('.contact').addClass('vRight');
  });
  $('.mWebDesign').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.contentBlock').removeClass('vvLeft vLeft left active right vRight vvRight');
    $('.vids').addClass('vLeft');
    $('.images').addClass('left');
    $('.webDesign').addClass('active');
    $('.contact').addClass('right');
  });
  $('.mContact').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.contentBlock').removeClass('vvLeft vLeft left active right vRight vvRight');
    $('.vids').addClass('vvLeft');
    $('.images').addClass('vLeft');
    $('.webDesign').addClass('left');
    $('.contact').addClass('active');
  });

  $('nav').append('<div class="slider"></div>');
  var left = $('.mVids').position().left;
  var width = $('.mVids').width() + 20;
  $('.slider').css({
      'left': left,
      'width': width
  });
  $('.sliderClick').click(function() {
      left = $(this).position().left;
      width = $(this).width() + 47;
      $('.menuItem').removeClass("activeMenu");
      $(this).addClass("activeMenu");
      $('.slider').stop().animate({
          'left': left,
          'width': width
      }, 500);
  });

  $(window).resize(function() {
      var left = $('.activeMenu').position().left;
      var width = $('.activeMenu').width() + 20;
      $('.slider').css({
          'left': left,
          'width': width
      });
  });

  $('.toggle').click(function() {

    $('nav').toggleClass('navOpen');
    $('section').toggleClass('navOpenBody');
    $('.toggleTop').toggleClass('toggleXTop');
    $('.toggleMid').toggleClass('toggleXMid');
    $('.toggleBot').toggleClass('toggleXBot');

  });

  var windowWidth = $(window).width();
  if(windowWidth > 750) {

    /*$(".fancybox").fancybox();
    $(".vimeo").fancybox({
        width: '80%',
        type: 'iframe',
        fitToView: false
    });*/

    // --- lightBox ---
  	var imgSrc = [], vidSrc = [], index, isPic;
  	$('.lightBox.pic a').each(function() {
  		imgSrc.push($(this).attr('href'));
  	});
  	$('.lightBox.vid a').each(function() {
  		vidSrc.push($(this).attr('href'));
  	});

    $('body').append("<div class='lightBoxContainer'><div class='lArrow circleIcon'>&#10096;</div><div class='imgContainer'><div class='xBtn circleIcon'>&#10005;</div>");

    $('.lightBoxContainer').append("</div><div class='rArrow circleIcon'>&#10097;</div></div>");

  	$('.xBtn').click(function(){
  		$('.lightBoxContainer').css('display','none');
  		$('.imgContainer').children('img, iframe, .spinner').remove();
      $('.imgContainer').removeClass('vidSize');
  	});
  	$(document).keyup(function(event){
  		if(event.which === 27){
  			$('.lightBoxContainer').css('display','none');
  			$('.imgContainer').children('img, iframe, .spinner').remove();
        $('.imgContainer').removeClass('vidSize');
  		}
  	});

  	$('.rArrow').click(function(){
      if(isPic){
      	  if(index === $('.lightBox.pic').length-1){
      		index=0;
      		$('.imgContainer').children('img').attr('src',imgSrc[index]);
      		return index;
      	}else{
      		index+=1;
      		$('.imgContainer').children('img').attr('src',imgSrc[index]);
      		return index;
    	  }
      } else if (!isPic){
        if(index === $('.lightBox.vid').length-1){
      		index=0;
      		$('.imgContainer').children('iframe').attr('src',vidSrc[index]);
      		return index;
      	}else{
      		index+=1;
      		$('.imgContainer').children('iframe').attr('src',vidSrc[index]);
      		return index;
      	}
      }

  	});
  	$('.lArrow').click(function(){
        if(isPic){
        	if(index === 0){
        		index=$('.lightBox.pic').length-1;
        		$('.imgContainer').children('img').attr('src',imgSrc[index]);
        		return index;
        	}else{
        		index-=1;
        		$('.imgContainer').children('img').attr('src',imgSrc[index]);
        		return index;
        	}
        } else if (!isPic){
          if(index === 0){
        		index=$('.lightBox.vid').length-1;
        		$('.imgContainer').children('iframe').attr('src',vidSrc[index]);
        		return index;
        	}else{
        		index-=1;
        		$('.imgContainer').children('iframe').attr('src',vidSrc[index]);
        		return index;
          }
        }
  	});

  	$('.lightBox').click(function(){
  	  if($(this).hasClass('pic')){
  	    isPic = true;
  	  } else if($(this).hasClass('vid')){
  	    isPic = false;
  	  }
  		if(isPic){

        index = $('.lightBox.pic').index($(this));
    		$('.lightBoxContainer').css({
    			'display':'flex'
    		});
    		$('.imgContainer').append("<img src= />").children('img').attr('src',imgSrc[index]);
    		return index;

  		} else if(!isPic){

  		  var spinner = '<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>';
  		  index = $('.lightBox.vid').index($(this));
    		$('.lightBoxContainer').css({
    			'display':'flex'
    		});
    		$('.imgContainer').addClass('vidSize').append(spinner).append("<iframe width='640' height='360' src='' frameborder='0' mozallowfullscreen webkiteallowfullscreen allowfullscreen></iframe>").children('iframe').attr('src', vidSrc[index]);
    		return index;

  		}
  	});
  };
});

$(document).ready(main);
