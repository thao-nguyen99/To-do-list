var lists=document.getElementsByTagName("LI");
//sua file
var i;
for (i=0; i<lists.length; i++){
 var span=document.createElement("SPAN");
 var text=document.createTextNode("X");
 span.appendChild(text);
 span.className="close";
 lists[i].appendChild(span);
 
}
var close=document.getElementsByClassName('close');
for (i=0; i<lists.length; i++){
 close[i].onclick=function(){
  this.parentElement.style.display="none";
 };
}

var input=document.getElementById('myInput');
var addBtn=document.getElementsByTagName('BUTTON');
var myList=document.getElementById('myList');
var i;
function newItem(){
 var li=document.createElement('li');
 var inputValue=input.value;
  var t=document.createTextNode(inputValue);
  li.appendChild(t);
 
 
 if (inputValue===""){
  alert('You must write something');
  return;
 } else{

  myList.appendChild(li);
 
 input.value=" ";
 
  var span=document.createElement("SPAN");
  var text=document.createTextNode("X");
  span.appendChild(text);
  span.className="close";
  li.appendChild(span);
  
 for (i=0; i<close.length; i++){
  close[i].onclick=function(){
   this.parentElement.style.display="none";
  };
 }
}
};
function inputLength(){
 return input.value.length;
}
input.addEventListener('keypress', (event)=>{
 if (inputLength()>0 && event.which ===13){
  newItem();
  
 }
});
var list=document.querySelector('ul');
list.addEventListener('click', (opt)=>{
 opt.target.classList.toggle("checked");
});
