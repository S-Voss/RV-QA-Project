var assert = require('assert');

//Tests whether or not all links on the webpage point to the appropriate landing page
describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('https://internet.frontier.com/');

        //Search webpage for links and add them to a list of links called anchorTag
        var anchorTag = browser.elements("a").value
            
        //Loop through all anchorTags on page and parse array (of objects) for the href link for each
        for (var i = 0; i < anchorTag.length; i++) {

            //Remove links incorrectly selected by QA Tool and only test URL Links
            if (anchorTag[i].getAttribute('href') === null) {

                continue;

            } else if (anchorTag[i].getAttribute('href').includes("tel")) {

                continue;

            } else if (anchorTag[i].getAttribute('href').includes("javascript")) {

                continue;
            
            //If not incorrectly selected, test formatting of the link
            } else {

                //Print all links being tested to the console
                //console.log(anchorTag[i].getAttribute('href'));

                //Assert that links pointing to another page are formatted correctly
                var linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(anchorTag[i].getAttribute('href'))
                assert.equal(true, linkRegex);
            }  
        };
    });
});