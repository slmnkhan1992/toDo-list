const btn = document.querySelector('.inputArea button')
btn.addEventListener('click', () => {
    const userInput = document.querySelector('.inputArea input').value
    const listArea = document.querySelector('.listArea')

    const newItem = document.createElement('div')
    newItem.classList.add('project-item')
    newItem.innerHTML = `<p>${userInput}</p>
        <div class="editArea">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
        </div>
        `;

    listArea.appendChild(newItem)

    document.querySelector('.inputArea input').value = '';

    const deleteBtn = newItem.querySelector('.delete');
    deleteBtn.addEventListener('click', (e) => {
        const itemToDelete = e.target.closest('.project-item');
        if (itemToDelete) {
            itemToDelete.remove();
        }
    });

    const editBtn = newItem.querySelector('.edit');
    editBtn.addEventListener('click', (e) => {
        const itemToEdit = e.target.closest('.project-item');
        if (itemToEdit) {
            itemToEdit.remove()        
            const p = itemToEdit.querySelector('p');
            const currentText = p.textContent;
            document.querySelector('.inputArea input').value = currentText
            

        }
    });
})


// class Teacher {
//     constructor(name, age, time) {
//         this.name = name;
//         this.age = age;
//         this.time = time;
//     }

//     goodskills() {
//         console.log('i m teacher');
//     }
// }

// const teacher1 = new Teacher ('salman', 7, '78')

