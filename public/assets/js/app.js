/* Set the width of the side navigation to 250px and the right margin of the page content to 250px */
function openNav() {
    $("#mySidenav").width(450);
    $("#main").css({marginRight:'450px'});
    $("#arrow").css({marginRight:'420px'});
}

/* Set the width of the side navigation to 0 and the right margin of the page content to 0 */
function closeNav() {
    $("#mySidenav").width(0);
    $("#main").css({marginRight:'0'});
    $("#arrow").css({marginRight:'-32px'});
}

$('i.fa.fa-angle-double-left ').click(function() {
    openNav();
})

$('#display').click(function() {
    $('#players').show();
    $('#display').hide();
})

$('.addTeam').click(function() {
    $('#myPlayers').append($('<p>').text());
})

$('#searchBox').submit(function() {
    console.log('hello');
});