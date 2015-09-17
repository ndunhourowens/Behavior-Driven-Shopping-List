

//ShoppingList has a property named items
function ShoppingList() {

};

/*
ShoppingList has a constructor method that initializes items as an
  empty Array
ShoppingList has a method named addItem that accepts a single
  ShoppingListItem argument
invoking the addItem method by passing in a ShoppingListItem object should add that object to the items array
invoking the addItem method by passing in anything else that is not a ShoppingListItem object should immediately throw an error
ShoppingList has a method named removeItem that accepts a single ShoppingListItem argument
invoking the removeItem method by passing in a ShoppingListItem object (that exists in the items array) should remove that object from the items array
invoking the removeItem method with no parameters should remove the last item in the items list, if there are any items, else it does nothing
invoking the removeItem method by passing in anything else that is not a ShoppingListItem object (that exists in the items array) should immediately throw an error
ShoppingList has a method named render
calling the instance's render method will concatenate the result of calling render() on each item in this object's items array, wrapping it in a "
" tags, and returning an html formatted string. ex: <ul>...[all the li elements from ShoppingListItem.render()]...</ul>


----------------------------
Create implementation files.
shopping_list_item.js
shopping_list.js

----------------
shopping_list.js

Create a class that defines ShoppingList.
ShoppingList will have all the properties and methods defined in the BDD spec above.

once all tests pass, commit and push.


*/