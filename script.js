const ButtonGnrt =  document.querySelector('.generate');
const content = document.querySelector('.content-name')
const selectRegion = document.querySelector('.select-region');
const selectSort = document.querySelector('.SelectSort');
const option = document.querySelector('.select');
let arr = [];
let tempArr = [];
function readTextFile(file)
{
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function ()
  {       
    arr.push( rawFile.responseText.split(","));
  }
rawFile.send(null);
}


function handleSelectSort(){
  let string = '';
  if(this.value == 'sortNameDown'){
    if(tempArr[0] != undefined){    
      const filters =  tempArr.sort((a,b)=> a > b ? 1 : -1);
      content.innerHTML = filters.map((filter,i)=>`${i+1}.${filter} <br>`).join('');
    }
  }
  if(this.value == 'sortNameUp'){
    if(tempArr[0] != undefined){
      const filters =  tempArr.sort((a,b)=> a < b ? 1 : -1);
      content.innerHTML = filters.map((filter,i)=>`${i+1}.${filter} <br>`).join('');
    }
  }
}
function filterRegion(e)
{
  if(this.value == 'Indonesia'){
    arr = [];
    readTextFile("Indonesian-name.txt"); 
  }
  if(this.value == 'Amerika'){
    arr = [];
    readTextFile("American-name.txt"); 
  }
}

function Generate_Name(){
  //clear array tidak ada penumpukan dalam temp array
  //jika tombol diklik akan mengisi tempArr tersebut
  //jika tombol dikik lagi itu akan menghapus isi tempArr dan di isi yang baru
  //jika tidak diatasi saat menampilkan tempArr , output tidak sesuai dengar harapan
  tempArr = []; 
  let number = document.querySelector('.input-loop').value;
  let string = '';
  if(number == ''){
    alert('please fill input box');
    return;
  }
  if(number>1000){
    content.innerText = 'Please Input Under 1000';
    return;
  }else{
    for(let i = 1; i<=number;i++){ 
      const randomNumber = Math.floor(Math.random()* arr[0].length);
      string += `${i} .${arr[0][randomNumber]} <br>`
      //fill array
      tempArr.push(Array.from(arr[0][randomNumber].split(",")));
   }
  }
 content.innerHTML = string; 
}
selectRegion.addEventListener('change',filterRegion);
ButtonGnrt.addEventListener('click',Generate_Name);
selectSort.addEventListener('change',handleSelectSort);

    // for(let j = 0; j<arr.length; j++){
    
    //   for(let i = 0; i<arr[j].length; i++){
    //   console.log(arr[j].length);   
    //   }
   
    // }
  
