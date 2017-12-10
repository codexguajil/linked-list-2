var enterButton = $('.enter-button');
var bookmarkTitle = $('#bookmark-title');
var bookmarkUrl = $('#bookmark-url');
var bookmarkSection = $('.section-right');
// var markAsReadButton = $('#mark-as-read');

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
  console.log('hello') 
  $( ".appended-bookmark" ).toggleClass( 'read');
    if ( $( this ).parent().is( ".read" ) ) {
      $("#mark-as-read").text('Unread');
//     } else if{( $( this ).parent().is( ".read" ) ) {
//       $("#mark-as-read").text('Unread');
//       return "sad";
    }

}

// $("#mark-as-read").click(function(){
// //     $(".appended-bookmark").toggleClass("read");
//     console.log('someshit');
// });
