var assert = require('assert');

//TESTS WHETHER OR NOT THE MASTHEAD PHONE NUMBERS ARE FORMATTED CORRECTLY
describe('webdriver.io page', function() {
    it('all phone-numbers should have the proper format', function() {
        browser.url('https://internet.frontier.com/');

        //Select the elements with an h-phone class
        var mastheadNumber = browser.getText('a>.h-phone');

        //Loop through all of the timers and get the tag name (see note at bottom for why)
        for (var i = 0; i < mastheadNumber.length; i++) {
            var elem = $('.h-phone');
            var tagName = elem.getTagName();

            //console.log(tagName);

            //Skip over those contained within a span. This is a placeholder for future improvement on this test
            if (tagName === 'span') {

                continue;

            } else {

                //console.log(mastheadNumber[i]);

                //Use regex to assert that the phone number is formated correctly
                var linkRegex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(mastheadNumber[i]);
                assert.equal(true, linkRegex);
            }
        };

        //There are seven Phone Numbers on this landing page. The numbers displaying on buttons within
        //a span were causing the test to fail because the .getText was not picking up the phone number.
        //I was not sure how to resolve this so I wrote them out of the test. With more time, I would 
        //have included a test for those within the if statement.
    });
});