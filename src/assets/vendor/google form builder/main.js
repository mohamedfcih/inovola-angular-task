$(document).ready(function(){
	
	// Tooltip
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

	// Drop Dwon Multi Choice
	$(document).on('change','.selectStyle', function() {
		$(this).find("option:selected").each(function(){
			var optionValue = $(this).attr("value");
			if(optionValue){
				$(".box").not("." + optionValue).hide();
				$("." + optionValue).show();
			} else{
				$(".box").hide();
			}
		});
	}).change();

	// Drop Dwon Range 0 - 1
	$(document).on('change','.ls-rang-one', function() {
		$(this).find("option:selected").each(function(){
			var optionValue = $(this).attr("value");
			if(optionValue){
				$(".show-box").not("." + optionValue).hide();
				$("." + optionValue).show();
			} else{
				$(".show-box").hide();
			}
		});
	})

	// Drop Dwon Range 1 - 10
	$(document).on('change','.ls-rang-two', function() {
		$(this).find("option:selected").each(function(){
			var optionValue = $(this).attr("value");
			if(optionValue){
				$(".show-box1").not("." + optionValue).hide();
				$("." + optionValue).show();
			} else{
				$(".show-box1").hide();
			}
		});
	})
	
	// Add text Field
	var secCount = 2;
	$(document).on('click','.add-option', function() {
		var option = "Option";
		var svg = "<svg data-toggle='tooltip' data-placement='bottom' title='Remove' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path  d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path><path d='M0 0h24v24H0z' fill='none'></path></svg>";
		var domElement = $("<div class='option-item new-option-item'><div class='icon-box'>" + countNum++ +"</div><input type='text' class='form-control no-box option-bar' placeholder="+option+ '&nbsp;'+ secCount +"><div class='remove'>" + svg +"</div></div>");
		$(this).before(domElement);
		secCount++;
		$(".remove").click(function(){
			$(this).parent().remove();
		});
	});

	// Add Other Text field
	$(document).on('click','.add-other', function() {
		var domElement = $("<div class='option-item new-option-item add-otherbox'><input type='text' class='form-control no-box option-bar' value='Other...'></div>");
		$(this).before(domElement);
		secCount++;
		$(".add-other").hide();
		$(".add-option-or").hide();
	});
		
	// Before tag css
	var countNum = 1;
	$(".dropdown-box .option-item").attr("title", countNum++);
		
	// Upload File	
	$(function() {
		$('input[type=file]').change(function(){
			var t = $(this).val();
			var labelText = 'File : ' + t.substr(12, t.length);
			$(this).prev('label').text(labelText);
		})
	});
		
	// Add Question 
	$('#question-box').hide();
	 var cloneCount = 1;
	 $(document).on('click','.qdu, #addQuestion', function() {
		$('#question-box')
			.clone()
			.show()
			.attr('id', 'question-box-'+ cloneCount++)
			.insertAfter($('[id^=question-box]:last'));
	}) ;

	// Add Section 
	$('#addSection-box').hide();
	 var cloneCount = 1;
	 $(document).on('click','.addsec, #addSection', function() {
		$('#addSection-box')
			.clone()
			.show()
			.attr('id', 'addSection-box-'+ cloneCount++)
			.insertAfter($('[id^=addSection-box]:last'));
	}) ;

	// Add Sub Section 
	$('#addsubSection-box').hide();
	 var cloneCount = 1;
	 $(document).on('click','.addsubsec, #addsubSection', function() {
		$('#addsubSection-box')
			.clone()
			.show()
			.attr('id', 'addsubSection-box-'+ cloneCount++)
			.insertAfter($('[id^=addsubSection-box]:last'));
	}) ;

	// Add Title and Discription 
	$('#title-dis-box').hide();
	 var cloneCount = 1;
	 $(document).on('click','.adtitisdu, #addTitle', function() {
		$('#title-dis-box')
			.clone()
			.show()
			.attr('id', 'title-dis-box-'+ cloneCount++)
			.insertAfter($('[id^=title-dis-box]:last'));
	}) ;

	// Add Image 
	 var cloneCount = 1;
	 $(document).on('click','.addimg, #addImage', function() {
		$('#addImage-box')
			.clone()
			.attr('id', 'addImage-box-'+ cloneCount++)
			.insertAfter($('[id^=addImage-box]:last'));
	}) ;

	// Add Banner Image 
	var cloneCount = 1;
	 $(document).on('click','#addBanner', function() {
		$('#bannerImage')
			.clone()
			.attr('id', 'bannerImage-'+ cloneCount++)
			.insertAfter($('[id^=bannerImage]:last'));
	}) ;

	// Delete section
	$(document).on('click','.delete-box', function() {
		$(this).parent().parent().parent().remove();
	});

	// Switch button for require
	$(document).on('click', '.onoffbtn', function(){
		if($(this).children().is(':checked')){
		  $(this).addClass('active');
		}
		else{
		  $(this).removeClass('active')
		}
	});
	
	// Add header image
	//$("#bannerImage").hide();
	// function readURL(input) {
	// 	if (input.files && input.files[0]) {
	// 		var reader = new FileReader();
	// 		reader.onload = function(e) {
	// 			//$("#bannerImage").show();
	// 			$('#headerimagePreview').css('background-image', 'url('+e.target.result +')');
	// 		}
	// 		reader.readAsDataURL(input.files[0]);
	// 	}
	// }
	// $("#bannerImageUpload").change(function() {
	// 	readURL(this);
	// });

	// Add image
	$("#addImage-box").hide();
	function readURLImg(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$("#addImage-box").show();
				$('#imgPre').attr('src', ''+e.target.result +'');
				$('.add-img-pre').hide();
				$('.add-img-pre').fadeIn(650);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	$("#addImageUpload").change(function() {
		readURLImg(this);
	});

	// Add Banner Image
	$("#bannerImage").hide();
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$("#bannerImage").show();
				$('#headerImgPre').css('background-image', 'url('+e.target.result +')');
				$('.header-img-pre').hide();
				$('.header-img-pre').fadeIn(650);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	$("#bannerimageUpload").change(function() {
		readURL(this);
	});

	// Add video
		$("#addVideo-box").hide();
	// function readURL(input) {
	// 	if (input.files && input.files[0]) {
	// 		var reader = new FileReader();
	// 		reader.onload = function(e) {
	// 			//$("#addImage-box").show();
	// 			$('#vidpre').attr('src', ''+e.target.result +'');
	// 			$('.add-img-pre').hide();
	// 			$('.add-img-pre').fadeIn(650);
	// 		}
	// 		reader.readAsDataURL(input.files[0]);
	// 	}
	// }
	// $("#addVideoUpload").change(function() {
	// 	readURL(this);
	// });

	
	// Date Picker
	// $(function () {
	// 	$("#datepicker").datepicker({ 
	// 		  autoclose: true, 
	// 		  todayHighlight: true
	// 	}).datepicker('update', new Date());
	//   });

	// // Time picker
	// $('#datetimepicker3').datetimepicker({
	// 	format: 'LT'
	// });


	// Multiple choice grid -- Row
		// var rowCount = 1;
		// $(document).on('click','.add-row-opt', function() {
		// 	$('#rowNew')
		// 		.clone()
		// 		.attr('id', 'rowNew-'+ rowCount++)
		// 		.insertAfter($('[id^=rowNew]:last'));
		// 	$('.icon-box').text(rowCount++);
		// }) ;
	
	// Multiple choice grid -- Row
	var secCount = 2;
	$(document).on('click','.add-row-opt', function() {
		var option = "Row";
		var svg = "<svg data-toggle='tooltip' data-placement='bottom' title='Remove' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path><path d='M0 0h24v24H0z' fill='none'></path></svg>";

		var domElement = $("<div class='row-option' id='rowNew'><div class='icon-box'>" + countNum++ +"</div><input type='text' class='form-control no-box option-bar' placeholder="+option+ '&nbsp;'+ secCount +"><div class='remove'>" + svg +"</div></div>");
		
		// $(this).before(domElement).appendTo('#rowNew');

		$(this).before(domElement);

		secCount++;

		$(".remove").click(function(){
			$(this).parent().remove();
		});
	});


	// Multiple choice grid -- Columns
	var colNum = 2;
	$(document).on('click','.add-columns-opt', function() {
		var colCount = 2;
		
		var option = "Columns";
		var svg = "<svg data-toggle='tooltip' data-placement='bottom' title='Remove' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path><path d='M0 0h24v24H0z' fill='none'></path></svg>";

		var domElement = $("<div class='row-option' id='rowNew'><div class='icon-box cirlcle'></div><input type='text' class='form-control no-box option-bar' placeholder="+option+ '&nbsp;'+ colCount +"><div class='remove'>" + svg +"</div></div>");
		
		// $(this).before(domElement).appendTo('#rowNew');

		$(this).before(domElement);

		colCount++;

		$(".remove").click(function(){
			$(this).parent().remove();
		});
	});



});