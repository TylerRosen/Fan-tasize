/* Set the width of the side navigation to 250px and the right margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "450px";
    document.getElementById("main").style.marginRight = "450px";
    document.getElementById("arrow").style.marginRight = "450px";
}

/* Set the width of the side navigation to 0 and the right margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("arrow").style.marginRight = "0";
}

$('i.fa.fa-angle-double-left ').click(function() {
    openNav();
})

$('#display').click(function() {
    $('#players').show();
    $('#display').hide();
})

$('.addTeam').click(function() {
    $('#myPlayers').append($('span').text());
})

$('#searchBox').submit(function() {
    console.log('hello');
});