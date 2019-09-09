# Easy-Angular-Testing
Short, easily understood, Angular tests for common problems. 

To use:
1. Clone repo
2. cd into the folder and npm install
3. ng test

The idea behind this repo is to collect short, easy to understand test templates for common Angular problems. Each area of focus is contained in its own component or module, to make it easy to grab what you need to build more comprehensive tests.

The conventions used:

Each area of test is contained in its own module. For example, any test related to routerlink behaviour is contained in the routerlink module. Each deeper area of testing is in a component in that module. The most basic routerlink test is a component aptly named routerlink-test. A routerlink test with a spy would be routerlink-spy-test.

Some tests that are Angular "agnostic", that are not necessarily testing specific Angular behaviour but testing some other idea such as generically describing how to stub out a component, are in a module with a descriptive name such as componentstub-test.