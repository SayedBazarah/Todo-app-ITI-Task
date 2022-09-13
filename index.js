
//variables
let tasksList = []


let tasks = document.getElementById("tasks-list");
let tasksSlug = tasks.childNodes[1]
let completedTasks = document.getElementById("completed")

//add New Task
function addNewItem() {
    let title = document.getElementById("title")
    let dateInput = document.getElementById("date")

    let date =  dateInput.value.replace(/-/g, "/") || "Not set"
    let id = `id${Math.random().toString(16).slice(2)}n${Math.random().toString(16).slice(2)}`

    if(title.value.trim() != ""){
        let task = {
            id: id,
            title: title.value,
            date: date,
            completed: false
        }
        tasksList.push(task)
        addTask(task)
    }
    IDcounter++
}

//Add Completed Tasks
function completedTask(){
    completedTasks.innerHTML = ""
    tasksList.map(({id,title,date,completed})=>{
        if(completed == false) return
        let element = document.createElement('div')
        element.classList.add("task-item")
        element.classList.add("completed-task")
        element.setAttribute("id",id)
        element.innerHTML = `
        <div>
            <button onclick="deleteTask('${id}')">Delete</button>
            <p>${title}</p>
        </div>
        <div>
            <img src="/assets/calendar.png" alt='calender icon' />
            <p>${date}</p>
        </div>
        `
        completedTasks.append(element)
    })
    
}
//Add New Tasks
function addTask({id,title,date,completed}){
    if(id == 0) tasksSlug.remove()
    if(completed == true) return

    let element = document.createElement('div')
    element.classList.add("task-item")
    element.setAttribute("id",id)
    element.innerHTML = `
    <div>
        <button onclick="changeStatus('${id}')">Done</button>
        <p>${title}</p>
    </div>
    <div>
        <img src="/assets/calendar.png" alt='calender icon' />
        <p>${date}</p>
    </div>
    `
    tasks.append(element)
}

//Edit
function editTask(){

}
//change Status
function changeStatus(key){
    let index = 0
    tasksList.map(({id},i) => {
        if(key == id)
        { 
            index = i;
            return
        }
    })
    tasksList[index].completed = true
    document.getElementById(key).remove();
    completedTask()
}
//Delete
function deleteTask(key){
    let task = 0
    tasksList.map(({id},i) => {
        console.log(i)
        if(key == id)
        { 
            task = i;
            return
        }
    })
    tasksList.pop(task)

    completedTask();
}
