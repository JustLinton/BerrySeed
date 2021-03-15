var rawnum = document.getElementById('num1').value;
var rawname = document.getElementById('name1').value;

function getinfo(){
  
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
    i=i-201900302000+5;
}else{
    document.getElementById('statholder').innerHTML ='kk' ;
}

console.log(i);

nn=0;
mm=0;
var maxarr = new Array(56);


function indexDemo(result){
    document.getElementById('boxnameholder').innerHTML =result.stu1[i].name;
    document.getElementById('snumholder').innerHTML =result.stu1[i].snumber;
    document.getElementById('numholder').innerHTML =result.stu1[i].number;
    document.getElementById('nameholder').innerHTML =result.stu1[i].name;
    document.getElementById('scoreholder').innerHTML =result.stu1[i].score;
    document.getElementById('seedholder').innerHTML =result.stu1[i].seed;
    document.getElementById('smaxholder').innerHTML =result.general.seedmax;

    //获得种子总数
    for(m=0;m<=55;m++){

        nn+=parseInt(result.stu1[m].seed);
    }
    console.log(nn);
    //end


    //获得树莓总数
    for(m=0;m<=55;m++){

        mm+=parseInt(result.stu1[m].score);
    }
    console.log(mm);
    //end

     //填充数组
     for(m=0;m<=55;m++){

        maxarr[m]=result.stu1[m];
    }
    for(m=0;m<=55;m++){

        maxarr[m].seed=parseInt(maxarr[m].seed);
        maxarr[m].score=parseInt(maxarr[m].score);
    }
    console.log(maxarr[0]);
    //end   


  }

var boxname = document.getElementById('boxnameholder').innerHTML;
if(boxname==rawname){
    document.getElementById('snum2').innerHTML =document.getElementById('snumholder').innerHTML;
    document.getElementById('snum').innerHTML =document.getElementById('snumholder').innerHTML;
    document.getElementById('num').innerHTML = document.getElementById('seedholder').innerHTML;
    document.getElementById('name').innerHTML =document.getElementById('nameholder').innerHTML;
    document.getElementById('score').innerHTML =document.getElementById('scoreholder').innerHTML ;
}else{
    console.log('notok');
}


/*maxarr.sort(function(a,b){
    if(a.seed === b.seed ||a.score === b.score){//如果id相同，按照age的降序
        return b.name - a.name
    }else {
        return a.seed - b.seed
    }
})*/








