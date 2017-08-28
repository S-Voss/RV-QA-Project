var assert = require('assert');

//TEST WHETHER OR NOT THE MASTHEAD TIMER IS FORMATTED CORRECTLY

describe('webdriver.io page', function() {
    it('all timers should display in the proper format', function() {
        browser.url('https://internet.frontier.com/');
        //Test the Mast Head Timer
        var mastheadTimer = browser.getText("#countdown-masthead")
            //console.log(mastheadTimer);
       
        //Assert the wording within the timer is correctly displayed
        var spaceSplit = mastheadTimer.split(' ');
        assert.equal('Hrs', spaceSplit[1]);
        assert.equal('Min', spaceSplit[3]);
        assert.equal('Sec', spaceSplit[5]);
        

        var hourTest = /^\d{1,2}$/.test(spaceSplit[0]);
        assert.equal(true, hourTest);

        var minTest = /^\d{1,2}$/.test(spaceSplit[2]);
        assert.equal(true, minTest);

        var secTest = /^\d{1,2}$/.test(spaceSplit[4]);
        assert.equal(true, secTest);

        //The hours test fails when run asynchronously with the rest of the tests. However
        //if run separately from the rest it does fine. I believe it has something to do with timing
        //of the browser automation and loading times but cannot confirm.
    });
});