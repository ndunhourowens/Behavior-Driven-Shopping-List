//ShoppingListItem is a class
function ShoppingListItem(name, description, is_done) {
  this.name = name;
  this.description = description;
  this.is_done = is_done;
}

ShoppingListItem.prototype.check = function(is_done) {
  this.is_done = true;
};

ShoppingListItem.prototype.uncheck = function(is_done) {
  this.is_done = false;
};

ShoppingListItem.prototype.render = function() {
  return '<li class="completed_'+ this.is_done +'"><span>'+ this.name +'</span><span>'+ this.description +'</span></li>';
};


/*

ShoppingListItem has a property named name
ShoppingListItem has a property named description
ShoppingListItem has a property named is_done
ShoppingListItem has a constructor method that accepts 2 arguments, name and description
the constructor method sets the new instances name and description properties using the arguments passed in
ShoppingListItem has a method named check
calling the instance's check method will set it's is_done property to true
ShoppingListItem has a method named uncheck
calling the instance's uncheck method will set it's is_done property to false
ShoppingListItem has a method named render
calling the instance's render method will construct and return an html formatted string. the string content will be wrapped in "
" tags. <li class="completed_[is_done]"><span>[name]</span> <span>[description]</span></li>. example: <li class="completed_false"><span>Avocado</span> <span>Must be eaten immediately.</span></li>
hint: multiline strings in javascript need to be "escaped"

example:


var some_html_output = '<ul> \
  <li class="completed_false"> \
    <span>Avocado</span> \
    <span>Must be eaten immediately.</span> \
  </li> \
<ul>';


Create a class that defines ShoppingListItem.
ShoppingListItem will have all the properties and methods defined in the BDD spec above.
*/



/*----------------------------------------*/
// shopping list

function ShoppingList() {
  this.items = [];
}

ShoppingList.prototype.addItem = function(stuff) {
  if(stuff instanceof ShoppingListItem) {
    this.items.push(stuff);
  }else{
    throw new Error('must be type of shopping list item');
  }
};

ShoppingList.prototype.removeItem = function(stuff) {
  if(stuff instanceof ShoppingListItem) {
    //remove item
    var index = this.items.indexOf(stuff);
    this.items.splice(index, 1);
  }else{
    throw new Error('can not remove item');
  }
};

ShoppingList.prototype.render = function() {
  return '<ul>...[all the li elements from ShoppingListItem.render()]...</ul>';
};