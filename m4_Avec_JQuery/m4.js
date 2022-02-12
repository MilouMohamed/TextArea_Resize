$(function () {


    'use strict';
    $.fn.resizeTextArea = function ( ) {
 
        var textArea = $(this);

        $(textArea).on("keyup", function () {

            // $(this).rows = '1';
            
            var strg = $(this).text().trim(); 
            $(this).text(strg);

            $(this).css("resize", "none")
            $(this).css("height", "5px")
            $(this).css("height", this.scrollHeight + (this.offsetHeight - this.clientHeight-2));
            
 
        });
 

        $(this).keyup()
        return this;
    };
   
});

