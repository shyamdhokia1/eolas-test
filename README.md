# Test Instructions

## This is template based on the Vite React app

## After cloning this repo, please run the command **yarn** from the project directory

### Please note: when additional dependencies are required, the instructions will state this explicitly.

1. There is currently a button on the main screen, which when pressed increments the counter by 1. Expand the functionality so that in addition to being able to manually increment the counter, every 2 seconds the counter automatically increments by 1. Add an additional button to the right of the existing button. When auto-incrementing, this button should have the text "Pause" and should stop the auto-incrementing when clicked on. When paused, the button should have the text "Resume" and clicking on it should resume the auto-incrementing. Finally, add one more button in a new row underneath the 2 buttons which allows for the user to reset the counter and stop the auto-incrementing.

2. There is a function, searchProducts. It should retrieve Products data from https://dummyjson.com/. Please complete the searchProducts fetch function and the typescript Type according to their documentation. It should be able to return filtered results based on a search string provided as an optional parameter. If the string is empty, all Products should be returned. Either use the fetch API or install axios, whichever you are more comfortable using.

3. Imagine that the project depends on an asynchronous function which could be fired from multiple contexts, but race conditions could happen if multiple instances are awaiting resolution at the same time. There is an unfinished function **_src/functions/noParallelCalls.ts_**. Finish this function so that the mock function it wraps cannot have multiple asynchronous operations running at once (calling it in quick succession should return the same result) and the tests pass. The testing library jest has been installed. Please look to the package.json for the correct command to run the tests.

### If you struggle with some tasks, it is better to have less code solved well, than a bit of everything.

### If you have faced particular challenges and have made a particular decision on how to proceed, please explain your reasoning below, in this README. This test has been designed to not trick you. If you think there are any bugs with the test itself (ie it feels like you have been tricked) please let me know below as well.
