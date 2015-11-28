$(function() {
  $(".grid1").mouseenter(function(){
    $(".grid1back").addClass("blurred");
    $(".grid1Info").fadeIn(250);

  });
});

$(function() {
  $(".grid1").mouseleave(function(){
    $(".grid1back").removeClass("blurred");
    $(".grid1Info").fadeOut(550);
  });
});

$(function() {
  $(".grid2").mouseenter(function(){
    $(".grid2back").addClass("blurred");
    $(".grid2Info").fadeIn(250);

  });
});

$(function() {
  $(".grid2").mouseleave(function(){
    $(".grid2back").removeClass("blurred");
    $(".grid2Info").fadeOut(550);
  });
});

$(function() {
  $(".grid3").mouseenter(function(){
    $(".grid3back").addClass("blurred");
    $(".grid3Info").fadeIn(250);

  });
});

$(function() {
  $(".grid3").mouseleave(function(){
    $(".grid3back").removeClass("blurred");
    $(".grid3Info").fadeOut(550);
  });
});


$(function() {
  $(".grid4").mouseenter(function(){
    $(".grid4ExtenderUp").slideDown(50);
    $(".grid4back").addClass("blurred");
    $(".grid4Info").fadeIn(250);

  });
});

$(function() {
  $(".grid4").mouseleave(function(){
    $(".grid4ExtenderUp").hide(50);
    $(".grid4back").removeClass("blurred");
    $(".grid4Info").fadeOut(550);
  });
});

$(function() {
  $(".grid5").mouseenter(function(){
    $(".grid5ExtenderUp").slideDown(50);
    $(".grid5back").addClass("blurred");
    $(".grid5Info").fadeIn(250);

  });
});

$(function() {
  $(".grid5").mouseleave(function(){
    $(".grid5ExtenderUp").hide(50);
    $(".grid5back").removeClass("blurred");
    $(".grid5Info").fadeOut(550);
  });
});


$(function() {
  $(".afSnow").mouseout(function(){
    $(".extenderUp").hide(50);
  });
});





$(function() {
  var i = 1;

  $(".btncRight").click(function(){

    $(".carryOnSectionMainBack_"+i).fadeOut(400);
      i++;
        $(".carryOnSectionMainBack_"+i).delay(.200).fadeIn(600);
  });

  $(".btncLeft").click(function(){

    $(".carryOnSectionMainBack_"+i).fadeOut(400);
      i--;
        $(".carryOnSectionMainBack_"+i).delay(.200).fadeIn(600);
  });

});


$(function() {
  var j = 1;

  $(".btnaRight").click(function(){

    $(".backCountry_"+j).fadeOut(0);
      j++;
        $(".backCountry_"+j).fadeIn(400);
  });

  $(".btnaLeft").click(function(){

    $(".backCountry_"+j).fadeOut(0);
      j--;
        $(".backCountry_"+j).fadeIn(400);
  });

});




 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 100
        }, 500);
        return false;
      }
    }
  });
});





$(function(){
    $(".mobileNavigation a").click(function(){


        $('.mobileNavigation').fadeOut();


    });



    $('.gallery').rebox({ selector: 'a' });
    $('#galleryGranada').rebox({ selector: 'a' });
    $('#gallerySJ').rebox({ selector: 'a' });
    $('#galleryMatagalpa').rebox({ selector: 'a' });





});
