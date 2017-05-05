/* Set the width of the side navigation to 250px and the right margin of the page content to 250px */
function openNav() {
    $("#mySidenav").css({
        "width": '336',
        "border-style": "solid",
        "border-color": "grey"
    });
    $(".container").css({ marginRight: '450px' });
    $("#main").css({ marginRight: '350px' });
    $("#arrow").css({ marginRight: '297px' });
}

/* Set the width of the side navigation to 0 and the right margin of the page content to 0 */
function closeNav() {
    $("#mySidenav").width(0);
    $("#main").css({ marginRight: '0' });
    $(".container").css({ margin: '0 auto' });
    $("#arrow").css({ marginRight: '-32px' });
}

$('i.fa.fa-angle-double-left ').click(function() {
    openNav();
})

// $('#display').click(function() {
//     $('#players').show();
//     $('#display').hide();
// })

$('.addTeam').click(function() {
    $('#myPlayers').append($('li').text());
})

// $('#searchBox').submit(function() {
//     console.log('hello');
// });