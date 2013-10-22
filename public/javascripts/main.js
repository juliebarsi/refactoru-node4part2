$( document ).ready(function() {
    $("#next").click(function() {
    	var $el = $(this)
        $.get('/location', {location : $el.attr("data-location")}, function(data){
                console.log(data);
                $("#desc").html(data.desc)
                $el.attr("data-location", data.next)
        });
	});
});