fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(Response=>Response.json())
  .then(data=>{console.log(data)
    const res=data;
    
  document.getElementById("us").innerHTML=res.userId;
  document.getElementById("id").innerHTML=res.id;
  document.getElementById("tit").innerHTML=res.title;
  document.getElementById("co").innerHTML=res.completed;
})