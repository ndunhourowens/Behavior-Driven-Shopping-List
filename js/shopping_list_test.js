var expect = chai.expect;
var should = chai.should();

describe('ShoppingListItem', function() {

  var apple = new ShoppingListItem('apple', 'cripsy', false);
  var list = new ShoppingList();
  var item = new ShoppingList('item');
  var sams = new ShoppingList();


  it('should be a function', function() {
    ShoppingListItem.should.be.a('function');
  });
  it('should have a parameter name', function() {
    apple.name.should.equal('apple');
    apple.should.have.property('name');
  });
  it('should have a parameter description', function() {
    apple.description.should.equal('cripsy');
    apple.should.have.property('description');
  });
  it('should have a property is_done', function() {
    apple.should.have.property('is_done');
  });
 //check method

  it('should have a method check', function() {
    apple.is_done.should.equal.true;
  });

  //uncheck method
  it('should have a method uncheck', function() {
    apple.is_done.should.equal.false;
  });

  //render method
  it('should have a method render', function() {
    apple.render().should.equal ('<li class="completed_false"><span>apple</span><span>cripsy</span></li>');
  });



  // shopping list

  // describe('ShoppingList', function() {
  it('should be a function', function() {
    ShoppingList.should.be.a('function');
  });
  it('should have a property item', function() {
    sams.should.have.property('items');
  });
  //empty array
  it('should have an empty array', function() {
    sams.items.should.be.empty;
  });



  it('should have a method addItem', function() {
    ShoppingList.should.have.length(1);
  });
  it('should addItem in to array', function() {
    list.addItem(item).should.be.equal.true;
    list.item.should.have.length(1);
  });
  it('throw error message', function() {
    sams.addItem().to.throw(Error);
  });


  //removeItem
  it('throw error message', function() {
    sams.removeItem().to.throw(Error);
  });
  it('throw error message', function() {
    expect(ShoppingList.addItem).to.throw(Error);
  });

  it('should render the list of items on the list', function() {
    result.should.equal('<ul>...[all the li elements from ShoppingListItem.render()]...</ul>');
  });


});
