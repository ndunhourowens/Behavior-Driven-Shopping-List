/*----------------------------------------*/
// shopping list

function ShoppingList() {
  this.items = [];
  // console.log('in the ShoppingList', this.items);
}


// addItem
ShoppingList.prototype.addItem = function(stuff) {

    this.items.push(stuff);
    console.log(this.items);

};

ShoppingList.prototype.removeItem = function(stuff) {
    var index = this.items.indexOf(ShoppingListItem);
    this.items.splice(index, 1);

};
ShoppingList.prototype.render = function() {
   var str = '<ul>';
   for (var i = 0; i < this.items.length; i++) {
      str += this.items[i].render(i);
   }
  return str + '</ul>';
};

