const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstPage(){
    let tl = gsap.timeline();

    tl.from("#nav",{
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelement",{
        y:0,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay:-1,
        stagger: .2       
    })
   .from("#herofooter",{
        y:10,
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease: Expo.easeInOut
   })
}
 
function mousePointerFollower(){
  
    window.addEventListener("mousemove", (e)=>{
        document.querySelector('#mincircle').style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })

}

function mousePointerSkew(){

}

mousePointerFollower();
firstPage();
