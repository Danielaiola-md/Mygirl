let btn = document.getElementById('button')
let cbtn = document.getElementById('btn')
let content = document.getElementById('content')
btn.addEventListener('click', () => {
    content.style.visibility = 'visible'
})
cbtn.addEventListener("click", () => {
  content.style.visibility = "hidden";
});
