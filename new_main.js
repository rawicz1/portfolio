// const bullet = document.createElement('div');
let mainSection;
let timerId
function mainClick(){
    
    const mainSection = document.getElementById('mouseClick');
    mainSection.addEventListener('click', showDiv)
    
function showDiv(e){
    let x = e.clientX
    let y = e.clientY
    
    const bullet = document.createElement('div');
    bullet.classList.add('bullet')
    bullet.style.left = x + 22 +'px'
    bullet.style.top = y + 'px'
    
    mainSection.appendChild(bullet)
    
    let timeout;
    myFunction()
    function myFunction() {
    timeout = setTimeout(removeBullet, 700);
    }

    function removeBullet() {
    mainSection.removeChild(bullet)
    }     
    
};
}
//to change main photo from pixelated

// function changePhoto(){
//     console.log('hovering')
//     document.getElementById('main_image').src='./images/main_photo.png'
// }
// function backToPixel(){
//     document.getElementById('main_image').src='./images/main_photo_cubism.png'
// }

// function showDiv(e){
//     // console.log('showdiv functiopn')
//     let x = e.clientX
//     let y = e.clientY
//     console.log(e.clientX)
//     bullet.classList.add('bullet')
//     bullet.style.left = x + 'px'
//     bullet.style.top = y + 'px'
//     console.log(bullet)
//     mainSection.appendChild(bullet)
   
// }





// let x = function getXY(e){
//     let mainSection = document.getElementById('main');
//     mainSection.addEventListener('click', getX);
//     function getX(e){
//         let x = e.clientX;
//         // console.log(x)
//         return x
//     }

// }
// function showX(){
//     x()}
// console.log(x)



// block.classList.add('bullet');
