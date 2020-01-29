$(document).ready(function () {
  function getNewQuote() {
    $.ajax({ 
    type : "GET", 
    jsonp: 'jsonp',
    dataType: 'jsonp',
    url : "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en",
    success : function(result) { 
      if (result.quoteAuthor.length > 1) {
        $('h1').html(' "' + result.quoteText + '" ' + " - " + result.quoteAuthor);
        $("a").attr("href", 'https://twitter.com/intent/tweet?text=' + ' "' + result.quoteText + '" ' + " - " + result.quoteAuthor);
      } else {
        $('h1').html(' " ' + result.quoteText + ' " ' + " - " + "Unknown")
        $("a").attr("href", 'https://twitter.com/intent/tweet?text=' + ' "' + result.quoteText + '" ' + " - " + "Unknown");        
      }
    },
    error : function(result) { 
       console.log("Error, figure it out idiot.")
      }
    });
   }
var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
  
function makeTwitterColourChange() { 
  $('#twittericon').animate({"background-color": randomColor}, 1000)
} 
$('#mybutton').on('click', function() {
  getNewQuote()
  randomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
  makeTwitterColourChange()
  });
$('#mybutton').on('click', function() {
  $(this).animate({"background-color": randomColor}, 1000)
  });
$('#quote-box').on('click', function() {
  $(this).animate({"color": randomColor}, 1000)
  });
$('body').on('click', function() { 
  $(this).animate({"background-color": randomColor}, 1000)
  });
});