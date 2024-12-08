function $set(n){return setTimeout(()=>{r()},0),n}let s=[];function $scope(n,e){s.push([n,document.getElementById(e)]),r()}function r(){for(let n=0;n<s.length;n++)s[n][1].innerHTML=s[n][0]()}
