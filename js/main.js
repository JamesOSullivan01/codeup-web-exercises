'use strict'

$(document).ready(function() {

    // When the box with the id of dbl-click-box is double-clicked, an alert should pop up with the text 'BOX DOUBLE-CLICKED!'
$('.dbl-click-box').on('dblclick', function() {
    alert('BOX DOUBLE-CLICKEd');
});

    // Clicking on the button with an id of dark-mode-btn toggles dark mode on and off. HINT: changes should be applied to the body of the HTML.
$('#dark-mode-btn').on('click', function(){
   $('body').toggleClass('dark-mode');
});

    // When the cursor hovers over the span with the id of uppercase (<span id="uppercase">), take the text of that span and display it, in lowercase, in the span with the id of lowercase (<span id="lowercase">).

    $('#uppercase').hover(function() {
        let text = $(this).text();
        $('#lowercase').text(text.toLowerCase());
    }, function() {
        $('#lowercase').empty();
        });


        $( "li" ).hover(
        function() {
        $( this ).append( $( "<span> ***</span>" ) );
    }, function() {
        $( this ).find( "span" ).last().remove();
    }
        );

});
