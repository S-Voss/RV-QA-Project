var assert = require('assert');

//Tests to see if valid address information is accepted
describe('webdriver.io page', function() {
    it('form should accept appropriate form information', function () {
        browser.url('https://internet.frontier.com/');

        //Declare selector variable
        var street = $('#street');
        var city = $('#city');
        var state = $('.chosen-results');
        var zip = $('#zip');

        //Ensure form has loaded
        browser.waitForVisible('#address-check');

        //Fill out form using appropriate address information
        street.addValue('123123');
        street.setValue('1205 Spruce Street');
        city.setValue('Charlotte');
        browser.click('.chosen-single');
        browser.click('.chosen-drop>ul>li:nth-child(34)');
        zip.setValue('28203');

        //Submit form
        browser.click('.form__button');

        //Wait for new 'page' to load and create variable equal to successful headline
        browser.waitForVisible('.banner--serv-message__headline');

        //Create variables to assert success of test
        var test1 = $('.banner--serv-message__headline')
        var confirmTest = test1.getText();
        var confirmMessage = ("You've qualified for unbeatable Internet deals!\nService provider eligibility may vary by address.")
        
        //Assert that the submitted form works with valid information
        assert.equal(confirmMessage, confirmTest);
    });
});