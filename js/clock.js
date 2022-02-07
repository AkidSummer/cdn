// build time:Mon Feb 07 2022 13:45:51 GMT+0800 (GMT+08:00)
function t(){const t=new Date;const e=t.getHours();const o=t.getMinutes();const n=t.getSeconds();document.getElementById("clock").innerText=Math.floor(e/10)+(e%10+":")+Math.floor(o/10)+o%10+":"+Math.floor(n/10)+n%10}t();setInterval(t,1e3);
//rebuild by hrmmi 