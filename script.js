function readJSON(path, callback){
  var xhttp=new XMLHttpRequest();
  xhttp.open("GET", path,true);
  xhttp.onreadystatechange=function(){
    if(xhttp.readyState==4 && xhttp.status==200){
      callback(xhttp.responseText);
    }
  }
  xhttp.send();
}


