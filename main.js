fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(Response=>Response.json())
  .then(data=>{
  document.getElementById("us").innerHTML=data.userId;
  document.getElementById("id").innerHTML=data.id;
  document.getElementById("tit").innerHTML=data.title;
  document.getElementById("co").innerHTML=data.completed;
})