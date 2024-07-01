let  input=document.querySelector('.entered');
let  addbtn=document.querySelector('.add-btn');
let  tasks=document.querySelector('.tasks');

function checkInput(){
    if(input.value.trim()!=0){
        addbtn.classList.add('active')
    }else{
        addbtn.classList.remove('active')
    }
}

input.addEventListener('keyup',(event)=>{
    checkInput();
    if(event.key==='Enter'){
        addtask();
    }
})



function addtask(){
    if(input.value.trim()!=0){
        const newtask=document.createElement('div');
        newtask.classList.add('item');
        newtask.innerHTML=`
                <input type="checkbox" class="checkbox">
                <p>${input.value}</p>
                <input type="text" class="edit-input" style="display:none">
                <div class="item-btn">
                    <i class="fa-regular fa-pen-to-square edit-icon"></i>
                    <i class="fa-solid fa-xmark delete-icon"></i>
                </div>`
        tasks.appendChild(newtask);
        input.value='';


        /*deleting*/

        const deleteicon=newtask.querySelector('.delete-icon');
        deleteicon.addEventListener('click',function(){
        tasks.removeChild(newtask);
        })
        

        /*checkbox */

        const checkBox=newtask.querySelector('.checkbox');
        checkBox.addEventListener('change',function(){
            if(checkBox.checked){
                newtask.classList.add('completed');
            }else{
                newtask.classList.remove('completed');
            }
        })

        /*editing*/

        const editIcon=newtask.querySelector('.edit-icon');
        const editInput=newtask.querySelector('.edit-input');
        const taskText=newtask.querySelector('p');

        editIcon.addEventListener('click',function(){
            editInput.value=taskText.textContent;
            editInput.style.display='block';
            taskText.style.display='none';
            editInput.focus();
        });

        editInput.addEventListener('keyup',function(event){
            if(event.key==='Enter'){
                taskText.textContent=editInput.value;
                editInput.style.display='none';
                taskText.style.display='block';
            }
        });

        editInput.addEventListener('blur',function(){
            taskText.textContent=editInput.value;
            editInput.style.display='none';
            taskText.style.display='block';
        })

    }
    else{
        alert('Please enter a task');
    }
}
addbtn.addEventListener('click',addtask);
