# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Running Rest API

npm install -g json-server
json-server --watch db.json

## Questions
Questions:
1. Say you’ve received data from an API, and you want to supply a sorting option to it within your typescript or JavaScript. Give an example of how you might go about doing this.

- There can be multiple ways one would be on the use of the RxJS map operator and the sort function which is available on JavaScript arrays. 
Example: https://prnt.sc/sp3i8o

Also another is using Pipe. it is an effective solution, since a pipe takes an input manipulates it & returns the update info wherein its returning something instead of manipulating the data source. It’s fairly a simple enough logic & we are using the utility functions provided by lodash 

2. Say you’ve completed your work and are building your project using ng build --prod, and an error pops up that was not happening when using just ng build. What is your debug path?

-in the development environment I can debug with the Chrome source tab , but in the prod server we can try ng build --prod --sourcemap


3. What is your strategy for handling large amounts of data returned by an API? How does it impact the
user experience?

--Pagination and Infinite Scroll = we could use this one or better if we can change the API to include additional parameters to limit the scope of data returned by your application. For instance, add limit and offset parameters to fetch just a little part.
