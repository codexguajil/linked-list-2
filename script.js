var enterButton = $('.enter-button');
var bookmarkTitle = $('#bookmark-title');
var bookmarkUrl = $('#bookmark-url');
var bookmarkSection = $('.section-right');

enterButton.click(bookmarkCreate);
$(bookmarkSection).on('click','#mark-as-read', readButtonToggle);
$(bookmarkSection).on('click','#remove-bookmark', bookmarkDelete);

function bookmarkCreate(e) {
  e.preventDefault();
  bookmarkSection.prepend(`<article class="appended-bookmark"><h2>${bookmarkTitle.val()}</h2>
      <a href="${bookmarkUrl.val()}">${bookmarkUrl.val()}</a>
      <button id="mark-as-read">Unread</button>
      <button id="remove-bookmark">Delete</button></article>`)
}

function readButtonToggle(){
  $(this).parent().toggleClass('read');
  
}

function bookmarkDelete(){
  $(this).parent().remove();

}

