# Sky bill

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

For some crazy reason I have taken this opportunity to learn something new. The application is built (as stated above) using yeoman, grunt and bower. This is the first time I have used these tools and as such some areas are probably a little noddy. Due to free time constraints I have not done everything I would like to have done such as;
* Plugging in the `angular-bootstrap` component to angularify the `collapse` functionality and hook into the `show.bs.collapse` and `hide.bs.collapse` events to create an animated transition.
* Created a CSS3 transition to rotate the expand / close icon used in the `collapse` components.
* Parameterised the test assertion values.
* Use `LESS` or `Sass` to structure the CSS and re-use colour variables.
* Structure the functional tests to use the `page` pattern (although in this instance the page is simple enough).

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

This project includes unit and functional tests that can be run separately.

### Unit tests

Running `grunt test` will run the unit tests with karma.

### Functional tests

The functional tests utilise Protractor and can be run as follows.

1. Open a new terminal and start the Selenium server

    `./node_modules/.bin/webdriver-manager start`

2. Open a new terminal and start the Web server running the app

    `grunt serve`

3. Open a new terminal and run the protractor functional tests

    `grunt protractor-e2e`