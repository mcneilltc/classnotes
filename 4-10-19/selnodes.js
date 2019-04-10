const head= document.querySelector('header');
// const header = document.firstItem.parentElement;
console.log(head);//header with all items

const section = head.nextElementSibling.querySelector('col');
console.log(section);//sections in div with all the headers

const curr = section.querySelector('current');
console.log(curr);// section labeled current section 2 highlighted

const afterCur = curr.nextElementSibling;
console.log(afterCur)// section after current with section 2

const h2 = curr.previousElementSibling.children;
console.log(h2);// should log section 1

const highlight = section.children.querySelector('highlight');
console.log(highlight)//get the section with h2 with highlight

const allH2 = section.children.querySelector('h2');
console.log(allH2);// all the h2 tags