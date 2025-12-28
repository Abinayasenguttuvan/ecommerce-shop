
document.querySelectorAll('.hover-slider img').forEach(img=>{
  img.addEventListener('mouseenter',()=>{
    heroTitle.innerText=img.dataset.title;
    heroText.innerText=img.dataset.text;
  });
});



let text="BUY LIKE NEW ITEMS AT LOWEST PRICE";
let i=0;
setInterval(()=>{
  typing.innerText=text.slice(0,i++);
  if(i>text.length)i=0;
},120);


