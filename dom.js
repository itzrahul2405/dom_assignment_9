var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);








//  create second input button

var inputBtn = document.createElement('input');
inputBtn.type = 'text';
inputBtn.className = "form-control mr-2 "
inputBtn.id = "item-new"
// form.appendChild(inputBtn);    // not give expected result

form.insertBefore(inputBtn, form.lastChild.previousSibling);            
















//Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value + ' ' + document.getElementById('item-new').value;
    // vreate new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));


    // Create delete button element
    var deleteBtn = document.createElement('button');

    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text Node
    deleteBtn.appendChild(document.createTextNode('X'));

    //  Append button to li
    li.appendChild(deleteBtn);





    //  create edit button (don't have functionality to edit , it is just a button) -> assignment task
     // Create edit button element
    var editBtn = document.createElement('button');
     // Add classes to edit button
    editBtn.className = 'btn btn-success btn-sm mr-2 float-right edit';
    // Append text Node
    editBtn.appendChild(document.createTextNode('EDIT'));
    //  Append button to li
    li.appendChild(editBtn)



    //  Append li to list
    itemList.appendChild(li);
}







// Remove item
function removeItem(e){
    
    if (e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}






// filter items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get lis
    var items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}


















// insertBefore syntax      -->  parentNode.insertBefore(newNode, referenceNode);


