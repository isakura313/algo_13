const btn = document.querySelector('button');
const wrapper = document.getElementById("wrapper")
btn.onclick = () =>{
    // wrapper.style.display = "none";
    wrapper.style.backgroundColor = "red";
    wrapper.draggable = true;
    btn.textContent = "А теперь я поменялся!"
}
