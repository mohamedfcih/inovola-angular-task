//Menu
(function ($) {

    $.circleMenu = function (el, options) {
        var plugin = this;
        var $el = $(el);
        var $toggle, $links;
        var open = false, nbLinks, multip = 1, dir;

        plugin.options = $.extend({
            direction: 'up', // up down right left
            position: {
                x: 'right',
                y: 'bottom'
            }
        }, options);

        plugin.init = function () {
            switch (plugin.options.position.x) {
                case 'right':
                    $el.css('right', '15px');
                    break;
                case 'left':
                    $el.css('left', '15px');
                    break;
                default:
                    $el.css('right', '15px');
            }
            switch (plugin.options.position.y) {
                case 'top':
                    $el.css('top', '15px');
                    break;
                case 'bottom':
                    $el.css('bottom', '15px');
                    break;
                default:
                    $el.css('bottom', '15px');
            }
            plugin.createToggle();
            plugin.createLink();
            plugin.initEvents();
        }
        plugin.createToggle = function () {
            //create button
            $toggle = $(document.createElement('button'));
            $toggle.addClass('circle-menu-toggle');

            //create icon
            $icon = $(document.createElement('i'));
            $icon.addClass('');
            $icon.prop("aria-hidden", true);

            $toggle.append($icon);
            $el.append($toggle);
        }
        plugin.createLink = function () {
            $links = $el.find('li');
            nbLink = $links.length;
            switch (plugin.options.direction) {
                case 'up':
                    dir = 'Y';
                    multip = -1;
                    break;
                case 'down':
                    dir = 'Y';
                    multip = 1;
                    break;
                case 'right':
                    dir = 'X';
                    multip = 1;
                    break;
                case 'left':
                    dir = 'X';
                    multip = -1;
                    break;
                default:
                    dir = 'Y';
                    multip = -1;
            }
            plugin.close();
        }
        plugin.initEvents = function () {
            $toggle.click(function () {
                plugin.handleClick(plugin, $el);
            });
        }
        plugin.handleClick = function (plugin, $el) {
            open = !open;
            if (open) {
                plugin.open();
            } else {
                plugin.close();
            }
        }
        plugin.open = function () {
            $links.each(function (index) {
                plugin.css($(this), 'transition-delay', ((nbLink - index) * 0.1) + 's');
                plugin.css($(this), 'transform', 'translate' + dir + '(' + (multip * (index + 1) * ($(this).height() + 10)) + 'px) scale(1)');
            });
        }
        plugin.close = function () {
            $links.each(function (index) {
                plugin.css($(this), 'transition-delay', ((index + 1) * 0.1) + 's');
                plugin.css($(this), 'transform', 'translate' + dir + '(0px) scale(0)');
            });

        }
        plugin.css = function ($el, prop, value) {
            $el.css(prop, value);
            $el.css('-webkit-' + prop, value);
            $el.css('-ms-' + prop, value);
            $el.css('-moz-' + prop, value);
            $el.css('-o-' + prop, value);
        }




        plugin.init();
    }


    $.fn.circleMenu = function (options) {
        return this.each(function () {
            console.log($(this).attr('upgraded'));
            if ($(this).attr('upgraded') == undefined) {
                var plugin = new $.circleMenu(this, options);
                $(this).attr('upgraded', 'true');
            }
        });

    }

}(jQuery));

$('#menu1').circleMenu({
    direction: 'down',
    position: {
        x: 'left',
        y: 'top'
    }
});


//Saerch

$("#search").focusin(function () {
    $('.voice-icon').addClass('icon-border-bottom-green');
    $('.search-icon').addClass('icon-border-bottom-white');
});
$("#search").focusout(function () {
    $('.voice-icon').removeClass('icon-border-bottom-green');
    $('.search-icon').removeClass('icon-border-bottom-white');
});




//resize Card
$(".resize-card").click(function () {
    $(this).addClass('d-none');
    var thisCard = $(this).closest('.card');
    $(thisCard).addClass("full-size-card");
    var closeBtn = $(this).closest('.card-header-actions').children(".close-li").children("a");
    $(closeBtn).removeClass('d-none');
    $(thisCard).css('position', 'fixed');
    $(thisCard).animate({
        "top": 0,
        "left": 0,
    });
});
$(".close-resize").click(function () {
    $(this).addClass('d-none');
    var resizeBtn2 = $(this).closest('.card-header-actions').children("li").children(".resize-card");
    $(resizeBtn2).removeClass('d-none');
    var thisCard = $(this).closest('.card');
    $(thisCard).css('position', 'relative');
    $(thisCard).removeClass("full-size-card");
});


//collaps-icon

$(".collaps-icon").click(function () {
    $(this).children("i").toggleClass("rotate180");
});


//tabs style

$(".side-tabs .nav-item:first-child").addClass("active-li");

$('body').on('click', '.side-tabs .nav-link', function () {

    $(".nav-item.active-li").removeClass("active-li");
    $(this).parent().addClass("active-li");
});

// Custome file upload
$(".custom-file-input").on("change", function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});


//Count Up numbers
$('.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
        countNum: countTo
    },
        {
            duration: 2000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }

        });
});


//scroll
$(function () {
    //The passed argument has to be at least a empty object or a object with your desired options
    $('.scrollLeg').overlayScrollbars({});
});



//Timeline

(function () {

    'use strict';

    // define variables
    var items = document.querySelectorAll(".timeline li");
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

})();



// Pregress Bar - Steps

var current_fs, next_fs, previous_fs; //fieldsets
var opacity;

$("#step1").click(function () {
    $(this).addClass("active");
    $(".step-content").hide();
    $("#step1-content").show();
    $("#step1-content").css("opacity", "1");
    $(this).prevAll().addClass('active');
    $(this).nextAll().removeClass('active');
});

$("#step2").click(function () {
    $(this).addClass("active");
    $(".step-content").hide();
    $("#step2-content").show();
    $("#step2-content").css("opacity", "1");
    $(this).prevAll().addClass('active');
    $(this).nextAll().removeClass('active');

    return gridsterFunctoin();
});

$("#step3").click(function () {
    $(this).addClass("active");
    $(".step-content").hide();
    $("#step3-content").show();
    $("#step3-content").css("opacity", "1");
    $(this).prevAll().addClass('active');
    $(this).nextAll().removeClass('active');
});

$("#step4").click(function () {
    $(this).addClass("active");
    $(".step-content").hide();
    $("#step4-content").show();
    $("#step4-content").css("opacity", "1");
    $(this).prevAll().addClass('active');
    $(this).nextAll().removeClass('active');
});

$("#step5").click(function () {
    $(this).addClass("active");
    $(".step-content").hide();
    $("#step5-content").show();
    $("#step5-content").css("opacity", "1");
    $(this).prevAll().addClass('active');
    $(this).nextAll().removeClass('active');
});

$("#step6").click(function () {
    $(this).addClass("active");
    $(".step-content").hide();
    $("#step6-content").show();
    $("#step6-content").css("opacity", "1");
    $(this).prevAll().addClass('active');
    $(this).nextAll().removeClass('active');
});













// Object Type - Steps

$("#step11").click(function () {
    $(this).addClass("active");
    $(".step-content").hide();
    $("#step11-content").show();
    $("#step11-content").css("opacity", "1");
    $(this).prevAll().addClass('active');
    $(this).nextAll().removeClass('active');
});

$("#step22").click(function () {
    $(this).addClass("active");
    $(".step-content").hide();
    $("#step22-content").show();
    $("#step22-content").css("opacity", "1");
    $(this).prevAll().addClass('active');
    $(this).nextAll().removeClass('active');
});

$("#step33").click(function () {
    $(this).addClass("active");
    $(".step-content").hide();
    $("#step33-content").show();
    $("#step33-content").css("opacity", "1");
    $(this).prevAll().addClass('active');
    $(this).nextAll().removeClass('active');
});

$("#step44").click(function () {
    $(this).addClass("active");
    $(".step-content").hide();
    $("#step44-content").show();
    $("#step44-content").css("opacity", "1");
    $(this).prevAll().addClass('active');
    $(this).nextAll().removeClass('active');
});

$("#step55").click(function () {
    $(this).addClass("active");
    $(".step-content").hide();
    $("#step55-content").show();
    $("#step55-content").css("opacity", "1");
    $(this).prevAll().addClass('active');
    $(this).nextAll().removeClass('active');
});

//End Object Type - Steps


$(".next").click(function () {

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
        step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            next_fs.css({ 'opacity': opacity });
        },
        duration: 600
    });
});

$(".previous").click(function () {

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
        step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            previous_fs.css({ 'opacity': opacity });
        },
        duration: 600
    });
});

$('.radio-group .radio').click(function () {
    $(this).parent().find('.radio').removeClass('selected');
    $(this).addClass('selected');
});

$(".submit").click(function () {
    return false;
});

//Select 2
$('.searchable').select2();

//Muliple select


$('.multiple').selectator({
    showAllOptionsOnFocus: true,
    searchFields: 'value text subtitle right'
});
$('.single').selectator({
    showAllOptionsOnFocus: true,
    searchFields: 'value text subtitle right'
});
function classToggle1() {
    document.querySelector('#btn1ar').classList.toggle('btn-success');
    document.querySelector('#t1ar').classList.toggle('d-none');
}
document.querySelector('#btn1ar').addEventListener('click', classToggle1);
function classToggle2() {
    document.querySelector('#btn1ch').classList.toggle('btn-success');
    document.querySelector('#t1ch').classList.toggle('d-none');
}
document.querySelector('#btn1ch').addEventListener('click', classToggle2);



function classToggleD() {
    document.querySelector('#btnDar').classList.toggle('btn-success');
    document.querySelector('#tDar').classList.toggle('d-none');
}
function classToggleCD() {
    document.querySelector('#btnDch').classList.toggle('btn-success');
    document.querySelector('#tDch').classList.toggle('d-none');
}



function classToggleo1() {
    document.querySelector('#btn1oar').classList.toggle('btn-success');
    document.querySelector('#o1ar').classList.toggle('d-none');
}

function classToggleo2() {
    document.querySelector('#btn1och').classList.toggle('btn-success');
    document.querySelector('#o1ch').classList.toggle('d-none');
}


function classToggleoModal1() {
    document.querySelector('#btn2oar').classList.toggle('btn-success');
    document.querySelector('#o2ar').classList.toggle('d-none');
}

function classToggleoModal2() {
    document.querySelector('#btn2och').classList.toggle('btn-success');
    document.querySelector('#o3ch').classList.toggle('d-none');
}


function classToggleoModal3() {
    document.querySelector('#btn3oar').classList.toggle('btn-success');
    document.querySelector('#o3ar').classList.toggle('d-none');
}

function classToggleoModal4() {
    document.querySelector('#btn4och').classList.toggle('btn-success');
    document.querySelector('#o4ch').classList.toggle('d-none');
}


//document.querySelector('#btn1och').addEventListener('click', classToggleo2);
//document.querySelector('#btn1oar').addEventListener('click', classToggleo1);
document.querySelector('#btnDch').addEventListener('click', classToggleCD);
document.querySelector('#btnDar').addEventListener('click', classToggleD);
function removeParents(e) {
    e.parentElement.parentElement.parentElement.remove();

}
var rnd = Math.floor(Math.random() * 1000000000);
var html_to_insert = "<div class='row'> <div class='col-sm-12 col-md-3'> <div class='form-group'> <label> Q1 </label> <input type='text' class='form-control' /> </div> </div> <div class='col-sm-12 col-md-3'> <div class='form-group'> <label> Value </label> <input type='text' class='form-control' /> </div> </div> <div class='col-sm-12 col-md-3'> <div class='form-group'> <label> Protected </label> <div class='clearfix'></div> <div class='btn-group-toggle' id='" + rnd + "' data-toggle='buttons'><button for='" + rnd + "' class='btn advance-search'>Predict</button></div> </div> </div> <div class='col-sm-12 col-md-3'> <div class='form-group'> <label> </label> <div class='clearfix'></div> <a href='#' onClick='removeTarget(this)' class='header-actions text-danger'><img class='active-status-img' src='assets/images/Group 2574.svg'> </a> </div> </div> </div>";

function insertTarget() {
    document.getElementById('addtarget-div').innerHTML += html_to_insert;
}
function removeTarget(e) {
    e.parentElement.parentElement.parentElement.remove();
}



// Side menu style
$(".menu-style").click(function () {
    $(".menu-style").removeClass('active');
    $(this).addClass('active');

    if ($(this).attr('name') == 'card') {
        $(".side-menu").addClass('d-none');
        $(".card-menu").removeClass('d-none');
        $(".page-content").addClass('col-lg-10');
        $(".page-content").removeClass('col-lg-12');
    }
    if ($(this).attr('name') == 'side') {
        $(".side-menu").removeClass('d-none');
        $(".card-menu").addClass('d-none');
        $(".page-content").removeClass('col-lg-10');
        $(".page-content").addClass('col-lg-12');
    }
});
