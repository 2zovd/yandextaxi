
$(function() {

  var calculatorHours  = 0;
  var calculatorPeople = 0;
  var calculatorDouble = 0;
  function calculatorResult() {

    var prof         = 390 * calculatorHours * 22 ;
    var profDouble   = (390 * calculatorHours * 22) * 2 ;
    var userprof     = 1200 * calculatorPeople;
    //var auto      = calculatorHours * 75;
    //var mountproff = (prof + userprof) + (!$('#calculator-avto').prop('checked') ? auto : 0);

    var mountproff = (prof + userprof);

    if(mountproff == 0) {
      mountproff = "0.00";
    }

    if(profDouble == 0) {
      profDouble = "0.00";
    }

    $('#calculator-result').html(mountproff);
    $('#calculator-result-double').html(profDouble);
  }

  $('#calculator-avto').change(function() {
    $('#calculator-avto').val(!$(this).prop('checked'));
    calculatorResult();
  });
  $("#calculator-slider-hours").slider({
    range : "min",
    min   : 0,
    step  : 1,
    max   : 15,
    slide: function(event, ui) {
      $(ui.handle).find('.slider-tooltip').text(ui.value);
      calculatorResult();
    },
    create: function(event, ui) {
      var tooltip = $('<div class="slider-tooltip">0</div>');
      $(event.target).find('.ui-slider-handle').append(tooltip);
    },
    change: function(event, ui) {
      $('#hidden').attr('value', ui.value);
      calculatorHours = ui.value;
      calculatorResult();
    }
  });

  $("#calculator-slider-people").slider({
    range : "min",
    min   : 0,
    step  : 1,
    max   : 100,
    slide: function(event, ui) {
      $(ui.handle).find('.slider-tooltip').text(ui.value);
      calculatorResult();
    },
    create: function(event, ui) {
      var tooltip = $('<div class="slider-tooltip">0</div>');
      $(event.target).find('.ui-slider-handle').append(tooltip);
    },
    change: function(event, ui) {
      $('#hidden').attr('value', ui.value);
      calculatorPeople = ui.value;
      calculatorResult();
    }
  });

  $('.dm').mask('99.99.9999');
  $('input[name="ref_number"]').mask('+7 (999) 999-9999');
  $('input[name="phone"]').mask('+7 (999) 999-9999');
  $('input[name="qiwi_phone"]').mask('+7 (999) 999-9999');

  //page scroll navigation
  $(window).on("load",function(){
    $(".scroll-link").mPageScroll2id();
  });

  // slider carousel mobile
  $('.slider-row').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 762,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      },

    ]
  });

  //header btn
  $('.header-btn').on('click', function() {
    $('.header-right').toggleClass('active');
    $(this).toggleClass('active');
  })

  //hide preloader

  $(window).on('load', function() {
    $('#preloader').delay(500).fadeOut('slow');
  });

});