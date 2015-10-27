$(function() {
  $(".mainPic").mouseenter(function(){
    $(".mainPiccta").fadeIn(50);
  });
});

$(function() {
  $(".mainPic").mouseleave(function(){
    $(".mainPiccta").fadeOut(50);
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
