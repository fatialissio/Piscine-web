$(document).ready(function() {
    loadTasks();

    $("#newTask").click(function() {
        addTask();
    });

});

function addTask() {
    let text = prompt("Escribe tu nueva tarea:");

    if (text === null || text.trim() === "") {
        return;
    }

    createTask(text);
    saveTasks();
    }

function createTask(text) {
    let task = $("<div></div>").css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    margin: "5px 0",
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: "#f8f8f8",
    width: "300px"
    });

    let content = $("<span></span>").text(text);  
    let del = $("<span></span>").text("✖").addClass("deleteBtn").css({
        cursor: "pointer",
        color: "red",
        fontWeight: "bold",
        marginLeft: "10px"
    })


    del.click(function() {
        removeTask(task);
    });

    
    task.append(content, del);
    $("#ft_list").prepend(task);

    let list = document.getElementById("ft_list");
    list.insertBefore(task, list.firstChild);
}

function removeTask(task) {
    if (confirm("¿Quieres eliminar esta tarea?")) {
        task.remove();
        saveTasks();
    }
}

function saveTasks() {
    let tasks = [];

    $("#ft_list").children().each(function () {
        tasks.push($(this).children().first().text());
    });

    document.cookie = "tasks=" + JSON.stringify(tasks) + "; path=/";
    }


function loadTasks() {
    let cookies = document.cookie.split(";");

    $.each(cookies, function(_, c) {
        let parts = c.trim().split("=");
        let name = parts[0];
        let value = parts[1];
    

        if (name === "tasks") {
            let tasks = JSON.parse(value);

            $.each(tasks, function(_,t) {
                createTask(t);
            });
        }
    });
}
