function $set(e){return setTimeout(()=>{$$render()},0),e}let saved=[];function $scope(e,n){saved.push([e,document.getElementById(n)]);for(let t=0;t<saved.length;t++)saved[t][1].innerHTML=saved[t][0]()}