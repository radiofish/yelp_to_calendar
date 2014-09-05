//Developer: Farid

$('.biz-page-actions').css("overflow","visible");
$.ajax({
  url: "https://addthisevent.com/libs/1.5.8/ate.min.js",
  dataType: "script",
  success: function( data, textStatus, jqxhr ) {
  		var d = new Date();
		var month = d.getMonth()+1;
		var day = d.getDate();
		var dateformat =  (month<10 ? '0' : '') + month + '/' +    
		            (day<10 ? '0' : '') + day + '/' +
		            d.getFullYear();
		var summaryname = $('.biz-page-title').text().trim();
		var locaddress = $('.street-address address').text().trim();
		var eventdescription = $('.category-str-list').text().trim() + '\n' + window.location.href;
        $('.biz-page-actions.nowrap').append('<a href="#" title="Add to Calendar" class="addthisevent">Add to Calendar<span class="_start">'+dateformat+' 20:00:00</span><span class="_end">'+dateformat+' 21:00:00</span><span class="_zonecode">6</span><span class="_summary">'+summaryname+'</span><span class="_description">'+eventdescription+'</span><span class="_location">'+locaddress+'</span><span class="_organizer">Yelp!</span><span class="_organizer_email">no-reply@yelp.com</span><span class="_all_day_event">false</span><span class="_date_format">MM/DD/YYYY</span></a>');
  }
});