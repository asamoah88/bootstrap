const child = document.getElementById('child');
let counter = 10;
setInterval(function(){
    counter = counter + 10;
    child.style.width = counter+'%';
}, 1000);