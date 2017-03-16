$(function(){

		$('button').click(function(){
			$(".main-menu").slideToggle("slow");		
		});

		$(".first-level a").not(".second-level a").each(function() {
			if ($(this).next().length > 0) {
				$(this).append("<i class='fa fa-caret-down'></i>");
			}
		});

		$(".second-level li a").each(function() {
			if ($(this).next().length > 0) {
				$(this).append("<i class='fa fa-caret-right'></i>");
			}
		});


		$('.main-menu ul li a, .second-level li a').click(function(e){
			var a_href = $(this).attr('href');
			if (a_href == '#')
				e.preventDefault();
				console.log(a_href);
			$(this).next().slideToggle('slow');
		});

});