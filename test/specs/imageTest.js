var assert = require('assert');

//TESTS THE IMAGES ON THE PAGE
describe('webdriver.io page', function() {
    it('all imgs should render and display', function() {
        browser.url('https://internet.frontier.com/');
        var isVisible = browser.isVisible("img");

        var images = browser.elements("img");
        for (var i = 0; i < images.length; i++) {
            assert.equal(true, isVisible[i]);
            
            //console.log(isVisible[i]);
        };
    })
});

//TESTS THE BACKGROUND IMAGES
describe('webdriver.io page', function() {
    it('all background images should render and display', function() {
        browser.url('https://internet.frontier.com/');

        //Select the divs that have a class containing 'img'
        var element = $("div[class*='__img']");

        //Get the CSS property
        var backgroundImages = element.getCssProperty('background-image');
        var test = backgroundImages.value

        console.log(test);
        
        //I was unsure what to assert for the background images test. I had it console log
        //The Url link for visual reference
    })
});