(function($)
{
    $.fn.showDate = function()
    {
      var moment = require('moment');
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      
      $(this).text(moment().format('MMMM Do YYYY'));
    };

})(jQuery);

jQuery(document).ready(function( $ ) {
  require('jquery.flipster');
  function updateMainDate() {
    $('.today').showDate();
  }

  var coverflow = $("#coverflow").flipster({
    buttons: true
  });
  
  var clock = new FlipClock($('.your-clock'), {
		clockFace: 'TwentyFourHourClock'
	});
  
  updateMainDate();
  setInterval(updateMainDate, 60000);

});
 
