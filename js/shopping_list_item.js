//ShoppingListItem is a class
function ShoppingListItem(name, description, is_done) {
// ShoppingListItem has a property named name
// ShoppingListItem has a property named description
// ShoppingListItem has a constructor method that accepts 2 arguments, name and description
  this.name = name;
  this.description = description;
  this.is_done = is_done;
}
// ShoppingListItem has a property named is_done
// the constructor method sets the new instances name and description properties using the arguments passed in
// ShoppingListItem has a method named check
// calling the instance's check method will set it's is_done property to true

ShoppingListItem.prototype.check = function(is_done) {
  this.is_done = true;
};

// ShoppingListItem has a method named uncheck
// calling the instance's uncheck method will set it's is_done property to false
ShoppingListItem.prototype.uncheck = function(is_done) {
  this.is_done = false;
};

// ShoppingListItem has a method named render
// calling the instance's render method will construct and return an html formatted string
ShoppingListItem.prototype.render = function() {
  return '<li class="completed_'+ this.is_done +'"><span>'+ this.name +'</span><span>'+ this.description +'</span></li>';
};
var stuffAtStore = new ShoppingListItem('roach', 'crunchy', true);


/*----------------------------------------*/
// shopping list

function ShoppingList() {
  this.items = [];
}


// addItem
ShoppingList.prototype.addItem = function(stuff) {
  if (stuff instanceof ShoppingListItem) {
    this.items.push(stuff);
    console.log(this.items);
    return true;
  }

  // }else{
  //   throw new Error('must be type of shopping list item');
  // }
};

ShoppingList.prototype.removeItem = function(stuff) {
  if(stuff instanceof ShoppingListItem) {
    var index = this.items.indexOf(shoppingListItem);
    this.items.splice(index, 1);
  }

    //remove item
  // }else{
  //   throw new Error('can not remove item');
  // }
};
// ShoppingList.prototype.render = function() {
//   return '<ul><li class="completed_'+ this.is_done +'"><span>'+ this.name +'</span><span>'+ this.description +'</span></li></ul>';
// };

var sams = new ShoppingList();
  sams.addItem('tylonel');
  sams.addItem('advil');
  sams.addItem('shot of chocolate cake');
  sams.removeItem('tylonel');

console.log(sams.items);