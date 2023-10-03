const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
       // markers: true,
    }
})

tl.to("#fanta",
{
    top:"110%",
    left:"5%",
    
},'orange')

tl.to("#orange-cut",
{
    top:"103%",
    left:"27%",
},'orange')




tl.to("#leaf2",
{
    width:"17%",
    top:"140%",
    left:"2%",
    rotate:"-60deg",
},'orange')

tl.to("#leaf",
{
    top:"105%",
    left:"80%",
   
},'orange')

tl.to("#orange",
{
    top:"165%",
    left:"80%",
   
},'orange')


const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
        markers: false,
    }
},'ca')

tl2.from(".lemon1",{

    rotate:"50%",
    left:"-48%",
    top:"124%",
},'ca')


tl2.from("#pepsi",{

    rotate:"-50%",
    // left:"13%",
    top:"100%",
},'ca')



tl2.from(".lemon",{

    rotate:"50%",
    left:"48%",
    top:"124%",
},'ca')


tl2.from("#cocacola",{

    rotate:"50%",
    // left:"13%",
    top:"100%",
},'ca')

tl2.to("#orange-cut",{

    rotate:"50%",
    left:"40%",
    width:"20vw",
    top:"200%",
},'ca')


tl2.to("#fanta",{
    width:"35vw",
    left:"32%",
    top:"217%",
},'ca')

