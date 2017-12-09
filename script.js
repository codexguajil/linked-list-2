var enterButton = $('.enter-button');
var bookmarkTitle = $('#bookmark-title');
var bookmarkUrl = $('#bookmark-url');
var bookmarkSection = $('.section-right');

enterButton.click(bookmarkCreate);

function bookmarkCreate(e) {
  e.preventDefault();
  bookmarkTitle.val();
  bookmarkUrl.val();
  bookmarkSection.prepend(`<h2>${bookmarkTitle.val()}</h2>
      <a href="${bookmarkUrl.val()}">${bookmarkUrl.val()}</a>
      <button id="mark-as-read">Mark as Read</button>
      <button id="remove-bookmark">Remove</button>`)
}
