



//  Attach FastClick to remove the 300ms delay on sites where 
//  drag or long-touch detection is not needed: https://ftlabs.github.io/fastclick/
$(function() {
    FastClick.attach(document.body);
});
// OR, if no jQuery:   
// window.addEventListener('load', function() {
//     new FastClick(document.body);
// }, false);


 