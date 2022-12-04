var $, window;

$(function () {
    
    'use strict';
    
    /* Switch between login and register forms */
    
    $(".forget-pass").on("click", function () {
       
        $("#login-forms").hide("fast");
        $("#reset-forms").fadeIn();
        
    });
    
    $(".cancel-btn").on("click", function () {
       
        $("#reset-forms").hide("fast");
        $("#login-forms").fadeIn();
        
    });
    
    
    
    /*Login page alert*/
    
    $("#login-forms .login-btn").click(function () {
        
        $(".login-alert").addClass("show");
        
    });
    
    
    /* Circle Progress */
    
    $('#circle').circleProgress({
        value: 0.75,
        size: 240,
        fill: "#24AB92",
        animation: { duration: 2000 }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
    });
    
    
    
   
    

    
    
});