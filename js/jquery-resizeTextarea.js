$(function(){

    'use strict';
        $.fn.resizeTextArea=function(){
 
            var textArea=$(this),
            hiddenDiv=$(document.createElement('div')),
            content=null;
         
            // textArea.addClass('noscroll');
            textArea.css('overflow','hidden');
            textArea.css('resize','none');



            // hiddenDiv.addClass('hiddenDiv');
            hiddenDiv.css('display','none');
            hiddenDiv.css('white-space','pre-wrap');
            hiddenDiv.css('width','500px'); 
            hiddenDiv.css('height','auto'); 
            hiddenDiv.css('min-height','50px');
            hiddenDiv.css('padding','5px');
            hiddenDiv.css('word-wrap','break-word');
             
            /*
            .hiddenDiv{
    display: none;
    white-space: pre-wrap;
    width:500px;
    min-height:50px;
    padding:5px;
    word-wrap: break-word;  
            */

          

            
            $(textArea).after(hiddenDiv);
         
            textArea.on('keyup',function(){
                content=$(this).val();
                
                hiddenDiv.css('height','auto'); 
                content=$.trim($(this).val()+"");
                content=content.replace(/\n/g,'<br>');
   
 

                hiddenDiv.html(content+'<br class="lbr">');

                hiddenDiv.css('height','auto'); 
                $(this).rows=1;
                $(this).css('height',hiddenDiv.height());

                $(this).css( "white-space", "pre-wrap");  
             


                console.log('On keyup test');
            
            });
             
            //   if ( e.text().length * fontSize > e.width() )
            //   if ( $(this).text().length * fontSize   >  $(this).width())
            //    {   update_Cols_Rows(350,1) ;   }
                 
            //   function update_Cols_Rows(cl,ro) {
            //         //   $(this).attr('cols', cl);
            //           $(this).attr('rows', ro);
            //   }
         
        
        $(this).keyup();
      console.log('On Plogin test');
        }
 
        $('#content').resizeTextArea();
});