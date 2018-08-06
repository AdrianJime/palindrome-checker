function palindrome(str) {
  let newStr = str.replace(/\W|_|-/g,"");
  let newerStr = newStr.toLowerCase();
  let newArr = [];
  let newerArr = [];
  for(let i=0;i<newStr.length;i++){
    newArr.push(newStr[i].toLowerCase());
    //console.log(newStr[i].toLowerCase());
  }
  for(let i=0;i<str.length;i++){
    newerArr.push(newArr.pop());
  }
  let strin = newerArr.toString();
  let stri = strin.replace(/,/g,"");
  console.log(stri);
  if(stri===newerStr){
    return true;
  }else{
    return false;
  }
  //console.log(newArr);
  //console.log(newerArr);
}




palindrome("eye");