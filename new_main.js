// const bullet = document.createElement('div');
let mainSection;
let timerId

function mainClick(){
    
    const mainSection = document.getElementById('mouseClick');
    mainSection.addEventListener('click', showDiv)
    console.log(mainSection)
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
function playPause() { 


    
const myVideo = document.getElementById('video')


    
    if (myVideo.paused) {
        // myVideo.setAttribute('style', 'width: 50vh')
        myVideo.classList.toggle('expanded')
        myVideo.play();

    }
    //   myVideo.play(); 
    else {
        // myVideo.setAttribute('style', 'width: 20vh' );
        myVideo.classList.toggle('expanded')
        myVideo.pause(); 
    }
      
  } 

