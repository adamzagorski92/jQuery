$(document).ready(function(){
    const fifthItem =$('.list-item').eq(4);
    console.log(fifthItem);

    const firstItem = $('.list-item').first();
    console.log(firstItem);

    const lastItem = $('.list-item').last();
    console.log(lastItem);

    const paragraphNoDescription = $('p').not('.description');
    console.log(paragraphNoDescription);

    const  linksInSection = $('section').find('a');
    console.log(linksInSection);
})