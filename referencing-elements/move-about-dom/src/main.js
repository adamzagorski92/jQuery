$(document).ready(function(){
   const linkParents = $('a').parent();
   console.log(linkParents);

   const sectionChildren = $('section').children();
   console.log(sectionChildren);

   const elementAfterDescription = $('.description').next();
   console.log(elementAfterDescription);

   const elementBeforeDescription = $('.description').prev();
   console.log(elementBeforeDescription);
})