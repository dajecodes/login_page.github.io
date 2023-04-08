const bodyElement=document.body;
const point=document.getElementById('point');

bodyElement.addEventListener("mousemove",(event)=>{
    const x=event.pageX;
    const y=event.pageY;
    point.style.setProperty('--xp',x+"px");
    point.style.setProperty('--yp',y+"px");
    // console.log(x,y);
});