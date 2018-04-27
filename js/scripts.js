function drawTree(a){
 for(var i=0; i<a; i++){
 var star = "";
 for(var j=0; j<i; j++){
	star += "*";
}
   console.log(star);
 }
  
}

var a = prompt("Wysokość choinki");
drawTree(a);
