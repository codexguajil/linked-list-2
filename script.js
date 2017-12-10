var enterButton = $('.enter-button');
var bookmarkTitle = $('#bookmark-title');
var bookmarkUrl = $('#bookmark-url');
var bookmarkSection = $('.section-right');

enterButton.click(bookmarkCreate);
$(bookmarkSection).on('click','#mark-as-read', readButtonToggle);

function bookmarkCreate(e) {
  e.preventDefault();
  bookmarkSection.prepend(`<article class="appended-bookmark"><h2>${bookmarkTitle.val()}</h2>
      <a href="${bookmarkUrl.val()}">${bookmarkUrl.val()}</a>
      <button id="mark-as-read">Unread</button>
      <button id="remove-bookmark">Delete</button></article>`)
}

function readButtonToggle(){
  $( ".appended-bookmark" ).toggleClass( 'read');
}
