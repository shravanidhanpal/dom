console.dir(document);
console.log(document.domain);
console.log(document.doctype);
console.log(document.body);
console.log(document.all[10]);
console.log(document.all);
console.log(document.forms);

var ht=document.getElementById('header-title');
console.log(ht);
ht.textContent=('Title');
//ht.innerText=('hello');
console.log(ht.innerText);
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px black';
console.log(document.all);
var ti=document.getElementById('title');
ti.style.fontWeight= 'bold';
ti.style.color='green';