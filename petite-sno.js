let saved = [];
function $scope(varName){
	let elem = document.getElementById(varName);
  let update = `()=>{return ${varName};}`;
  elem.innerHTML = eval(update)();
  saved.push([elem,eval(update)])
}

function $(stuff){
	eval(stuff);
  for(let i=0;i<saved.length;i++){
  	saved[i][0].innerHTML = saved[i][1]();
  }
}
