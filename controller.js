
         
function AddTask(){
 const tasklist = document.getElementById("tasklist")
        
    let newtask = document.createElement("li");
    
 newtask.textContent = document.getElementById("Tasktext").value;
 tasklist.appendChild(newtask);

//  to mark a task as done
 newtask.addEventListener('click', function(){
     newtask.style.textDecoration = "line-through"
 })

//  to delete a task
 newtask.addEventListener('dblclick', function(){
     tasklist.removeChild(newtask);
 })
 
 

}          
// totally clear the list
function Clearlist(){
    const tasklist = document.getElementById("tasklist");
    tasklist.innerHTML=''
}


