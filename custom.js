$(document).ready(function () {
   $("#liAbout").click(function () {
       document.getElementById("about").scrollIntoView({behavior: "smooth" ,block: "end", inline: "nearest"});
       $(this).addClass("active");
       $("#liContact").removeClass("active");
       $("#liPortfolio").removeClass("active");
   });
    $("#liPortfolio").click(function () {
        document.getElementById("portfolio").scrollIntoView({behavior: "smooth" ,block: "center", inline: "nearest"});
        $(this).addClass("active");
        $("#liContact").removeClass("active");
        $("#liAbout").removeClass("active");
    });
    $("#liContact").click(function () {
        document.getElementById("contact").scrollIntoView({behavior: "smooth" ,block: "start", inline: "nearest"});
        $(this).addClass("active");
        $("#liAbout").removeClass("active");
        $("#liPortfolio").removeClass("active");
    });
});