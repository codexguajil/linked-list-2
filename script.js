$(document).ready(disableEnterButton);

var enterButton = $('.js-submit-bookmark');
var bookmarkTitle = $('.js-type-title');
var bookmarks = $('.appended-bookmark');
var bookmarkUrl = $('.js-type-url');
var bookmarkSection = $('.js-bookmark-section');
var clearReadButton = $('.js-clear-click');


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
    readOrUnread();
    whenBooksAreRead();
   }
};


$('span').append(readLinks)

function whenBooksAreReadMessage() {
  if readLinks !== 0;
  $('#read-books').append(`<p> + 'You have read ' + readLinks + ' books.' + <p>`)'
}


function readButtonToggle(){
  $(this).toggleClass('read-clicked');
  $(this).parent().toggleClass('read');
  readOrUnread();
  whenBooksAreRead();
}
  
var readLinks = 0;
var unreadLinks = 0;
var counter = 0;
function readOrUnread() {
  readLinks = $('.read').length;
  unreadLinks = counter - readLinks
  console.log(readLinks, unreadLinks);
  }

function bookmarkDelete(){
  $(this).parent().remove();
  counter--;
  readOrUnread();
  whenBooksAreRead();
};

function disableEnterButton() {
    enterButton.prop('disabled', true);
};

function enableEnterButton() {
    if (bookmarkTitle.val() != 0 || bookmarkUrl.val() != 0) {
     enterButton.prop('disabled', false);
   } else {disableEnterButton()};
};