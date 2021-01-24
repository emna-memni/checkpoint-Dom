let favs = Array.from(document.querySelectorAll(".fa-heart"));
let del = Array.from(document.querySelectorAll(".fa-trash-alt"));
let cards = Array.from(document.querySelectorAll(".card"));
let pluss = Array.from(document.querySelectorAll(".fa-plus-square"));
let minuss = Array.from(document.querySelectorAll(".fa-minus-square"));
let qtes =document.querySelectorAll.from((".qte"));
let unitprices =document.querySelectorAll.from((".unit-price"));
let totalprice =document.querySelectorAll.from((".text-part"));





//favourites part
console.log(favs)
for(let fav of favs) {
    fav.addEventListener("click",function() {
        if (fav.style.color==="black")
        fav.style.color="red"
        else {
        fav.style.color="black"}
     })
    }


//delete button
for(let i in del){
    del[i].addEventListener("click",function(){
        cards[i].remove() 
        total()  

    })
}


//quantities part
    for( let plusss of pluss) {
    plusss.addEventListener("click",function() {
        plusss.nextElementSibling.innerHTML++
        total() 
  })
}
//
for( let minusss of minuss){
    minusss.addEventListener("click",function(){
        minusss.previousElementSibling.innerHTML>0 ?  minusss.previousElementSibling.innerHTML-- : null
       minusss.previousElementSibling.innerHTML--
       total() 
})
}
//total price
function total() {
    let s=0;
    for(let i  in unitprices)
s=s+ Number (unitprices[i].innerHTML) * Number(qte[i].innerHTML)
}
totalprice.innerHTML=s

return totalprice.innerHTML

