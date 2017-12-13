var enterButton = $('.js-submit-bookmark');
var bookmarkTitle = $('.js-type-title');
var bookmarkUrl = $('.js-type-url');
var bookmarkSection = $('.js-bookmark-section');

enterButton.click(bookmarkCreate);
$(bookmarkSection).on('click','#mark-as-read', readButtonToggle);
$(bookmarkSection).on('click','#remove-bookmark', bookmarkDelete);

function bookmarkCreate(e) {
  e.preventDefault();
  var result = (/((?:https?\:\/\/|www\.)(?:[-a-z0-9]+\.)*[-a-z0-9]+.*)/i).test($(bookmarkUrl).val());
   if(($("#bookmark-title").val() === '')) {
    console.log('Be sure you have entered a title.');
   } else if (result === false) {
    console.log('Your url address seems odd.  Try copying the url from your site and paste it into the field.')
   } else {
    bookmarkSection.prepend(`<article class="appended-bookmark"><h2>${bookmarkTitle.val()}</h2>
      <a href="${bookmarkUrl.val()}">${bookmarkUrl.val()}</a>
      <button id="mark-as-read">Read</button>
      <button id="remove-bookmark">Delete</button></article>`)
   }
  
}

function readButtonToggle(){
  $(this).toggleClass('read-clicked');
  $(this).parent().toggleClass('read');
}

function bookmarkDelete(){
  $(this).parent().remove();
}

