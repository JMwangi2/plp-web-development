//IEFE
(() =>{
    let toDoListArray = [];

    //ul variables
    const form = document.querySelector(".form_label");
    const input = document.querySelector('.form_input');
    const ul = document.querySelector(".toDoList");

    //event listeners
    form.addEventListener("submit", (e)=> {
        //prevent default behaviour - page reload
        e.preventDefault();
        //give/items a unique ID
        let itemId = string(Date.now());
        //get/assign input value
        let toDoItem = input.value;
        //pass ID and item into functions
        addItemToDOM(itemId,toDoItem);
        addItemToArray(itemId, toDoItem);
        //clear the input box. (this is default behaviour but we got to get rid of that)
        input.value = "";
    });

    ul.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id");
        if (!id) return
        removeItemFromDOM(id);
        removeItemFromArray(id);
    })

    //functions
    function addItemToDOM(itemId, toDoItem) {
        //create an li
        const li = document.createElement("li");
        li.setAttribute("data-id", itemId);
        //add toDoItem text to li
        li.innerText = toDoItem;
        //add li to the DOM
        ul.appendChild(li);
    }
    function addItemToArray(itemId, toDoItem) {
        //aad items to array as an object with an id so we can find and delete it later
        toDoListArray.push({itemId, toDoItem})
        console.log(toDoListArray);
    }

    function removeItemFromDOM(id){
        //get the list item by data id
        var li = document.querySelector('[data-id="' + id + '"]');
        //remove list item
        ul.removeChild(li);
    }

    function removeItemFromArray(id) {
        //create a new toDoListArray with all li's that dont match the ID
        toDoListArray = toDoListArray.filter((item) => item.itemId !==id);
        console.log(toDoListArray)
    }
})();