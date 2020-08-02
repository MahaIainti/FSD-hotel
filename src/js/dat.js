
import $ from 'jquery';
import jQuery from 'jquery';
//import datepicker from 'air-datepicker';
jQuery(function() {
    $('body').css('color', 'blue');
    $(document).ready(function(){
        $(".btn-slide").click(function(){
            $("#panel").slideToggle("slow");
            $(this).toggleClass("active");
        });
    });
});
