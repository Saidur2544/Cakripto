$(function() {
    
$(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});
});

$(function(){
    $('.selectpicker').selectpicker();
});

var navButton = document.getElementById('nav-button');
console.log(navButton)
    navButton.addEventListener('click',function(){
    var country = document.getElementById('country');
    console.log(country)
    country.classList.toggle("active");
});
