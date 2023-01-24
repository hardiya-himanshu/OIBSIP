const form = document.querySelector("#add_task_form");
const input = document.querySelector("#add_task_input");
const tasks_division = document.querySelector("#tasks");

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const task = input.value;

	const task_division = document.createElement('div');
	task_division.classList.add('task');

	const task_name_division = document.createElement('div');
	task_name_division.classList.add('task_name');

	task_division.appendChild(task_name_division);

	const task_input = document.createElement('input');
	task_input.classList.add('text');
	task_input.type = 'text';
	task_input.value = task;
	task_input.setAttribute('readonly', 'readonly');

	task_name_division.appendChild(task_input);

	const task_buttons = document.createElement('div');
	task_buttons.classList.add('buttons');
		
	const task_complete_button = document.createElement('button');
	const task_complete = document.createElement('span');
	task_complete_button.appendChild(task_complete);
	task_complete.classList.add('tick');
	task_complete.innerHTML = '&#10003';

	const task_edit = document.createElement('button');
	task_edit.classList.add('edit');
	task_edit.innerText = 'Edit';

	const task_delete = document.createElement('button');
	task_delete.classList.add('delete');
	task_delete.innerText = 'Delete';

	task_buttons.appendChild(task_complete_button);
	task_buttons.appendChild(task_edit);
	task_buttons.appendChild(task_delete);
	task_division.appendChild(task_buttons);
	tasks_division.appendChild(task_division);

	input.value = '';

	task_edit.addEventListener('click', (e) => {
		if (task_edit.innerText.toLowerCase() == "edit") {
			task_edit.innerText = "Save";
			task_input.removeAttribute("readonly");
			task_input.focus();
			} 
		else {
			task_edit.innerText = "Edit";
			task_input.setAttribute("readonly", "readonly");
			}
	});

	task_delete.addEventListener('click', (e) => {
		tasks_division.removeChild(task_division);
	});

	task_complete_button.addEventListener("click", (e) =>{
		task_complete.classList.toggle("tick2");
		task_division.classList.toggle("task_complete");
	})
});