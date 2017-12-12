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
   if(($(".js-type-title").val() === '')) {
    console.log('Be sure you have entered a title.');
   } else if (result === false) {
    console.log('Your url address seems odd.  Try copying the url from your site and paste it into the field.')
   } else {
    bookmarkSection.prepend(`<article class="appended-bookmark"><h2>${bookmarkTitle.val()}</h2>
      <a href="${bookmarkUrl.val()}">${bookmarkUrl.val()}</a>
      <button class="asText" id="mark-as-read">Read</button>
      <button class="asText" id="remove-bookmark">Delete</button></article>`)
   }
  console.log('23')
}

function readButtonToggle(){
  $(this).parent().toggleClass('read');
//   var toggled = true;
//   if(toggled){
//     $(this).css('color', '#F05A28');
//     toggled  = false;
// } else {
//     $(this).css('color', '#455A64');
//     clicked  = true;
}

function bookmarkDelete(){
  $(this).parent().remove();
}






