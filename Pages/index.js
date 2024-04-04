const list = document.getElementsByClassName("list-responsive");

const bars = document.getElementById("bars");

bars.addEventListener("click",()=>{
    if(list[0].style.visibility=="visible"){
        list[0].style.visibility="hidden";
    }
    else{
        bars.style.zIndex="3"
        list[0].style.visibility="visible";
    }
})

let bg = document.getElementsByClassName("background")[0];
bg.addEventListener('mouseover',()=>{
    console.log("dsgr")
})




// for (let i = 0; i < card.length; i++) {
//     card[i].addEventListener('mouseover',(i)=>{
       
//     });
// }

document.getElementById("about001").scrollIntoView();