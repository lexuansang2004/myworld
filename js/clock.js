function hideClock() {
    $(".clockcat").hide();
}
$(document).ready(function() {
    hideClock();
    
    setTimeout(function() {
        $(".clockcat").fadeIn(500);
    }, 100000);
});
