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

More info can be found on our Coder.Haus site
Activated Route 
https://coder.haus/2019/08/27/easy-angular-testing-activatedroute/

RouterLink
https://coder.haus/2019/09/03/easy-angular-testing-routerlink/

Stubbing Components
https://coder.haus/2019/09/09/easy-angular-testing-stubbing-components/

Spies
https://coder.haus/2019/09/20/easy-angular-testing-spies/

Services
https://coder.haus/2019/10/03/easy-angular-testing-services/

Tooltips
https://coder.haus/2019/10/25/easy-angular-testing-ui-elements-tooltips/

SnackBar
https://coder.haus/2019/11/16/easy-angular-testing-ui-elements-snackbar/

Lists
https://coder.haus/2019/11/28/easy-angular-testing-ui-elements-lists/

Dialog
https://coder.haus/2019/12/09/easy-angular-testing-ui-elements-dialog/

DataTables
https://coder.haus/2019/12/18/easy-angular-testing-ui-elements-data-tables/

Card
https://coder.haus/2019/12/27/easy-angular-testing-ui-elements-card/

Bottom Sheet
https://coder.haus/2020/01/06/easy-angular-testing-ui-elements-bottom-sheet/

Button Toggle
https://coder.haus/2020/01/23/easy-angular-testing-ui-elements-button-toggle/


