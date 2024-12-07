let saved = [];
function $scope(varName){
	let elem = document.getElementById(varName);
  let update = `()=>{return ${varName};}`;
  let func = eval(update);
  elem.innerHTML = func();
  saved.push([elem,func])
}
function $$render(){
	for(let i=0;i<saved.length;i++){
  	saved[i][0].innerHTML = saved[i][1]();
  }
}

function $(stuff){
	eval(stuff);
  $$render();
}
