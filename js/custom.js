/* global $ , alert , console */

$(function() {
    
    'use strict';
    
    // Trigger Nicie Scroll Plugin
    
    $('html').niceScroll({
        
        cursorcolor: '#f7600e',
        cursorwidth: 5,
        cursorborderradius: 0,
        cursorborder: '1px solid #f7600e'
    });
    
    // Change Header Height
    
    $('.header').height($(window).height());
    
    // Scroll To Features 
    
    $('.header .arrow i').click(function() {
        
        $('html, body').animate({
            
            scrollTop: $('.features').offset().top
            
        }, 1000);
    });
    
    // Show Hidden Items From Work
    
    $('.show-more').click(function () {
        
        $('.our-work .hidden').fadeIn(1000);
    
    });
    
    // Check Testimonials 
    
    var leftArrow = $('.testim .fa-chevron-left'),
        
        rightArrow = $('.testim .fa-chevron-right');
    
    function checkClients() {
        
        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
        
    }
    
    checkClients()
    
    $('.testim i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testim .active').fadeOut(100,function (){
                
                $(this).removeClass('active').next('client').addClass('active').fadeIn();
                
                checkClients()
                
            });
            
        } else {
            
            $('.testim .active').fadeOut(100,function (){
                
                $(this).removeClass('active').prev('client').addClass('active').fadeIn();
                
                checkClients()
                
            });
        }
        
    });
    
});