const days=document.querySelector('#days');
const hours=document.querySelector('#hours');
const minutes= document.querySelector('#minutes');
const seconds=document.querySelector('#seconds');


function time(){
    const curyear=new Date().getFullYear();
// console.log(curyear);
const newyear=new Date(`January 1 ${curyear+1} 00:00:00`);
// console.log(newyear);
const curdate=new Date();
// console.log(curdate);
const dif=newyear-curdate;
const d=Math.floor(dif/1000/60/60/24);
// console.log(d);
const h=Math.floor((dif/1000/60/60)%24);
// console.log(h);
const m=Math.floor((dif/1000/60)%60);
// console.log(m);
const s=Math.floor((dif/1000)%60);
// console.log(s);


// console.log(d+" "+h+" "+m+" "+s);

days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;

}
setInterval(time,1000);