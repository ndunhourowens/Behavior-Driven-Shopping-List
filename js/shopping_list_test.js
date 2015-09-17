var expect = chai.expect;
var should = chai.should();

describe('ShoppingListItem', function() {

  var apple = new ShoppingListItem('apple', 'cripsy', false);

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
  it('should have a method check', function() {
    apple.is_done.should.equal.true;
  });
  it('should have a method uncheck', function() {
    apple.is_done.should.equal.false;
  });
  it('should have a method render', function() {
    var result = apple.render();
    result.should.equal('<li class="completed_false"><span>apple</span><span>cripsy</span></li>');
  });
});

// shopping list
describe('ShoppingList', function() {

  var sams = new ShoppingList('porkChop');

  it('should be a function', function() {
    ShoppingList.should.be.a('function');
  });
  it('should have a property item', function() {
    var sams = new ShoppingList('porkChop');
    sams.should.have.property('items');
  });
  //addItem
  it('throw error message', function() {
    var sams = new ShoppingList('porkChop');
    var orange = new
    console.log(this.items);
    expect(ShoppingList.addItem).to.throw(Error);
  });
  //removeItem
  it('throw error message', function() {
    var sams = new ShoppingList('porkChop');
    console.log(this.items);
    expect(ShoppingList.addItem).to.throw(Error);
  });

  it('should render the list of items on the list', function() {
    var result = sams.render();
    result.should.equal('<ul>...[all the li elements from ShoppingListItem.render()]...</ul>');
  });
});