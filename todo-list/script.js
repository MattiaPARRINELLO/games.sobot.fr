window.addEventListener('load', () => { //when the page is loaded
    const form = document.querySelector("#new-task-form"); //get the form
    const input = document.querySelector("#new-task-input"); //get the input
    const list_el = document.querySelector("#tasks"); //get the list

    form.addEventListener('submit', (e) => { //when the form is submitted
        e.preventDefault(); //prevent the default action
        const task = document.getElementById("new-task-input").value; //get the value of the input

        if (task === "") { //if the input is empty
            document.getElementById("new-task-input").placeholder = "Please enter a task"; //set the placeholder to "Please enter a task"
        } else { //if the input is not empty
            const task_el = document.createElement('div'); //create a div
            task_el.classList.add('task'); //add the class task to the div

            const task_content_el = document.createElement('div'); //create a div
            task_content_el.classList.add('content'); //add the class content to the div
            task_el.appendChild(task_content_el); //append the div to the div

            const task_input_el = document.createElement('input'); //create an input
            task_input_el.classList.add('text'); //add the class text to the input
            task_input_el.type = 'text'; //set the type to text
            task_input_el.value = task; //set the value to the task
            task_input_el.setAttribute('readonly', 'readonly'); //set the readonly attribute to readonly
            task_content_el.appendChild(task_input_el); //append the input to the div

            const task_actions_el = document.createElement('div'); //create a div
            task_actions_el.classList.add('actions'); //add the class actions to the div

            const task_edit_el = document.createElement('button'); //create a button
            task_edit_el.classList.add('edit'); //add the class edit to the button
            task_edit_el.innerText = 'Edit'; //set the text to "Edit"

            const task_delete_el = document.createElement('button'); //create a button
            task_delete_el.classList.add('delete'); //add the class delete to the button
            task_delete_el.innerText = 'Delete'; //set the text to "Delete"

            task_actions_el.appendChild(task_edit_el); //append the button to the div
            task_actions_el.appendChild(task_delete_el); //append the button to the div
            task_el.appendChild(task_actions_el); //append the div to the div
            list_el.appendChild(task_el); //append the div to the list

            input.value = ''; //clear the input

            task_edit_el.addEventListener('click', (e) => { //when the edit button is clicked

                if (task_edit_el.innerText.toLowerCase() == "edit") { //if the text is "Edit"
                    task_edit_el.innerText = "Save"; //set the text to "Save"
                    task_input_el.removeAttribute("readonly"); //remove the readonly attribute
                    task_input_el.focus(); //focus the input
                } else { //if the text is "Save"
                    task_edit_el.innerText = "Edit"; //set the text to "Edit"
                    task_input_el.setAttribute("readonly", "readonly"); //set the readonly attribute to readonly
                }
            });
            
            task_delete_el.addEventListener('click', (e) => { //when the delete button is clicked
                list_el.removeChild(task_el); //remove the task from the list
            });
        }
    });
});