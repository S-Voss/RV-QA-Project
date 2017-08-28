# RV-QA-Project
A suite of end-to-end tests using Webdriver.io

Steps to run test:

1) Pull project files from Github
2) To download all the necessary dependencies and frameworks for webdriverio and mocha (required to execute the test): npm i
-this will automatically start downloading the necessary files I have stated within my package.json
-NOTE: you must be CD's into the folder from step 1 on your command line
3) To run the tests within the Firefox Browser use the command: ./node_modules/.bin/wdio wdio.conf-firefox.js
-Please note, within the config file, I specifically had the Firefox version skip the form validator tests. There is an issue (from my understanding after troubleshooting online) with Webdriver.io and the latest version of Firefox in regards to the form validator (in particular, the click method). All other tests should execute properly.
4) To run the tests within the Chrome Browser use the command: ./node_modules/.bin/wdio wdio.conf-chrome.js

Some Other Important Things to Note: 
1: I have included comments within my code to explain my logic behind my approach from a technical standpoint.
2: One test fails because while writing these tests, I created one to test the format of the timer within the header. That timer has since been removed from the website. I kept it in my submission just in case you would like to see my approach on testing the format of the countdown timer. 
3: The invalidformTest fails because of the second assertion in which I have declared the test should return false, indicating the webpage does not accept invalid address information, however, the test returns true. This is indicating, from my perspective, an 'actual' error on the page and could be room for improvement regarding form validation.
4: I have also noted areas for improvement within my tests (points of trouble when writing the code) to help indicate what else I would like to have included in my tests had I been given more time. I also indicated where I would have liked to take my assertions one step further after becoming more familiar with Webdriver.io. 

P.S: Thank you so much for this exciting challenge!