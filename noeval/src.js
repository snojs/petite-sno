function $set(val){
  setTimeout(()=>{$$render()},0);
  return val;
}
let saved = [];
function $scope(func,loc){
  saved.push([func,document.getElementById(loc)]);
  $$render()
}
function $$render(){
  for(let i=0;i<saved.length;i++){
    saved[i][1].innerHTML = saved[i][0]()
  }
}
