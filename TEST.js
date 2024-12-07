const getValue = (updated) =>{
	/* console.log(updated) */
}
let bounds = []
const bind = (what,ifarr=undefined) =>{
	bounds.push([what,ifarr])
  rebound()
}
const rebound = () => {
	for(let i=0;i<bounds.length;i++){
  	rebind(bounds[i][0],bounds[i][1])
  }
}
const rebind = (what,ifarr=undefined) =>{
	let elem = document.getElementById(what);
 	if(ifarr != undefined){
  	for(let q=0;q<Object.keys(state).length;q++){
    	if(Object.keys(state)[q] == what){
      	elem.innerHTML = state[Object.keys(state)[q]][ifarr]
      }
    }
  }
  else{
    for(let q=0;q<Object.keys(state).length;q++){
    	if(Object.keys(state)[q] == what){
      	elem.innerHTML = state[Object.keys(state)[q]]
      }
    }
  }
}
let state = new Proxy({},{
	set(target,property,value){
    target[property] = value;
    rebound()
    return true;
  }
})


state.count = 0
bind("count");
function add(){
	state.count++
}

/* for(let i=0;) */
