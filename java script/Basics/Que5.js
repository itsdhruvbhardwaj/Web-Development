/*prompt the user to enter their fullname.denerate a username for them on the input. Start username with
@,followed by their fullname and ending with the fullname length*/

let name=prompt("Enter fullname without Space: ");
name=name.toLowerCase();
let len=name.length;
let username= "@"+name+len;
console.log(username);