const bg1 = document.getElementById('bg-1')
const bg2 = document.getElementById('bg-2')
const bg3 = document.getElementById('bg-3')
console.log('a', bg1.style.top, bg2.style.top, bg3.style.top)
let wheel = 0;
let wheelMax = 0
bg1.style.objectPosition = '0% -700px'
bg2.style.objectPosition = '0% -100px'
bg3.style.objectPosition = '0% 450px'

document.addEventListener('wheel', (event) =>{
    wheel = event.deltaY/20
    // wheelMax = wheelMax + event.deltaY/20
    if(wheelMax > 100){
        wheelMax = 100
    }
    if(wheelMax < 0){
        wheelMax = 0
    }
    wheelMax = wheelMax + wheel
    if(wheelMax >= 0 && wheelMax <= 100){
        console.info(bg1.style.objectPosition.split(' '))
        let bg1Ops = bg1.style.objectPosition.split(' ')[1]
        let bg1Op = +bg1Ops.split('p')[0]
        // console.log(bg1Op)
        bg1.style.objectPosition = `0px ${wheel + bg1Op}px`
        let bg2Ops = bg2.style.objectPosition.split(' ')[1]
        let bg2Op = +bg2Ops.split('p')[0]
        // console.log(bg2Op)
        bg2.style.objectPosition = `0px ${wheel/3 + bg2Op}px`
        let bg3Ops = bg3.style.objectPosition.split(' ')[1]
        let bg3Op = +bg3Ops.split('p')[0]
        console.log(bg3Op)
        bg3.style.objectPosition = `0px ${bg3Op - wheel/4}px`
    }  
})