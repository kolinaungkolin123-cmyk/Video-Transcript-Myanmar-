(function(){
var K="ox_api",u="";
try{u=localStorage.getItem(K)||""}catch(e){}
try{
var x=new XMLHttpRequest();
x.open("GET","https://api.github.com/repos/kolinaungkolin123-cmyk/Video-Transcript-Myanmar-/contents/url.txt?ref=main&t="+Date.now(),false);
x.setRequestHeader("Accept","application/vnd.github.raw+json");
x.send();
if(x.status==200){var t=(x.responseText||"").trim();
if(/^https:\/\/[a-z0-9-]+\.trycloudflare\.com$/.test(t)){u=t;try{localStorage.setItem(K,t)}catch(e){}}}
}catch(e){}
window.CFG={API:u};
})();
