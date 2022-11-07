// const bullet = document.createElement('div');
let mainSection;
let timerId;

window.onload = function getWidth(){
    const videoBox = document.getElementById('projects') 
    const videoTag = document.getElementsByTagName('video')
    if (videoBox.offsetWidth < 400){
        for (let i=0; i<videoTag.length; i++){
            videoTag[i].setAttribute('autoplay', true)
        }
        
        
    }
}
// getWidth()
// let videosWindow = document.getElementsByClassName('projectsHeader')
// console.log(videosWindow.length)
// if (videosWindow. < 1000){ 
//     alert('asdasdas')
//     console.log('text')}


function mainClick(){
    
    const mainSection = document.getElementById('mouseClick');
    mainSection.addEventListener('click', showDiv)
    // console.log(mainSection)
function showDiv(e){
    let x = e.clientX
    let y = e.clientY
    
    const bullet = document.createElement('div');
    bullet.classList.add('bullet')
    bullet.style.left = x + 45 +'px'
    bullet.style.top = y + 20 + 'px'
    
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
function playPause1() { 

const myVideo = document.getElementById('video1');
if (myVideo.paused) {                         
                    myVideo.classList.toggle('expanded')
                    myVideo.play();                        
                    }
else {
        myVideo.classList.toggle('expanded')
        myVideo.pause(); }
}
    
function playPause2() { 

    const myVideo = document.getElementById('video2');
    if (myVideo.paused) {                         
                        myVideo.classList.toggle('expanded')
                        myVideo.play();                        
                        }
    else {
            myVideo.classList.toggle('expanded')
            myVideo.pause(); }
    }
    function playPause3() { 

        const myVideo = document.getElementById('video3');
        if (myVideo.paused) {                         
                            myVideo.classList.toggle('expanded')
                            myVideo.play();                        
                            }
        else {
                myVideo.classList.toggle('expanded')
                myVideo.pause(); }
        }
        function playPause4() { 

            const myVideo = document.getElementById('video4');
            if (myVideo.paused) {                         
                                myVideo.classList.toggle('expanded')
                                myVideo.play();                        
                                }
            else {
                    myVideo.classList.toggle('expanded')
                    myVideo.pause(); }
            }




// const myVideos = document.getElementsByTagName('video');
// console.log(myVideos)
// for (let i = 0; i < myVideos.length; i++) {
//     if (myVideos[i].paused) {                         
//                         myVideos[i].classList.toggle('expanded')
//                         myVideos[i].play();                        
//                     }
//                     else {
//                         myVideos[i].classList.toggle('expanded')
//                         myVideos[i].pause(); 
                
//                     }}



// for (let i = 0; i < myVideos.length; i++) {
//     (function(index) {
//          myVideos[index].addEventListener("click", function() {
//             // console.log("you clicked region number " + index);
//             if (myVideos[i].paused) {
//                 // myVideo.setAttribute('style', 'width: 50vh')
//                 myVideos[i].classList.toggle('expanded')
//                 myVideos[i].play();
                
//             }
//             //   myVideo.play(); 
//             else {
//                 // myVideo.setAttribute('style', 'width: 20vh' );
//                 myVideos[i].classList.toggle('expanded')
//                 myVideos[i].pause(); 
//             }
//           })
//     })(i);
//  }


// for (let i = 0; i < myVideos.length; i++) {
    
//          myVideos[i].addEventListener("click", function() {
//             console.log("you clicked region number " + i);
//             if (myVideos[i].paused) {
//                 // myVideo.setAttribute('style', 'width: 50vh')
//                 myVideos[i].classList.toggle('expanded')
//                 myVideos[i].play();
                
//             }
//             //   myVideo.play(); 
//             else {
//                 // myVideo.setAttribute('style', 'width: 20vh' );
//                 myVideos[i].classList.toggle('expanded')
//                 myVideos[i].pause(); 
//             }
//           })
    
//  }



    
    // if (myVideos[1].paused) {
    //     // myVideo.setAttribute('style', 'width: 50vh')
    //     myVideos[1].classList.toggle('expanded')
    //     myVideos[1].play();

    // }
    // //   myVideo.play(); 
    // else {
    //     // myVideo.setAttribute('style', 'width: 20vh' );
    //     myVideos[1].classList.toggle('expanded')
    //     myVideos[1].pause(); 
    // }
      

