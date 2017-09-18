var main = function() {
// NAV STUFF
  $('.menuBut').click(function functionName() {

    $('.line').toggleClass('xopen');
    $('nav').toggleClass('navOpen');
    $('section').toggleClass('blur');
    $('body').toggleClass('bodyDark');

  });

  $('nav .navItem').click(function () {

    var $this = $(this),
        index = $this.index('nav .navItem'),
        itemHeight = $('section:nth-child(' + (index+2) + ')').height();
        console.log(index);
    $('nav .navItem').removeClass('active1 active2 active3');
    $this.addClass('active' + (index+1));

      setTimeout(function () {

        if ($('section:nth-child(' + (index+2) + ')').hasClass('active')) {

        } else {
          $('section.active').removeClass('active').delay(600).queue(function(next){
              $(this).css('display','none');
              next();
          });
          $('section:nth-child(' + (index+2) + ')').css('display','block').delay(100).queue(function(next){
              $(this).addClass('active');
              next();
          });
          $('body').css('height', itemHeight);
        }


      },100);
  });

// CONTACT STUFF
  $('#contact h2').click(function () {

    var $this = $(this), $ol = $this.next(), height = $($ol).find('.liHolder').height(), $holder = $ol.find('.liHolder');
    //console.log(height);

    if ($this.hasClass('h2active')) {

      $this.removeClass('h2active');
      $ol.css('max-height', '0');
      $holder.removeClass('open').addClass('close');

    }else {

      $this.addClass('h2active');
      $ol.css('max-height', height);
      $holder.removeClass('close').addClass('open');

    }

  });

// LIGHT BOX

  var imgSrc = [], vidSrc = [], index, isPic;

  $('.lightBox.pic a').each(function() {
    imgSrc.push($(this).attr('href'));
  });
  $('.lightBox.video a').each(function() {
    vidSrc.push($(this).attr('href'));
  });

  $('.xBtn').click(function(){
    $('.lightBoxContainer').removeClass('opacity1').delay(100).queue(function(next){
        $(this).removeClass('displayFlex');
        next();
    });
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

      if ($(window).width() >= 456) {
        console.log('yup!');
      } else {

        index = $('.lightBox.pic').index($(this));
        $('.lightBoxContainer').addClass('displayFlex').delay(10).queue(function(next){
            $(this).addClass('opacity1');
            next();
        });
        $('.xBtn').removeClass('xOut');
        $('.imgContainer').append("<img src= />").children('img').attr('src',imgSrc[index]);
        return index;

      }      

    } else if(!isPic){

      var spinner = '<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>';
      index = $('.lightBox.video').index($(this));
      $('.lightBoxContainer').addClass('displayFlex').delay(10).queue(function(next){
          $(this).addClass('opacity1');
          next();
      $('.xBtn').addClass('xOut');
      });
      $('.imgContainer').addClass('vidSize').append(spinner).append("<iframe width='100%' height='360px' src='' frameborder='0' mozallowfullscreen webkiteallowfullscreen allowfullscreen></iframe>").children('iframe').attr('src', vidSrc[index]);
      return index;

    }

  });

}

$(document).ready(main);
