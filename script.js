// I  need to  get the current  position if the mouse  every times it moved between x and y axis

// I need to set the x and y axis in circular div

// every time mouse moved we should get notified = mouse move listener
// every time get listner get notified we need to get the values
// for x and y axis and then update it into the x and y axis


let circle= document.querySelector('#circle')
const btn= document.querySelector('#btn')
const svgelem=document.querySelector('svg')
var sr=gsap.timeline();

window.addEventListener('mousemove',function(details){
let xValue=details.clientX;
let yValue=details.clientY;

circle.style.top =yValue+'px';
circle.style.left = `${xValue}px `;


})

btn.addEventListener('click',function(){
    sr.reverse();
    setTimeout(function(){
        svgelem.classList.add('animate');
    },4000
    )

});












sr
.from('#wrapper',{
    duration:3,
    scale:0.7,
    ease:'Expo.easeInOut',
    opacity:0
})
.from('#whitestrip',{
    duration:1.7,
    width:0,
    ease:'Expo.easeInOut',
    
},'-=2')
.from('#blackcard',{
    duration:2,
    x:50,

    ease:'Expo.easeInOut',
    opacity:0
    
},'-=1')
.from('#lineelem',{
    duration:1.5,
    x:50,

    ease:'Expo.easeInOut',
    opacity:0
    
},'-=1')
.from('#lineelem .line',{
    duration:2,
    with:0,

    ease:'Expo.easeInOut',
    opacity:0
    
},'-=1')

.from('#blackcard p',{
    duration:1.2,
    y:30,

    ease:'Expo.easeInOut',
    opacity:0
    
},'-=2')
.from('#sidelem',{
    duration:2,
    x:30,

    ease:'Expo.easeInOut',
    opacity:0
    
},'-=2')
