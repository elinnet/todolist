describe('To Do List', function() {

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('displays a newly input task', function(){
    element(by.model('inputBox')).sendKeys('do laundry');
    element(by.id('submit')).click();
    expect(element(by.binding('tasks.item')).getText()).toEqual('do laundry');
  });

});
