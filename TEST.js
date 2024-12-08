let bounds = []
const rebound = () => {
	for(let i=0;i<bounds.length;i++){
  	rebind(bounds[i]);
  }
}
const rebind = (what) =>{
	let elem = document.getElementsByClassName(what);
  for(let i=0;i<elem.length;i++){
    for(let q=0;q<Object.keys(state).length;q++){
      if(Object.keys(state)[q] == what){
        elem[i].innerHTML = state[Object.keys(state)[q]]
      }
    }
  }
}
let state = new Proxy({},{
	set(target,property,value){
    bounds.push(property)
    target[property] = value;
    rebound()
    return true;
  }
})
