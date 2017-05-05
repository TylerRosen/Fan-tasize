/* Set the width of the side navigation to 250px and the right margin of the page content to 250px */
function openNav() {
    $("#mySidenav").css({
        "width": '300',
        "border-style": "solid",
        "border-color": "black"
    });
    $(".container").css({ marginRight: '450px' });
    $("#main").css({ marginRight: '320px' });
    $("#arrow").css({ marginRight: '267px' });
}

/* Set the width of the side navigation to 0 and the right margin of the page content to 0 */
function closeNav() {
    $("#mySidenav").css({ "width": '0', "border": "none" });
    $("#main").css({ marginRight: '0' });
    $(".container").css({ margin: '0 auto' });
    $("#arrow").css({ marginRight: '-32px' });
}


// Opens sidebar when arrow is clicked
$('i.fa.fa-angle-double-left ').click(function() {
    openNav();
})

// Appends player to sidebar

$('.add').click(function() {

})