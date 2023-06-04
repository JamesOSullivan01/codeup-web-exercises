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



        $('#clean-animal-list-btn').click(function() {
            // Iterate over each <li> element with the class "animal-list-item" within the "animals-list" <ul>
            $('#animals-list li.animal-list-item').each(function() {
                // Get the text content of the current <li> element
                var animal = $(this).text();

                // Select the next sibling <li> element and remove it from the DOM
                var nextItem = $(this).next('li').remove();

                // Create a new <li> element with the "This is a..." sentence and insert it after the current <li>
                $('<li>').text('This is a... ' + animal).insertAfter($(this));

                // Move the current <li> element to the next line by inserting it after the removed <li>
                $(this).insertAfter(nextItem).remove();
            });
        });









});
