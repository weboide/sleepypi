(function($)
{
    $.fn.showDate = function()
    {
      var moment = require('moment');
      console.log(moment);
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      
      $(this).text(moment().format('MMMM Do YYYY'));
    };
    

})(jQuery);

jQuery(document).ready(function( $ ) {
  function updateMainDate() {
    $('.today').showDate();
  }
  
  var clock = new FlipClock($('.your-clock'), {
		clockFace: 'TwentyFourHourClock'
	});
  
  updateMainDate();
  setInterval(updateMainDate, 60000);

});
 
