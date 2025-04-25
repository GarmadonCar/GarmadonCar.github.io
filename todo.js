var saved = localStorage.getItem('items');

if (saved) { document.querySelector("#items-list").innerHTML = saved; }

const createNewItem = function (newTodoContent) {
    const nodeToclone = document.querySelector("#item");
    const clone = nodeToclone.cloneNode(true);
    clone.style.display = "flex";
    let content = clone.childNodes[1];
    content = content.childNodes[3];
    content.innerHTML = newTodoContent;
    clone.classList.add("cloned-item");
    const itemsList = document.querySelector("#items-list");
    itemsList.prepend(clone);
};

const form = document.querySelector("form");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const newTodoContent = form.elements['new-todo'];
    if (newTodoContent.value != '') {
        createNewItem(newTodoContent.value);
        updateItems();
        newTodoContent.value = '';
        saveItems();
    }
});

const updateItems = () => {
    btnCheckBoxs = document.querySelectorAll("#add-list-checkbox");
    btnCheckBoxs.forEach(btn => {
        btn.addEventListener('click', function () {
            btn.classList.add("check-box-clicked");
            btn.childNodes[1].classList.remove("hidden");
            btn.disabled = true;
            btn.classList.remove("add-list-checkbox-light");
            btn.classList.remove("add-list-checkbox-dark");
            content = btn.nextElementSibling;
            content.classList.add("completed");
            /// add items to  item-list
            parent = btn.parentElement.parentElement;
            parent.classList.add("completed");
            console.log(parent);
            updateItems();
            saveItems();
        })
    });
    crossButtons = document.querySelectorAll(".cross-btn");
    crossButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            parentElement = btn.parentElement;
            parentElement.remove();
            /// save items list localy
            saveItems();
        })
    });
    /// save items list localy
    saveItems();
};
const saveItems = function () {
    localStorage.setItem('items', document.querySelector("#items-list").innerHTML);
}
updateItems();

/// action buttons
let itemsList = localStorage.getItem('items');

const allBtn = document.querySelectorAll('#all');
allBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        itemslistParent = document.querySelector("#items-list");
        itemslistParent.innerHTML = '';
        itemsList = localStorage.getItem('items');
        if (itemsList) {
            itemslistParent.innerHTML = itemsList;
            updateItems();
        }
        btn.classList.add('selected');
        let activeBtn = document.querySelectorAll('#active');
        activeBtn.forEach(btn => {
            btn.classList.remove('selected');
        });
        let completedBtn = document.querySelectorAll('#completed');
        completedBtn.forEach(btn => {
            btn.classList.remove('selected');
        });
    })
});

const activeBtn = document.querySelectorAll('#active');
activeBtn.forEach(btn => {
    btn.addEventListener('click', () => {

        itemslistParent = document.querySelector("#items-list");
        itemslistParent.innerHTML = '';
        itemsList = localStorage.getItem('items');
        if (itemsList) {
            itemslistParent.innerHTML = itemsList;
            updateItems();
        }
        itemslistParent = document.querySelector("#items-list");
        itemsList = document.querySelectorAll(".cloned-item");

        itemsList.forEach(item => {
            completed = false
            classList = item.classList;
            classList.forEach(cl => {
                if (cl === 'completed') {
                    complited = true;
                }
            });
            if (completed)
                item.style.display = 'none';
            else {
                item.style.disabled = 'block';
            }
        });

        btn.classList.add('selected');
        let allBtn = document.querySelectorAll('#all');
        allBtn.forEach(btn => {
            btn.classList.remove('selected');
        });
        let completedBtn = document.querySelectorAll('#completed');
        completedBtn.forEach(btn => {
            btn.classList.remove('selected');
        });
    })
})

const completedBtn = document.querySelectorAll('#completed');
completedBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        itemslistParent = document.querySelector("#items-list");
        itemslistParent.innerHTML = '';
        itemsList = localStorage.getItem('items');
        if (itemsList) {
            itemslistParent.innerHTML = itemsList;
            updateItems();
        }
        itemslistParent = document.querySelector("#items-list");
        itemsList = document.querySelectorAll(".cloned-item");

        itemsList.forEach(item => {
            completed = false
            classList = item.classList;
            classList.forEach(cl => {
                if (cl === 'completed') {
                    completed = true;
                }
            });
            if (!completed)
                item.style.display = 'none';
            else {
                item.style.disabled = 'block';
            }
        });

        btn.classList.add('selected');
        let allBtn = document.querySelectorAll('#all');
        allBtn.forEach(btn => {
            btn.classList.remove('selected');
        });
        let activeBtn = document.querySelectorAll('#active');
        activeBtn.forEach(btn => {
            btn.classList.remove('selected');
        });
    })
})

// clear completed todo

const clearCompletedBtn = document.querySelector('#clear-completed');
clearCompletedBtn.addEventListener('click', () => {
    itemslistParent = document.querySelector("#items-list");
    itemslistParent.innerHTML = '';
    itemsList = localStorage.getItem('items');
    if (itemsList) {
        itemslistParent.innerHTML = itemsList;
        updateItems();
    }
    itemslistParent = document.querySelector("#items-list");
    itemsList = document.querySelectorAll(".cloned-item");
    itemsList.forEach(item => {
        completed = false
        classList = item.classList;
        classList.forEach(cl => {
            if (cl === 'completed') {
                complited = true;
            }
        });
        if (completed) {
            //delete completed todo
            item.remove();
            updateItems();
            saveItems();
        }
    });
})
