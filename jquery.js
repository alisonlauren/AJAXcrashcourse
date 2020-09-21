//1
//JQUERY
//library that allows you to do forms, css, event handling, etc...easier
//mostly used for DOM Access/Creation/Manipulation
//you can use it for animation and special effects
//call it directly from content delivery network CDN...you can use it in your script tag

////////////////////////////////////

//2
//DOCUMENT READY
$(document).ready(function () {
    //code block
})
//wait for all elements to load, use $(css selector)
//////////////////////////////////////

//3
//SEARCHING FOR DOM IN ELEMENTS IN JAVASCRIPT
document.getElementsById('#nameOfId');
//does the same thing...
document.querySelectorAll('a')
//or
$('a')
//dollar sign is the short hand for jquery
$('#main-menu')
//html
$('#alert-text').html("<strong> Holy Guag</strong> hello world")
//good practice on variable names using jq, put a $ in fromt
///////////////////////////////////////

//4
//CREATING ELEMENTS
var $anchor = $('<a>')
//and for creating elements with 
var $anchor = $('<a>', {
    'class': 'nav-item',
    'data-image': 'trigger',
    'text': "click me!"
});
//is similiar too...
var anchor = doucment.createElement('a');
anchor.setAttribute('class', 'nav-item');
anchor.setAttribute('data-image', 'trigger');
anchor.textContent = ("click me")
//you can append as welll
$anchor.append($image);
//helpful...
$anchor.addClass('active');
$anchor.removeClass('active');
$anchor.toggleClass('active')
//click events
$('#the-button').click(function () {
    alert('hello');
    $(this).toggleClass
})
//is like vjs
document.querySelector('#the-button').addEventListener('click', function () {
    alert('hello')
})
//onclicks..
$('#the-button').on('click', function () {
    alert('hello');
    $(this).toggleClass
})


//EVENT LISTENERS IN JQ
$('a').on('click', function() {
    alert('hello!')
})
//or///////
$('a').on('click', function() {
    e.preventDefault()
    $(this).text("Clicked");
})


//BASIC EFFECTS
$('a').on('click', function() {
    e.preventDefault()
    $(this).hide();
    //will hide/remove from page after click
    //show() will make it show on page
    //toggle between it meaning both
})
//fade in, fade out, fadeTo(), fadeToggle()
//.slidUp(), .slideDown(), .slideToggle()


