# skybill

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

This project includes unit and functional tests that can be run separately.

### Unit tests

Running `grunt test` will run the unit tests with karma.

### Functional tests

The functional tests utilise Protractor and can be run as follows.

1. Open a new terminal and start the Selenium server

    ./node_modules/.bin/webdriver-manager start

2. Open a new terminal and start the Web server running the app

    grunt serve

2. Open a new terminal and run the protractor functional tests

    grunt protractor-e2e
