$(document).ready(function() {
    setTimeout(() => {
        $('#completedPopup, #contactSubmitionModal').modal('show');
    }, 2000);
    
    $('.input-group-password .btn').click(function(){
        $(this).children().toggle();
        $(this).toggleClass('active');

        if($(this).hasClass('active')){
            $(this).siblings('input').attr('type', 'text');
        }else{
            $(this).siblings('input').attr('type', 'password');
        }
    });

    $( "#contact-btn" ).click(function(event) {
        // event.preventDefault();
        if($('.phone-field').hasClass('is-invalid')){
          return false
        }
        // else{
        //   $( "#contact" ).submit();
        // }
    });

    $('.btn-menu').click(function(){
        $(this).children().toggle();
        $('.navigation-menu').toggleClass('show');
    })

    if($('.owl-cards').length > 0){
        $('.owl-cards').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots : true,
            navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                992:{
                    items:4
                },
                1000:{
                    items:5
                }
            }
        })
    }

    var form = $("#step-form");
    if(form.length > 0){
        form.validate({
            errorPlacement: function errorPlacement(error, element) { element.before(error); },
            // rules: {
            //     confirm: {
            //         equalTo: "#password"
            //     }
            // }
        });

        form.children("div").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            autoFocus: true,
            onStepChanging: function (event, currentIndex, newIndex)
            {
                form.validate().settings.ignore = ":disabled,:hidden";
                return form.valid();
            },
            onFinishing: function (event, currentIndex)
            {
                form.validate().settings.ignore = ":disabled";
                return form.valid();
            },
            onFinished: function (event, currentIndex)
            {
                alert("Submitted!");
            }
        });
    }

    // prev
    $('.actions ul li').eq(0).find('a').html('<i class="fa-solid me-2 fa-chevron-left"></i> <span>Previous</span>');
    $('.actions ul li').eq(1).find('a').html('<span>Next</span> <i class="fa-solid ms-2 fa-chevron-right"></i>');
    $('.actions ul li').eq(2).find('a').html('<span>Submit</span> <i class="fa-solid ms-2 fa-chevron-right"></i>');
    $('.actions ul li a').addClass('btn btn-grad d-inline-flex align-items-center border-0 ls-3 text-uppercase');


    // Circle Check
    $('label.item-circle .item-span').click(function(){
        $(this).parent().toggleClass('active');
        $(this).siblings('input').attr('disabled', false);
        if($(this).parent().hasClass('active')){
            if($(this).parents('section').find('input[type="checkbox"]').filter(':checked').length + 1 > 3){
                alert('Don\'t add more then 3 items. \nPlease remove previous item first.')
                $(this).parent().removeClass('active');
                $(this).siblings('input').attr('disabled', true);
            }
        }
    })

});

if($('.form-validate').length > 0){
    $.validator.setDefaults({
        submitHandler: function() {
            alert("submitted!");
        }
    });
    $().ready(function() {
        // validate the comment form when it is submitted
        $('[type="submit"]').click(function(){
            $(this).parents(".form-validate").validate();
        })
    });
}