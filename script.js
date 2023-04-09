/* 
Sent with requests: Local storage No, Session Storage No, Cookies Yes
Capacity: Local storage 10mb , Session storage 5mb, Cookie 4kb
Accessible: Local storage Any window, Session Storage Same Tab, Cookies Any window
Browser: Local Html5, Session Html 5, Cookies html4 and 5
Expiration: Local storage Never, Session stroage on tab close, and Cookies manually set
*/


//console.log('hi');
/*
window.alert('ok');

alert('What is up? This is similar to what happens when we use the window.alert');
*/
//localStorage.getItem(); > Allows us to get some item in the localStorage
//localStorage.removeItem(); > Allows ust to remove something 
//localStorage.setItem(); > allowing us to set an item inside the local storage

localStorage.setItem('name', 'aldrien');
//localStorage.removeItem('name');
//JSON OBJECT name: 'Rod'
localStorage.setItem('name', 'drieen');// we can use setItem() to update our localStorage
console.log(localStorage.getItem('name'));

sessionStorage.setItem('name', 'santiago');
sessionStorage.setItem('name', 'allanigue'); 
//sessionStorage.removeItem('name');
console.log(sessionStorage.getItem('name'));

// Cookies

/*
> Store user information in our web pages.
> data that are stored in small text files in our computer 
> We can store a user's name in a cookie > the cookie will remember the user's name.
> Name: Value pairs > username = Jack 
> We can create, read, delete cookies with the document.cookie property
> We can set expiration date (in UTC Time) 


*/

// document.cookie = 'firstName=Rod; expires=Fri, 17 Mar 2023 12:00:00 UTC; path=/';


document.cookie = 'firstName=drin; expires=' + new Date(9999,0, 1).toUTCString();

console.group(document.cookie);