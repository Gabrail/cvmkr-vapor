/*global $, alert, console, var*/
$(function () {
		
	"use strict";
		
	$('.tabe .list-group .list-group-item').click(function(){

		$(this).addClass('active').siblings().removeClass('active');

		var id = $(this).data('id');

		$('#' + id ).removeClass('hidden').siblings().addClass('hidden');
	});

});


$(document).ready(function () {
                  $("#editor1").editor();
                  $("#editor2").editor();
                  $("#editor3").editor();
                 
                  });

