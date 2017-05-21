/* Set the width of the side navigation to 250px and the right margin of the page content to 250px */
function openNav() {
    $("#mySidenav").css({
        width: "300",
        "border-style": "solid",
        "border-color": "black"
    });
    $(".container").css({ marginRight: "450px" });
    $("#main").css({ marginRight: "320px", transition: "0.5s" });
    $("#arrow").css({ marginRight: "267px" });
    $(".page-header").css({ width: "102%" });    
}

/* Set the width of the side navigation to 0 and the right margin of the page content to 0 */
function closeNav() {
    $("#mySidenav").css({ width: "0", border: "none" });
    $("#main").css({ marginRight: "0", transition: "0.5s" });
    $(".container").css({ margin: "0 auto" });
    $("#arrow").css({ marginRight: "-32px" });
    $(".page-header").css({ width: "100%" });
}

// Opens sidebar when arrow is clicked
$("i.fa.fa-angle-double-left ").click(function() {
    openNav();
});

// Appends player to sidebar

$(".add").click(function() {});

$(".player-form").on("submit", function(event) {
    event.preventDefault();
    var playerObject = {
        id: $(this).attr("data-player"),
        type: $(this).attr("data-type"),
        name: $(this).attr("data-player-name")
    };

    $.post("/add-player", playerObject)
        .then(function(res) {
            var player = $("<li>");
            player.text(playerObject.name);
            var type = $("<li>");
            type.text(playerObject.type);
            $("#myPlayers").append(player);
            $("#myPlayers").append(type);
        });
});