/*question 1. Install Node.js, TypeScript and VS Code on your computer.
node.js , typescript, and vs code installation in computer is completed.*/

/*question no 2. Personal Message: Store a person’s name in a variable, and print a message to that person. 
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/
let person_name = "Eric"
console.log(`Hello ${person_name}, would you like to learn some Python today? `);

  
/*question no 3.Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase.*/
let person_name1 ="waleed nawaz choudhary";
console.log(`lowercase===${ person_name1.toLowerCase()}`);
console.log(`lowercase===${ person_name1.toUpperCase()}`);


/*question no 4.Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
Your output should look something like the following, including the quotation marks.
Albert Einstein once said, “A person who never made a mistake never tried anything new.”*/
let famous_person1 = "Albert Einstein"
console.log(`${famous_person1} once said, “A person who never made a mistake never tried anything new.” `);

/*question no 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
 Then compose your message and store it in a new variable called message. Print your message.*/
let famous_person2 = "Albert Einstein "
let message = `${famous_person2}, once said, “A person who never made a mistake never tried anything new.”`
console.log(message);


/*question no 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
 Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
 so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/
let persons_name3 = "\tQuaid-e-Azam\n"
console.log(persons_name3);

/*question no 7. Number Eight: Write addition, subtraction, multiplication, 
and division operations that each result in the number
 8. Be sure to enclose your operations in print statements to see the results.*/
let add = (4+4);
console.log(add);
let sub =(12-4);
console.log(sub);
let mul = (4*2);
console.log(mul);
let div =(64/8);
console.log(div);
/*question no 8. You should create four lines that look like this:
console.log(5 + 3).
your output should simply be four lines with the number 8 appearing once on each line.*/
console.log(4+4);
console.log(12-4);
console.log(4*2);
console.log(64/8);
/*question no 9.Favorite Number: Store your favorite number in a variable. 
Then, using that variable, create a message that reveals your favorite number. Print that message.*/
let my_fvt_no = "12";
console.log(`My favorite number is ${my_fvt_no}.`);
//question no 10.
//single line comments 
/* multilines
comment's*/


/*question no 11.Names: Store the names of a few of your friends in a array called names. 
Print each person’s name by accessing each element in the list, one at a time.*/
let my_class_friends_names = ["raffay","asid","abbas","saad"];
//                             0    ,   1  ,   2   ,   3
console.log(my_class_friends_names[0]);
console.log(my_class_friends_names[1]);
console.log(my_class_friends_names[2]);
console.log(my_class_friends_names[3]);
/*question no 12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
 print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.*/
let greeting_raffay = " hello, " + my_class_friends_names[0] + "!";
console.log(greeting_raffay);
let message_to_raffay = (greeting_raffay + "how are you?")
console.log(message_to_raffay);
let greeting_asid = "hello, " + my_class_friends_names[1] + "!";
console.log(greeting_asid);
let message_to_asid = (greeting_asid + "how are you?")
console.log(message_to_asid);
let greeting_abbas = "hello, " + my_class_friends_names[2] + "!";
console.log(greeting_abbas);
let message_to_abbas = (greeting_abbas + "how are you?")
console.log(message_to_abbas);
let greeting_saad = "hello, " + my_class_friends_names[3] + "!";
console.log(greeting_saad);
let message_to_saad = (greeting_saad + "how are you?")
console.log(message_to_saad);
/*question no 13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, 
such as “I would like to own a Honda motorcycle.”*/
let faviourt_transport1 =["honda motorbike ", "civic car","parados",];
console.log(faviourt_transport1);
console.log(`“I would like to own a ${faviourt_transport1[0]}."`);
console.log(`“I would like to own a ${faviourt_transport1[1]}."`);
console.log(`“I would like to own a ${faviourt_transport1[2]}."`);

/* question no 14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/
let invitation_list = ["Ali","Hamza","Saad"]
console.log(`Hello, ${invitation_list[0]} " kindly join us tonight dinner."`);
console.log(`Hello, ${invitation_list[1]} " kindly join us tonight dinner."`);
console.log(`Hello, ${invitation_list[2]} " kindly join us tonight dinner."`);

/*question no 15.Changing Guest List: You just heard that one of your guests can’t make the dinner,
So, you need to send out a new set of invitations. You’ll have to think of someone else to invite.
1. Start with your program from Exercise 14. Add a print statement at the end of your program 
Stating, the name of the guest who can’t make it.
2. Modify your list, replacing the name of the guest who can’t make it with the name of the new 
Person, you are inviting.
3. Print a second set of invitation messages, one for each person who is still in your list.*/
console.log(`sorry ${invitation_list[1]}, you can't make it.`);
console.log("let remove hamza and add abbas",invitation_list.splice(1,1,"Abbas"));
console.log(invitation_list);
console.log(`Hello, ${invitation_list[1]} " kindly join us tonight dinner."`);


/* question no 16.More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.
1. Start with your program from Exercise 15. Add a print statement to the end of your program informing people
 that you found a bigger dinner table.
2. Add one new guest to the beginning of your array.
3. Add one new guest to the middle of your array. 
4.Use append() to add one new guest to the end of your list. 
5. Print a new set of invitation messages, one for each person in your list.*/
console.log(`message to ${invitation_list} "i found a bigger dinner table".`);
console.log(invitation_list.unshift("waleed"));
console.log(invitation_list.splice(2,0,`Shoaib`));
console.log(invitation_list.push("sana"));
console.log(invitation_list);
console.log(`Message to ${invitation_list} " kindly join us tonight dinner."`);

/* question no 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive 
in time for the dinner, 
and you have space for only two guests.
1.Start with your program from Exercise 16. Add a new line that prints a message saying that
 you can invite only two people for dinner.
2.Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them know you’re
 sorry you can’t invite them to dinner.
3.Print a message to each of the two people still on your list, letting them know they’re still invited.
4.Remove the last two names from your list, so you have an empty list. 
Print your list to make sure you actually have an empty list at the end of your program. */
console.log(`Message to ${invitation_list} "I have space for only two guests."`);
console.log(`sorry ${invitation_list[5]} i can't invite you to dinner`);
console.log(invitation_list.pop());
console.log(`sorry ${invitation_list[4]} i can't invite you to dinner`);
console.log(invitation_list.pop());
console.log(`sorry ${invitation_list[3]} i can't invite you to dinner`);
console.log(invitation_list.pop());
console.log(`sorry ${invitation_list[2]} i can't invite you to dinner`);
console.log(invitation_list.pop());
console.log(`${invitation_list} "You'r still invited to dinner".`);
console.log(invitation_list.pop());
console.log(invitation_list.pop());
console.log(invitation_list);

/* question no 18.Seeing the World: Think of at least five places in the world you’d like to visit.
1. Store the locations in a array. Make sure the array is not in alphabetical order.
2. Print your array in its original order.
3. Print your array in alphabetical order without modifying the actual list.
4. Show that your array is still in its original order by printing it.
5. Print your array in reverse alphabetical order without changing the order of the original list.
6. Show that your array is still in its original order by printing it again.
7. Reverse the order of your list. Print the array to show that its order has changed.
8. Reverse the order of your list again. Print the list to show it’s back to its original order.
9. Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
10. Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
let seeing_the_world = ["saudi arabia","dubai","washington","turki","Allahabad"];
console.log(seeing_the_world);
console.log(seeing_the_world.sort());
console.log(seeing_the_world);
console.log(seeing_the_world.sort().reverse());
console.log(seeing_the_world);
console.log(seeing_the_world.reverse());
console.log(seeing_the_world);


19. //Write a program that creates Objects containing these items.*/
let Ali = {
 age: "25 years",
 Gender: "Male",
 Marital_status: "Married",
} 
console.log(Ali);


/*20.Think of something you could store in a array. For example, you could make a list of 
mountains, rivers, countries, cities, languages, or anything else you’d like.
 Write a program that creates a list containing these items.*/
 let make_a_list_of_mountains = ["k-2","mounteverest",];
let rivers = ["ravi", "chanab","satluj","jahlum"];
let cities = ["okara", "sahiwal", "lahore","islamabad"];
let languages = ["punjabi","english","urdu","turkish","arabic"];
console.log(`1. mountain = ${make_a_list_of_mountains}, 2.rivers = ${rivers}, 3.cities = ${cities}, 4.languages = ${languages}.`);


/*21.They think of something you could store in a TypeScript Object.
Write a program that creates Objects containing these items.*/
let okara = {
    name_of_city : "okara",
    location : "G.T rode 127km from lahore ",
    area : "25'' km"
}
console.log(okara);
console.log(okara.name_of_city);
console.log(okara.location);
console.log(okara.area);
 
/*22.Intentional Error: If you haven’t received an array index error in one of your programs yet, 
try to make one happen.
Change an index in one of your programs to produce an index error.
 Make sure you correct the error before closing the program.*/
 let bick :string = "honda 125"
 console.log(bick==="honda 125");
 console.log(bick !=="honda 125");
 console.log(bick !== "honda 70");
 

console.log(bick !== "honda 70");
 /*23. Conditional Tests: Write a series of conditional tests.
Print a statement describing each test and your prediction for the results of each test.
Your code should look something like this:
 let car = 'subaru';
 console.log("Is car == 'subaru'? I predict True.")
 console.log(car == 'subaru')
 • Look closely at your results, and make sure you understand why each line evaluates to True or False.
 • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
 let New_car = "Civic"
 console.log(New_car=="Civic");
 console.log(New_car==="Civic");
 console.log(New_car!=="Civic");
 let num = 24
console.log(num);
console.log(num=== 24);
console.log(num==24);
console.log(num==24);
console.log(num !==24);
console.log(num<24);
console.log(num == 12);
let mobile = "oppo 16e"
console.log(mobile ==="oppo");
console.log(mobile ==="oppo 16");
console.log(mobile ==="oppo 16e");

/*24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one False result for 
each of the following:*/
//Tests for equality and inequality with strings
let test1 = "234"
console.log(test1==="234");
console.log(test1!=="234");
// Tests using the lower case function
let test2 = "khalid nawaz"
console.log(test2===test2.toLowerCase());
console.log(test2===test2.toUpperCase());
// Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to
let test3 = 30
console.log(test3);
console.log(test3===30); //t
console.log(test3!==30); //f
console.log(test3<50); // t
console.log(test3>20); // t
console.log(test3< 50 && test3 >20); // t
console.log(test3> 20|| test3<40); //t
console.log(test3<45 || test3==30);//t
// Tests using "and" and "or" operators
let test4 = 50
console.log(test4);
console.log(test4===50 && test4 <100);
console.log(test4 ==50 || test4 >20 );
//Test whether an item is in a array 
let test_array = [20, 30, 40, 50]
console.log(test_array);
console.log(test_array.includes(20));
console.log(!test_array.includes(70));


//25.Alien Colors #1: Imagine an alien was just shot down in a game.
 //Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color = "green" 
//Write an if statement to test whether the alien’s color is green. 
if (alien_color==="green") {
  console.log(true);
  
}
//If it is, print a message that the player just earned 5 points.
if (alien_color==="green") {
  console.log("the player just earned 5 points.");
  
}
//• Write one version of this program that passes the if test and another that fails. 
//(The version that fails will have no output.) 
if (alien_color==="green") {
  console.log("the player just earned 5 points.");
  
}else{
  console.log("the player just earned 10 points.");
  
}
//26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
if (alien_color==="green") {
  console.log("the player just earned 5 points.");
  
}else if (alien_color!=="green") {
  console.log("the player just earned 10 points.");
  
}
//27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
if (alien_color==="green") {
  console.log("the player just earned 5 points.");
  
}else if (alien_color==="yellow") {
  console.log("the player just earned 10 points.");
  
  
}else if (alien_color==="red") {
  console.log("the player just earned 15 points.");
}

 
//28.Stages of Life: Write an if-else chain that determines a person’s stage of life. 
//Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.else if (age>2 && age<4) {
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.   
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder. 
let age = 1
if (age < 2) {
console.log("the person is a baby.");
}else if (age>=2 && age<4) {
console.log("the person is a toddler.");
}else if (age>=4 && age<13) {
    console.log("the person is a kid.");
}else if (age>=13 && age<20) {
    console.log("the person is a teenager.");
} else if (age>=20 && age<60) {
    console.log("the person is an adult.");
}else if (age=60 || age>60) {
    console.log("the person is an elder.");
}

//29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
//if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas! 
let favorite_fruits = ["banana","apple","orange"];
if (favorite_fruits.includes("banana")) {
    console.log("its my faviourt fruit");   
}
if (favorite_fruits.includes("apple")) {
    console.log("its my faviourt fruit");   
}
if (favorite_fruits.includes("orange")) {
    console.log("its my faviourt fruit");   
}
if (!favorite_fruits.includes("mango")) {
    console.log("mango is my faviourt fruit its should be in my lunch ");   
}  
  
//30. Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//Imagine you are writing code that will print a greeting to each user after they log in to a website.
//Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, 
//would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let usernames = ["ali","admin", "abbas","saad"];
for (let i = 0; i <= 4; i++) {
  if ("admin" === usernames[i]) {
  console.log("Hello admin, would you like to see a status report?");     

}else {
  console.log(`Hello ${usernames[i]},thank you for login in again.`);
  
break}
}

//31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
console.log(usernames);
let empty_array = [];
function new_user1 () :void{
if (empty_array.length===0) {
  console.log(" We need to find some users!");
  
} 
}
 
//32. Checking Usernames: Do the following to create a program that simulates how websites ensure
//that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
const current_users = ["ali","admin", "abbas","saad","mahid"];
//• Make another list of five usernames called new_users.
const new_user      = ["sana","ali","atto","saad","noor"]
//Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used.
function includes(current_users:string,new_user:string) {

  if (current_users==new_user ) {
    console.log(`user is already taken kindly use new user `);
    
  }else{
    console.log("user is available");
    
  }
}
function checkUserNames(current_users:string[], new_user:string[]):void
{
  const lowercasedcurrentuser = current_users.map(user => user.toLowerCase())
  for (const newusers of new_user) {
    const lowercasedNewuser = newusers.toLowerCase();
    if (lowercasedcurrentuser.includes(lowercasedNewuser)) {
      console.log(`user name "${new_user}" is already exist. kindly enter new user name`);
      
    }else{
      console.log(`username "${new_user}" is available`);
      
    }
  }
}

33. /*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/
let ordinal_num= [1,2,3,4,5,6,7,8,9]
for (const number of ordinal_num) {
  let ordinal :string;
  if (number === 1) {
    ordinal ="st";
  }else if (number === 2 ) {
    ordinal = "nd";
  }else if (number === 3 ) {
    ordinal = "rd";
  }else {
    ordinal = "th"
  }
  console.log(`${number}${ordinal}`);
  
}

/*34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just 
the name of the pizza. For each pizza you should have one line of output containing a simple 
statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
 The output should consist of three or more lines about the kinds of pizza you like and 
 then an additional sentence, such as I really love pizza!*/
let pizza =["chicken pizza","macroni pizza","vagitable pizza"]
for (let i = 0; i < pizza.length; i++) {
  console.log(`my faviourt pizza is ${pizza[i]}. `);
  
  
}for (let index = 0; index < pizza.length; index++) {
  console.log(`i like ${pizza[index]}.`);
  
  
}for (let index = 0; index < pizza.length; index++) {
  console.log(`i really love ${pizza[0]}.`);
  
}
 
//36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message 
//that should be printed on the shirt. The function should print a sentence summarizing 
//the size of the shirt and the message printed on it. Call the function.
function make_shirt1(size:string, message:string) {
  console.log(`Size of shirt is: ${size}. Message on shirt: ${message}`);
  
}
make_shirt1("Small", "i love Pakistan.");


//37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with 
//a message that reads I love TypeScript. Make a large shirt and a medium shirt with the 
//default message, and a shirt of any size with a different message.
make_shirt1("Large", "I love TypeScript.");
make_shirt1("Medium", "I love TypeScript.");
make_shirt1("Extra Large", "Its a beautiful shirt.");

//38.Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. 
//Give the parameter for the country a default value. Call your function for three different cities, 
//at least one of which is not in the default country.
function describe_city(name_of_city: string, country: string) {
    console.log(`"${name_of_city}"is in ${country}.`)
} 
describe_city ('karachi', 'pakistan');
describe_city('dubai','UAE');
describe_city('Istanbul', 'turki')

//39.City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
//"Lahore, Pakistan"
function city_country(name_of_city: string, country:string) {
    console.log(`"${name_of_city}", "${country}"`);   
}
city_country("lahore", "pakistan")

function city_country2(name_of_city: string, country:string) {
    return(`"${name_of_city}", "${country}"`);
    
}
console.log(city_country2("lahore", "pakistan"));

/*40. Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return 
a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.*/
function make_album(artist:string, title:string,tracks?:number) {
    const album: { artist: string; title: string; tracks?: number } = {
        artist,
        title,
    };

    if (tracks) {
        album.tracks = tracks;
    }

    return album;
}
console.log(make_album('Rahit F.A.K','shakiyt'));
console.log(make_album('Ibrar ul Haqq','punjani kori',20));
console.log(make_album('Amrinder gill','lafaz',30));

/* 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array.*/
 function show_magicians(magicians_name: string[]) {
    for (const magician of magicians_name) {
        console.log(magicians_name);
    }
}

const magicians_name= ['Joan portal', 'David boss', 'Pent Horus'];
show_magicians(magicians_name);
console.log(show_magicians);



/* 42. Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding
 the phrase the Great to each magician’s name. Call show_magicians() to see that the list
  has actually been modified.*/
 function show_magicians1(magicians_name: string[]) {
  for (const magician of magicians_name) {
      console.log(`${magicians_name[0]} is a great magicians`);
      console.log(`${magicians_name[1]} is a great magicians,`);
      console.log(`${magicians_name[2]} is a great magicians`);
  }
}

const magicians_name1= ['Joan portal', 'David boss', 'Pent Horus'];
show_magicians(magicians_name);
console.log(show_magicians);


/*43. Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names.
 Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and 
one array with the Great added to each magician’s name.*/
const magicians_name2= ['Joan portal', 'David boss', 'Pent Horus'];
function showMagicians(magicians: string[]): void{
  for (const magician of magicians) {
    console.log(magician);
    
    
  }
  
}
function make_great(magicians: string []):string[] {
    const great_magicians:string[] = magicians.map(magicians =>`the 
    great $(magician)`);
    return great_magicians
}
const great_magicians_name: string[] = make_great(magicians_name);
console.log("original magicians");
console.log(magicians_name2);
/*44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/

function makeSandwich(...items:string[]):void {
    console.log("sandwich summary");
    if (items.length===0) {
        console.log("kindly add some items");
        
    }else{
        items.forEach((items,i)=>{
            console.log(` ${i +1}.${items}`);
            
        });
    }
    console.log(makeSandwich);
    
}
makeSandwich("turkey","chicken","chess");
makeSandwich("turkey","ham",)
/*45. Cars: Write a function that stores information about a car in a Object.
 The function should always receive a manufacturer and a model name. 
 It should then accept an arbitrary number of keyword arguments. 
 Call the function with the required information and two other name-value pairs, 
 such as a color or an optional feature. Print the Object that’s returned to make sure all
  the information was stored correctly.*/
  function creat_Car(manufacturer:string, model: string, ... properties:[string, any][]):any {
    const car: any ={
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
        
    }
    return car;
  }
    const my_car = creat_Car ("toyota", "corolla", ["color","black"], ["optional feature","sunroof"], ["speed", "130km/h"])
    console.log(my_car);
    