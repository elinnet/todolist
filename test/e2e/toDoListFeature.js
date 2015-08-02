describe('To Do List', function() {

  var listItems = element.all(by.repeater('tasks in listCtrl.taskList'));



  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('displays a newly input task', function(){
    element(by.model('listCtrl.inputTask')).sendKeys('wash car');
    element(by.id('submit')).click();
    expect(listItems.get(0).getText()).toBe('wash car');
  });

});
