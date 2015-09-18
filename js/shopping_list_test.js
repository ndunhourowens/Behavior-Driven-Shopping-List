var expect = chai.expect;
var should = chai.should();

describe('ShoppingListItem', function() {

  var apple = new ShoppingListItem('apple', 'cripsy', false);
  var list = new ShoppingList();
  var item = new ShoppingList('item');
  // var sams = new ShoppingList();
  // sams.addItem('tylonel');
  // sams.addItem('advil');
  // sams.addItem('shot of chocolate cake');
  // sams.removeItem('tylonel');


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

});

  // shopping list

/*================================================*/
describe('ShoppingList', function() {

  var empty = new ShoppingList();
  var sams = new ShoppingList();
  sams.addItem('tylonel');
  sams.addItem('advil');
  sams.addItem('shot of chocolate cake');
  sams.removeItem('tylonel');

  // describe('ShoppingList', function() {
  it('should be a function', function() {
    ShoppingList.should.be.a('function');
  });
  it('should have a property item', function() {
    sams.should.have.property('items');
  });
  //empty array
  it('should have an empty array', function() {
    empty.items.should.be.empty;
  });
  it('should have a addItem method', function() {
    expect(sams.addItem).to.be.a('function');
  });
  it('should addItem in to array', function() {
    sams.addItem(item).should.be.equal.true;
    sams.item.should.have('advil');
  });
  it('throw error message for addItem', function() {
    expect(sams.addItem).to.throw(Error);
  });



  //removeItem
  it('should have a removeItem method', function() {
    expect(sams.removeItem).to.be.a('function');
  });
  it('throw error message for removeItem', function() {
    expect(sams.removeItem).to.throw(Error);
  });

  it('should render the list of items on the list', function() {
    render.should.equal('<ul><li class="completed_'+ this.is_done +'"><span>'+ this.name +'</span><span>'+ this.description +'</span></li></ul>');
  });



});
