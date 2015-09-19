// Create an instance of ShoppingList.
var groceryList = new ShoppingList();
// var render = groceryList.render();
// document.getElementById("content").innerHTML = groceryList.render();

// Invoke the shopping_list object's render() method, and store the output
//to a variable. Write the resulting output html into the
//content div. http://www.w3schools.com/jsref/prop_html_innerhtml.asp

function add_to_shopping_list() {
  var titleBox = document.getElementById("title").value;
  var descBox = document.getElementById("description").value;

  var item = new ShoppingListItem(titleBox,descBox);
  groceryList.addItem(item);
  console.log(titleBox);
  console.log(descBox);
  console.log();

  document.getElementById('content').innerHTML = groceryList.render();

/*=============================================================*
| var textContent = document.getElementById("title").value;
|  // alert(textContent);
|
| document.getElementById("daPlace").innerHTML = textContent;
*=============================================================*/
}


// Create an add_to_shopping_list function that will read the value of the title and description fields, then create a new variable named new_shopping_list_item that will store the result of constructing a new ShoppingListItem and passing in the values of title and description.

// Invoke your shopping list's addItem by passing in your new_shopping_list_item.

// Re-render the shopping list.

// commit and push your work

