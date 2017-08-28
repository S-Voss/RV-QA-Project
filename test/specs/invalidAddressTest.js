var assert = require('assert');

//Test written to check if invalid ZIP code is accepted
describe('webdriver.io page', function() {
    it('form should not accept an invalid zip-code', function () {
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
        zip.setValue('00000');

        //Submit form
        browser.click('.form__button');

        //Wait for new 'page' to load and create variable equal to successful headline
        browser.waitForVisible('.banner--serv-message__headline');

        //Create variables to assert success of test
        var test1 = $('.banner--serv-message__headline')
        var confirmTest = test1.getText();
        var confirmMessage = ("You've qualified for unbeatable Internet deals!\nService provider eligibility may vary by address.")
        
        var errorTest = confirmTest == confirmMessage;

        //Assert that the submitted form fails with invalid information (bad zip-code)
        assert.equal(false, errorTest);
    });
});

//Test to see if invalid address information (field inputs do match logically)
describe('webdriver.io page', function() {
    it('form should not accept invalid address information (city, state, zip-code do not match)', function () {
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
        street.setValue('Red Ventures Rocks!'); //This is obviously not a real street
        city.setValue('St. Louis'); //This city was chosen because it will not align with the Zip-Code
        browser.click('.chosen-single');
        browser.click('.chosen-drop>ul>li:nth-child(34)'); //This will select North Carolina as the State
        zip.setValue('32003'); //This is a Florida State Zip-Code

        //Submit form
        browser.click('.form__button');

        //Wait for new 'page' to load and create variable equal to successful headline
        browser.waitForVisible('.banner--serv-message__headline');

        //Create variables to assert success of test
        var test1 = $('.banner--serv-message__headline');
        var confirmTest = test1.getText();
        var confirmMessage = ("You've qualified for unbeatable Internet deals!\nService provider eligibility may vary by address.");
        
        var errorTest = confirmTest == confirmMessage;

        //Note that this test should fail. Stricter form validation could help decrease wasted spend
        //And this could be considered 'an error' in the code
        console.log('\nNOTE: The last test case failed on purpose! Address information is invalid.');

        //Assert that the submitted form fails with invalid information (city, state and zip-code don't match)
        assert.equal(false, errorTest);
    });
});
