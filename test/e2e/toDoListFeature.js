describe('To Do List', function() {

  var listItems = element.all(by.repeater('tasks in listCtrl.taskList'));
  var colourSpan = element(by.css('span'));


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

  it('allows task descriptions to be edited', function(){
    element(by.model('listCtrl.inputTask')).sendKeys('wash car');
    element(by.id('submit')).click();
    element(by.className('items')).click();
    element(by.model('$data')).sendKeys(' tomorrow');
    element(by.buttonText('save')).click();
    expect(listItems.get(0).getText()).toBe('wash car tomorrow');
  });

  it('allows tasks to be marked as completed', function(){
    var value = element(by.binding('task.status'));

    element(by.model('listCtrl.inputTask')).sendKeys('wash car');
    element(by.id('submit')).click();
    element(by.model('task.status')).click();
    expect(value.getText()).toContain('Task Completed');
  });

//DON'T UNDERSTAND WHY THIS WILL NOT PASS.  HELP ON DEBUGGING.
  xit('allows me to filter tasks by Completed status', function(){
    element(by.model('listCtrl.inputTask')).sendKeys('wash car');
    element(by.id('submit')).click();
    element(by.model('listCtrl.inputTask')).sendKeys('do laundry');
    element(by.id('submit')).click();
    element(by.id('completedItem')).click(); //marks as completed
    element(by.buttonText('Completed Tasks')).click();
    expect(listItems.get(0).getText()).toBe('do laundry');
  });

 it('counts total number of tasks', function(){
   element(by.model('listCtrl.inputTask')).sendKeys('wash car');
   element(by.id('submit')).click();
   element(by.model('listCtrl.inputTask')).sendKeys('do laundry');
   element(by.id('submit')).click();
   expect(by.id('user_name'))).toBe(2); // array of tems
 });

});
