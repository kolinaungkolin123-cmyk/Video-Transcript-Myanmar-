(function(){
var K="ox_api",u="";
try{
var m=(location.hash||"").match(/api=(https:\/\/[a-z0-9-]+\.trycloudflare\.com)/);
if(m){u=m[1];localStorage.setItem(K,u);history.replaceState(null,"",location.pathname+location.search)}
else u=localStorage.getItem(K)||"";
}catch(e){}
window.CFG={API:u};
})();
