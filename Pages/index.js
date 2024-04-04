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
