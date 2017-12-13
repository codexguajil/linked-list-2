$(document).ready(disableEnterButton);

var enterButton = $('.js-submit-bookmark');
var bookmarkTitle = $('.js-type-title');
var bookmarks = $('.appended-bookmark');
var bookmarkUrl = $('.js-type-url');
var bookmarkSection = $('.js-bookmark-section');
var clearReadButton = $('.js-clear-click');
var counter = 0;

enterButton.click(bookmarkCreate);
$(bookmarkSection).on('click','#mark-as-read', readButtonToggle);
$(bookmarkSection).on('click','#remove-bookmark', bookmarkDelete);
bookmarkTitle.on('keyup', enableEnterButton);
bookmarkUrl.on('keyup', enableEnterButton);

function bookmarkCreate(e) {
  e.preventDefault();
  var result = (/((?:https?\:\/\/|www\.)(?:[-a-z0-9]+\.)*[-a-z0-9]+.*)/i).test($(bookmarkUrl).val());
   if(($(".js-type-title").val() === '')) {
    document.querySelector('.js-errors').innerHTML = 'Be sure you have entered a title.';
    // console.log('Be sure you have entered a title.');
   } else if (result === false) {
    document.querySelector('.js-errors').innerHTML = 'Your url address seems odd.  Try copying the url from your site and paste it into the field.';
    // console.log('Your url address seems odd.  Try copying the url from your site and paste it into the field.')
   } else {
    document.querySelector('.js-errors').innerHTML = '';
    bookmarkSection.prepend(`<article class="appended-bookmark"><h2>${bookmarkTitle.val()}</h2>
      <a href="${bookmarkUrl.val()}">${bookmarkUrl.val()}</a>
      <button class="asText" id="mark-as-read">Read</button>
      <button class="asText" id="remove-bookmark">Delete</button></article>`)
    counter++;
    readOrUnread(counter)
   }
};

// function bookmarkCounter() {
//   counter++
//   console.log(counter++)
// }
var j = 0 
var readLinks = 0
var unreadLinks = 0
function readButtonToggle(){
  $(this).toggleClass('read-clicked');
  $(this).parent().toggleClass('read');
}
  
  // $.each(bookmarks, function(key, val) {
  //   if (.attr(key).val() === 'read') {
  //     j++
  //     readLinks = j;
  //   } else {
  //     unreadLinks = counter - j;
  //   }
  // }

function readOrUnread(counter) {
  var readLinks = $('.read')
  for(i = 0; readLinks.length - 1; i++) {
      j++;
      readLinks = j;
      unreadLinks = counter - j;
    } console.log(readLinks, unreadLinks);
  }

// function readLinkCounter() {

// }

function bookmarkDelete(){
  $(this).parent().remove();
  counter--;
};

function disableEnterButton() {
    enterButton.prop('disabled', true);
};

function enableEnterButton() {
    if (bookmarkTitle.val() != 0 || bookmarkUrl.val() != 0) {
     enterButton.prop('disabled', false);
   } else {disableEnterButton()};
};