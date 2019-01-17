

/* Script to change the column stacking for mobile to get list on bottom of form */
$(window).resize(function () {
    console.log('resize called');
    var width = $(window).width();
    /*  log the width to find out what what pixel to change the order at.
        The dev tools in browser might be different */
    //console.log(width); 
    if (width <= 752) {
        $('.topMobile').addClass('order-first');
        $('.bottomMobile').addClass('order-last');
    } else {
        $('.topMobile').removeClass('order-first');
        $('.bottomMobile').removeClass('order-last');
    } 
})
    .resize();//trigger the resize event on page load.




// When the user clicks on the button, scroll to the top of the document
function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function () {
            if (window.scrollY != 0) {
                window.scrollBy(0, scrollStep);
            }
            else clearInterval(scrollInterval);
        }, 15);
}


 
