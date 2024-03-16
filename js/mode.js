const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')
const modeLoc=localStorage.getItem('mode')

if (modeLoc) {
    body.classList.add('dark-mode')
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
 }

 const toggleMode=()=>{
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
    body.classList.toggle('dark-mode')
    body.classList.toggle('light-mode')
 }

 darkBtn.addEventListener('click',()=>{
    toggleMode()
    localStorage.setItem('mode','darkMode')
 })
 lightBtn.addEventListener('click',()=>{
    toggleMode()
    localStorage.setItem('mode','')

 })