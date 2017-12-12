$(document).ready(disableEnterButton);

var enterButton = $('.js-submit-bookmark');
var bookmarkTitle = $('.js-type-title');
var bookmarkUrl = $('.js-type-url');
var bookmarkSection = $('.js-bookmark-section');

enterButton.click(bookmarkCreate);
$(bookmarkSection).on('click','#mark-as-read', readButtonToggle, addClearButton);
$(bookmarkSection).on('click','#remove-bookmark', bookmarkDelete);
bookmarkTitle.on('keyup', enableEnterButton);
bookmarkUrl.on('keyup', enableEnterButton);

function bookmarkCreate(e) {
  e.preventDefault();
  bookmarkSection.prepend(`<article class="appended-bookmark"><h2>${bookmarkTitle.val()}</h2>
    <a href="${bookmarkUrl.val()}">${bookmarkUrl.val()}</a>
    <button id="mark-as-read">Read</button>
    <button id="remove-bookmark">Delete</button></article>`);
};

function readButtonToggle(){
  $(this).toggleClass('read-clicked');
  $(this).parent().toggleClass('read');
};

function bookmarkDelete(){
  $(this).parent().remove();
};

function disableEnterButton() {
    enterButton.prop('disabled', true);
};

function enableEnterButton() {
    if (bookmarkTitle.val() != 0 || bookmarkUrl.val() != 0) {
     enterButton.prop('disabled', false);
   } else {disableEnterButton()};
};

function addClearButton() {}
