const head= document.querySelector('header');
// const header = document.firstItem.parentElement;
console.log(head);//header with all items

const section = document.head.nextElementSibling.children;
console.log(section);// all the sections in div with all the 

const curr = document.section.getElementsByClassName('current');
console.log(curr);// section labeled current section 2 highlighted

const afterCur = curr.nextElementSibling;
console.log(afterCur)// section after current with section 2

const h2 = curr.previousElementSibling.children;
console.log(h2);// should log the first section with the h2

const highlight = section.children.getElementsByClassName('highlight');
console.log(highlight)//get the section with h2 with highlight

const allH2 = section.children.querySelector('h2');
console.log(allH2);// all the h2 tags