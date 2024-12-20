// $(); // typowy sposób wywoływania funkcji
// jQuery(); // gdy jest w konflikcie z innymi technologiami

$(document).ready(function () {

    console.log($);

    console.log($('h1'));

    $('h1').css('color', 'red').hide(1000).show(3000);

});

$(function(){
    console.log('Skrócony zapis document ready w jQuery')
});



