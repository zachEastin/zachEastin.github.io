var main = function() {
//  NAVIGATION
  $('body section').addClass('right none');
  $('section:nth-child(2)').addClass('active block').removeClass('right none');
  var itemHeight = 0;
  itemHeight = $('body section.active').height()+110;
  $('body').css('height', itemHeight);


  $('nav li').click(function () {
    var $this = $(this),
        index = $this.index('nav li'),
        itemHeight = $('section:nth-child(' + (index+2) + ')').height()+110;
    $('nav li').removeClass('active');
    $this.addClass('active');
    $('section').removeClass('none').addClass('block');

    setTimeout(function () {

      $('section.active').removeClass('active').addClass('right');
      $('section:nth-child(' + (index+2) + ')').addClass('active').removeClass('right');
      $('body').css('height', itemHeight);

    },100);
    setTimeout(function () {

      $('section.right').removeClass('block').addClass('none');

    },500);

  });
  $(window).resize(function () {
    itemHeight = $('body section.active').height()+110;
    $('body').css('height', itemHeight);
  });

// ANIMATION
  $('.vidContainer').each(function(i){

    setTimeout(function(){
      $('.vidContainer').eq(i).addClass('fadeInDown');
    },100 + (i * 250));
    setTimeout(function(){
      $('.titleHolder').eq(i).addClass('fadeInDown');
    },100 + (i * 250));

  });
//  CONTACT
  var $this;
  $('#contact h2').click(function () {

    var $this = $(this), height = $this.next().find('.liHolder').height();
    console.log(height);

    if ($this.hasClass('cactive')) {

      $this.parent().find('hr').remove();
      $this.removeClass('cactive').next().css('max-height', '0px');

    }else {

      $this.parent().find('ul').css('max-height', height + 'px');
      $this.addClass('cactive').after('<hr>');

    };

  });

  // --- lightBox ---
  	var imgSrc = [], vidSrc = [], index, isPic;
  	$('.lightBox.pic a').each(function() {
  		imgSrc.push($(this).attr('href'));
  	});
  	$('.lightBox.video a').each(function() {
  		vidSrc.push($(this).attr('href'));
  	});

    $('body').append("<div class='lightBoxContainer'><div class='lArrow circleIcon'>&#9664;</div><div class='imgContainer'><div class='xBtn circleIcon'>&#10005;</div>");

    $('.lightBoxContainer').append("</div><div class='rArrow circleIcon'>&#9654;</div></div>");

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
        if(index === $('.lightBox.video').length-1){
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
        		index=$('.lightBox.video').length-1;
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
  	  } else if($(this).hasClass('video')){
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
  		  index = $('.lightBox.video').index($(this));
    		$('.lightBoxContainer').css({
    			'display':'flex'
    		});
    		$('.imgContainer').addClass('vidSize').append(spinner).append("<iframe width='640' height='360' src='' frameborder='0' mozallowfullscreen webkiteallowfullscreen allowfullscreen></iframe>").children('iframe').attr('src', vidSrc[index]);
    		return index;

  		}
  	});

};

$(document).ready(main);
