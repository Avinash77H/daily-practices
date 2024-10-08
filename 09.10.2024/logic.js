function loadData(){
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
      console.log(this.responseText)
      // document.querySelector('#demo').innerHTML = this.responseText;
    }
    else if(this.readyState === 4 && this.status === 404){
      document.querySelector('#demo').innerHTML = "File not Found";
    }
  }

  xhttp.open('GET',"https://dummyjson.com/products",true)
  xhttp.send()
}