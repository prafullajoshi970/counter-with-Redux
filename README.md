# npm install libraries
install redux
install react-redux
install redux-logger

# create two folders
1.component-->input component
2.redux--> store.js && reducer.js

# input componet 
create three buttons 
and show count data from redux store for that use  useSelector hook 
create three function to pass dispatch action increment,decrement,reset to reducer function.

# Store.js

to create store first import legacy_createStore function from redux
create one variable and pass that legacy function and applymiddleware and pass logger as parameter of that applymiddleware function
to show store data in console import logger import applymiddleware
pass applymiddle ware and pass logger as parameter 

# reducer.js

whatever action dispatch from input componen according to that increase value of counter
here we update the counter value and store that data inside redux store

# Show Data

make a use of useSelector hook and and call that useselector function and store there reference inside vaiable and call that  variable inside html tags.