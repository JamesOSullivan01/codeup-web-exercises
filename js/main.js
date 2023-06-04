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

    // The span with an id of counter should increment by one every second.

//.text returns a string, use parseInt to parse out numbers.
    let counter = parseInt($('#counter').text());

    setInterval(function() {
        counter++;
        $('#counter').text(counter);
    }, 1000);

    // When the user clicks on the button (<button id="list-chars-btn">), take any text the user has typed in the input field (<input id="characters">), and output each individual character as a separate list item within the unordered list (<ul id="characters-list">). Clicking the button multiple times should not append additional list items.

    $('#list-chars-btn').on('click', function(e) {
        e.preventDefault()
        var inputText = $('#characters').val();
        $('#characters-list').empty();

        for (var i = 0; i < inputText.length; i++) {
            var newLi = $('<li></li>').text(inputText[i]);
            $('#characters-list').append(newLi);
        }
    });


});
