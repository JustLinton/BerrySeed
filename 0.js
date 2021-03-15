var rawnum = document.getElementById('num1').value;
var rawname = document.getElementById('name1').value;

function getinfo(){
   alert(rawnum);
}

i=parseInt(rawnum);
if(i>=201900302001&&i<=201900302022){
    i=i-201900302000+5;
}else if(i==201800202001){
    i=0;
}else if(i==201800202056){
    i=1;
}else if(i==201800220020){
    i=2;
}else if(i==201800250001){
    i=3;
}else if(i==201800250006){
    i=4;
}else if(i==201800260028){
    i=5;
}else if(i>=201900302023&&i<=201900302050){
    alert('ok..')
}else{
    alert('error.')
}

alert(i);


function indexDemo(result){
    document.getElementById('boxnameholder').innerHTML =result.stu1[i].name;
    document.getElementById('snumholder').innerHTML =result.stu1[i].snumber;
    document.getElementById('numholder').innerHTML =result.stu1[i].number;
    document.getElementById('nameholder').innerHTML =result.stu1[i].name;
    document.getElementById('scoreholder').innerHTML =result.stu1[i].score;
  }

var boxname = document.getElementById('boxnameholder').innerHTML;
if(boxname==rawname){
    document.getElementById('snum').innerHTML =document.getElementById('snumholder').innerHTML;
    document.getElementById('num').innerHTML = document.getElementById('numholder').innerHTML;
    document.getElementById('name').innerHTML =document.getElementById('nameholder').innerHTML;
    document.getElementById('score').innerHTML =document.getElementById('scoreholder').innerHTML ;
}else{
    alert('error 4502.')
}