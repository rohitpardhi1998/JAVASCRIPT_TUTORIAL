/* Javascirpt is client side scripting language which load first data from
 server and then represent in the client side

 javascript is event based programing language 


function add(num1,num2){
  return num1*num2;
  console.log(a);
   console.log(a);
}

-----------------------
let f = add(4,5);
console.log(f);
output:20

    
}

 <script >
        var a= "yahho baba";
          a="jsjdajdsajdsa"
          const b ="hehehe";
          let x ="fdhjfdj"
          document.write(a);
          document.write(a);
          document.write(a);
    </script>
--------------------------------------------------------
types of variable

var a ="trohit" 
var a =23;
var a= true;
var a =["aa","bb","ddd","ddd"]; // array
var a ={
    firstname:"xcc",
    lastname:"amit",           /// object in javascrt
    city:["gondia","balagaht"]      
}   
var a =null
--------------------------------------------------------------

---type of fucntion
 <script >
        var a= "yahho baba";
        var x =23        // number 
        var x =true
        var t = ["hello","world"]
        var z = {
            name:"roo"
        }

           document.write(typeof(z));
    </script>
--------------------------------------------------------
5){
    var a=0;
    var b=80;

if( a !=0){
  console.log("it is value");
}else{
  console.log("thi is not a value ");
}

}
-------------------------------------------
6){
    var a=15;

if(a <= 10){
  console.log("good morning");
  
}
else if(a < 20){
  console.log("good afternoon");
}else{
  console.log("good evening");
}
}
-------------------------------------------------

    var a=7;

if(a >=80 && a <= 100){
  console.log("first division");
  
}
else if(a >=60 && a < 80){
  console.log("second division");
}else if (a >=40 && a < 60){
  console.log("thord dvision");
}else{
  console.log("fail");
}

}
[var a=22;

a >= 10 ? console.log("grearer"):console.log("it is small");

//console.log(result);]
------------------------------------------------------
7) switch statment 
var day =3;

switch(day){
    case 0:{
        document.write("Monday");
        break;
    }
      case 1:{
        document.write("Tuesday");
        break;
    }
     case 2:{
        document.write("wednesday");
        break;
    }
      case 3:{
        document.write("thursday");
        break;
    }
      case 4:{
        document.write("friday");
        break;
    }
      case 5:{
        document.write("saturday");
        break;
    }
    case 6:{
        document.write("sunday");
        break;
    }
    default:{
        document.write("Give correct input ");
    }
    
}

var age =18;

switch(true){
    case (age >= 14 && age < 20 ):
        {
        document.write("your are minor ");
        break;
    }
    case (age >= 20 && age < 25 ):{
        document.write("you are adult ");
        break;
    }
     case (age >= 25 && age < 30):{
        document.write("your are old ");
        break;
    }
    default:{
        document.write("Give correct input ");
    }
    
}
]
--------------------------------------------------------
8) ALERT BOX 
// this is used to pop on refresh

alert("hey");
------------------------------------------------------
9)
confirm box: this is used to confirm 
it give true on click , we used this in if condition
confrim ("do u want to proceedd");

----------------------------------------------
10) Promtbox: it is used to get value from user 
var a = promt("type something hree");
document.write(a);
-------------------------------------------
11)return type fucntion 

function add(math,eng,jaca){
    var z = math+eng+jaca;
    return z;
}

var x = add(12,33,89);
document.write(x);
------------------------------------
12) onmouse enter 

<!DOCTYPE html>
<html>

<head>
    <script >
    function pp(){
        alert("this is me ");
        confirm("do u want to proceedd");
    }
        var x =23
        var x =true
        var t = ["hello","world"]
        var z = {
            name:"roo",
            ccc: "sdsd"
        }
        var a =10; var b=2
        var c =a+b;
        var v =a**b;
        var c =a+b;
        document.write(c);
        
        document.write(v);
           document.write(typeof(z));
    </script>
</head>

<body>

    <h2>Demo JavaScript in Head</h2>
    <button onclick={pp()}> click me </button>
    <button onmouseover={pp()}> click me </button>
    <button onmouseout={pp()}> click me </button>

   

</body>

</html>
--------------------------------------------------------------------
13) loops in javascript:

while loop
do/while loop
for loop
for/in loop(objects)
forEach(Array)


function 

[
var a = 1
var b;
while(a <=10){
    document.write("value is ",+a);
    a=a+2;
}

// to print table in javascript 
var i =1;
var n =3;

for(i;i<=10;i++){
    var y = n * i;
    document.write(+n+"*"+i+ " =  " +y);
}
}]
-----------------------------------------------------------------
even odd numner program 

for(var a=1;a <=100;a++){
    if(a%2 !== 0){
        document.write(a);
    }
    
}
--------------------------------
15)nested for loop
for(var a=1;a <=100;a= a+10){
  for(var j=a;j < a+10;j++){
      document.write(j);
  }
  document.write("<br>");
}
.......
 for (var a = 1; a <= 5; a++) {
                        for (var b = 1; b <= a; b++) {
                            document.write(b);
                        }
                         document.write("<br/>");
                    }

....
for(var a=1;a<=5;a++){
  for(var b=1;b<=a;b++){
   document.write(a);
}
}
-----------------------------------------------------------------------
16)Array

var a = ["a0",20,40];
for (var i=0;i<3;i++){
    document.write(a[i]);
}
------- 
var arr= new Array();
document.write(arr);  // declare array

// to get value from array through promt user

var arr = new Array(4);
for (var g =0;g<=4;g++){
    arr[g]=promt("enter a value");
}
for (var i=0;i<=4;i++){
    document.write(arr[i])
}
----------------------------------------------------------------------
17)multidimentional array 
 var arr = [
        ["harry", 19, "bcom", "andra"],
        ["aman", 39, "bcom", "honsan"],
        ["sorya", 34, "B.E", "jordan"],
        ["rahul", 22, "CA", "delhi"]
    ];

     document.write("<table border='1px'>");
    for (var i = 0; i < arr.length; i++) {
        document.write("<tr>");
        for (var j = 0; j < arr.length; j++) {
            document.write("<td>"+arr[i][j] + " </td>");
           
           
        }
         //document.write("<br/>");
          document.write("</tr>");
    }
    document.write("</table>");
 ---------------------------------------------------------------------
18) JAVASCRIPT ARRAY METHODE:

 *sort()    slice()          find()
 reverse()   splice()        findIndex() 
 pop()       isArray()        includes()
 push()       indexOf()        some()
 shift()      lastIndexOf()    forEach()
 unshift()     entries()        toString()
 concat()      every()          valueOf()
 join()        filter()         fill()


1)sort methode to sort element
 var a =["shourabh","aman","rohit","jungle"];
document.write(a);
a.sort()
document.write(a);

-------------------------
2)reverse methode 
var a =["shourabh","aman","rohit","jungle"];
document.write(a);
a.reverse()
document.write(a);
----------------
3)pop methode pop the laast element of the array
var a =["shourabh","aman","rohit","jungle"];
a.pop()
document.write(a);
o/p= [ 'shourabh', 'aman', 'rohit' ]
-----------------------
4)push it push the last element in array 
var a =["shourabh","aman","rohit","jungle"];
a.push("ajay")
document.write(a);
o/p: [ 'shourabh', 'aman', 'rohit', 'jungle', 'ajay' ]
------------------------
5) shift() and unshift function is used for remove or add value of first element in arrray

------------------------
6)Concat and Join 
join function join the array element 
var a =["shourabh","aman","rohit","jungle"];

var b =a.concat("karna","jhon")
document.write(b);
//or 
var b =["jj","faran"]
var c =a.concat(b);
document.write(c)
--------------------------------------
7)
slice ; to use make new array which is of particular size 
var a =["shourabh","aman","rohit","jungle"];

var b = a.slice(1,4);
document.write(b);

//splice
// this function is used to insert arrrya value between aarays
// splice(where to add , how many to delete ,what to add )
// also used for delete the value also 
a.splice(2,2)// delete 2 element after 2nd posistion 
var a =["shourabh","aman","rohit","jungle"];

 a.splice(2,0,"umang","golu");
 document.write(a);
-----------------------------------------------------
8)isArray this function is used to check if given alement is array of not

var arr= [10,"harsh","mayank"];
var c = Array.isArray(arr);
document.write(c);
o/p = true

-----------------------------------------------------
9)indexOf() : to search is existing array 

var a =["shourabh","aman","rohit","jungle"];

var b = a.indexOf("rohit");
document.write(b);
-----------------------------------------------------

10) include() functiuon is used to find element in array 
var a =["shourabh","aman","rohit","jungle"];

var b = a.includes("aman");
document.write(b);
-----------------------------------------------------
11) some() function in javascript used to find the va;ue in array 
every fucntion also check all the value should be clear condition only then it will give true value same as some()
we pass some check condition in in some() function 


var  a =[1,13,1,18,1,20];
var adultage= 18;

var b = a.some(checked);
document.write(b);
function checked(a){
    return a=18;
   
}
----------------------------------------------------------------
12)find() this methode is find the given elemntin array and pass the first element which pass the condition 
 findIndex() return first value of index in array 


var  a =[1,13,1,18,1,20];


var b = a.find(checked);
document.write(b);
function checked(a){
    return a>=10;
}
----------------------------------------------------------------------------------------------------
13)  filter(function) : this functon is used to find the element in array and make neww variable for filterd value which satisfied the condition 

var  a =[17,13,1,18,10,20];
var nn = 3;

var b = a.filter(checked);
document.write(b);
function checked(a){
    return a >= nn;
}

-=-----------------------------------------------------------------------------------
14)forEach( ): function in array is used to print the vlaue one bye one


var a =["aman","rahul","kumar"];

var x = a.forEach(function(key){
  console.log(key);
})
-----------------------------------------------------------------------------------------
//Object : advance version of array , which contain properties ,{} curley braces is symbol of object on javascript 


var customer ={
    fname: "rohit",
    lname:"pardhi",
    age : 23,
    city: "balaghat",
    branch:"CS",
    number :[23,44,55],
    salary: function(){
        return 2500;
    },
    fullName:function(){
        return this.fname + this.lname;
    }
}

document.write(customer.fullName());
document.write(customer);
var x = customer.fullName();
document.write(x);

----------------------------------------------------------------------------------
new way of object declaration 
var a = new Object(); // here a is object with no defined values 

//Object : advance version of array , which contain properties ,{} curley braces is symbol of object on javascript 


var customer ={
    fname: "rohit",
    lname:"pardhi",
    age : 23,
    city: "balaghat",
    branch:"CS",
    number :[23,44,55],
    salary: function(){
        return 2500;
    },
    fullName:function(){
        return this.fname + this.lname;
    },
    obj:{
        name:"rahul",
        age:30,
    }
}

document.write(customer.fullName());
document.write(customer.number[2]);
document.write(customer.obj.name);
var x = customer.fullName();
document.write(x);
----------------------------------------------------------------------
20)Array of objects:
   Array of object 

var a = [
    {
        name: "rahulk", age : 23, city:"agra"
    },
    {
        name :"karan", age :28 ,city:"bangalore"
    }
    ];
    for(var i =0;i<a.length;i++){
            document.write(a[i].name +"  "+ a[i].age+ "  " + a[i].city);
    }
=---------------------------------------------------------------------------------
Constant variable used with array and object 

const aa =[10,23,33,98,34,23];
 var  aa = [44,33,23]   not allowed in constant
aa[3]=44;   // this ways is possible for chnaging const array value 
aa[5] = 90;
document.write(aa);


--------------------------------------------------------------------------------------
// constant object 

const x = {
    name:'rohit',
    surname:'pardhi',
    age : 23
}
/*x = {
      name:'Aman',
    surname:'pardhi',            /// not possible for const object to overright value 
    age : 23
}

x.name = "aman"   // this is right way toi change cons variable 
document.write(x);
document.write(x.name);
}

=========================================================================================
22)forin() : loop used for fetching values in objcet 

const x = {
    name:'rohit',
    surname:'pardhi',
    age : 23
}

for (var key in x ){
    document.write(key +" : "+ x[key]);
}

===========================================================================================
23)Map function : it work same as loop in javascript,
it doesn't change the existing array , but it create new array and after performing some action on it like multiplying that number by 10 , adding some extra mehtode on it 
 a.map(function(){statement})

var a= [3,5,8,11];

var b = a.map(value => { return value*10});
//or

function test(x){
    return  x*10;
}
document.write(b)


//Map function with object

var arrry=[
    {fname:"rohit", lname:"sharma"},
       {fname:"aman", lname:"kumar"},
          {fname:"ajay", lname:"gupta"}
    ]
    
    var neww= arrry.map(b => { return b.fname +" " + b.lname});
    console.log(neww);
=========================================================================
22) String functions: 

//length function 

var str = "Javascript is Good Language";
//var str = "javascript";

var number = str.length;

document.write(number);

//toLowerCase

var out = str.toLowerCase();
document.write(out);

//toUpperCase

var upp = str.toUpperCase();
document.write(upp);

//includes: this function used to search the partcular value in string  , it also match case also , give true when find 

var serch = str.includes("Good");
document.write(serch);

//startsWith() : used to check first value in the string
var st = str.startsWith("Good");
document.write(st);

//endstsWith() : used to check last value in the string
var ent = str.endsWith("age");
document.write(ent);


//search(): this fundtion search the giver element in string and pass the index of that eleement 

//var str = "Javascript is Good Language";
var result= str.search("Good");
document.write(result);


//match(): this fundtion search the giver element in string and make the array  of that element found how many times in string 

var str1 = "Javascript is Good is  Language is noe free ";
var result= str1.match(/is/g);  // given in regular function 
document.write(result);


//indexOf(): function same as in array and serach function in string give index of first found elemenent in string

//var str = "Javascript is Good is  Language is noe free ";
var result= str.indexOf("Good");  // given in regular function 
document.write(result);

//lastIndexOf(): function same as in array and serach function in string give index of last found elemenent in string

//var str = "Javascript is Good is  Language is noe free ";
var result= str.lastIndexOf("is");  
document.write(result);



//replace(): it takes two paramater and replace old word with new word

//var str = "Javascript is Good is  Language is noe free ";
var result= str.replace("Javascript","php");  
document.write(result);

//trim(): it removes the white spaces from right of left side

var str4 = "Javascript is Good is  Language i    s noe free ";
var result= str4.trim(); 
document.write(result);


//charAt(): it used to find the value at perticular position 

var str5 = "Javascript is Good is  Language s noe free ";
var result= str5.charAt(5); 
document.write(result);

//concat(): it used to find the value at perticular position 

var str5 = "Javascript is Good is Language s noe free ";
var st6= "my name "
var result= str5.concat(st6); 
document.write(result);


//split(): it used to spit string aacording to spaces or scharacter 

var str5 = "Javascript is Good is  Language s noe free ";

var result= str5.split(" ");  // with i also we can do  
document.write(result);


//split(): it used to spit string aacording to spaces or scharacter 

var str5 = "Javascript is Good is  Language s noe free ";

var result= str5.split(" "); 
document.write(result);


//repeat(times): it used to repeat the string

var str5 = "Javascript is Good is  Language s noe free ";

var result= str5.repeat(2); 
document.write(result);


//slice(): it is same as array slice , used to print perticular string

var str5 = "Javascript is Good is  Language s noe free ";
var result= str5.slice(2,8);  // if we pass 0 it return all , if -1 we gave it will pass only last string character

document.write(result);


//substr(): same as slice it return value from perticular postion 

var str5 = "Javascript is Good is  Language s noe free ";
var result= str5.substr(2);  // if we pass 0 it return all , if -1 we gave it will pass only last string character
// or var result= str5.substr(2,5);
document.write(result);


//toString(): used to make any value number to string 

var tt=10;
var res=tt.toString();
document.write(res + 20);


//reverse a string program :
// program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);

========================================================================================================
23) Number Methode : 
=============================

number()
parseInt()
parseFloat()
isFinite()
isInteger()
toFixed(x)
toPrecision(x)

//number related methodes
//number: to conever string to number 
var a = "88"
var num =Number(a);
document.write(num)

//-----------------

// parseInt: to conever decimal into integer
var gg = "20  years "
var a = 34.44
var num =parseInt(a);
var num1 =parseInt(gg);
document.write(num)
document.write(num1);


//---------------------
// parseFloat: to conever decimal into integer 
var a = 34.44
var num =parseFloat(a);
document.write(num)


//-----------------
//isFinite(): is check condition if number is finite

var a = 1009;
var num = isFinite(a);
document.write(num);


//-----------------
//isInteger(): is check condition if number is ineteger

var a = 1009.99;
var c = "9999"
var num =Number.isInteger(a);
var num3 =Number.isInteger(c);
document.write(num); // folat value 
document.write(num3); //not integer

========================================================================

24)  Math function: 
ceil(x); floor(x)
round(x) trunc(x)
max(x,y,z..) min(c,ca,f,...,n)
sqrt(x)  cqrt(x)
pow(x,y) random() abs(x) PI


//--------------
//ceil():it only when value is decimal, it give always value upword

var a=Math.ceil(5.4);//give upper vlaue always
document.write(a);

//-------------------------
//floor():it only when value is decimal, it give always value downword

var a=Math.floor(5.4);//give down vlaue always
document.write(a);


//-------------------------
//round():it return nearest integer

var a=Math.round(5.4);
document.write(a);

var str5 = Math.random()*100;
document.write(str5);


//-------------------------
//trunc():it retunr only interger value

var a=Math.trunc(5.4);
document.write(a);

//-------------------------
//max(x,y,z):it return maximum 

var a=Math.max(5,6,89,1);
document.write(a);

//-------------------------
//min(x,y,z):it return maximum 

var a=Math.min(5,6,89,1);
document.write(a);


//-------------------------
//sqrt():it return sqare root 

var a=Math.sqrt(4);
document.write(a);


//-------------------------
//cbrt():it return cube root 

var a=Math.cbrt(125);
document.write(a);


//-------------------------
//pow(x,y):it return power of 

var a=Math.pow(2,5);
document.write(a);

//-------------------------
//random():it  give random number of 

var a=Math.random();
document.write(a);
======================================================================================
25) Date Methodes : 

getDate()	Returns the day of the month (from 1-31)
getDay()	Returns the day of the week (from 0-6)
getFullYear()	Returns the year
getHours()	Returns the hour (from 0-23)
getMilliseconds()	Returns the milliseconds (from 0-999)
getMinutes()	Returns the minutes (from 0-59)
getMonth()	Returns the month (from 0-11)
getSeconds()	Returns the seconds (from 0-59)
getTime()	Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
getTimezoneOffset()	Returns the time difference between UTC time and local time, in minutes
getUTCDate()	Returns the day of the month, according to universal time (from 1-31)
getUTCDay()	Returns the day of the week, according to universal time (from 0-6)
getUTCFullYear()	Returns the year, according to universal time
getUTCHours()	Returns the hour, according to universal time (from 0-23)
getUTCMilliseconds()	Returns the milliseconds, according to universal time (from 0-999)
getUTCMinutes()	Returns the minutes, according to universal time (from 0-59)
getUTCMonth()	Returns the month, according to universal time (from 0-11)
getUTCSeconds()	Returns the seconds, according to universal time (from 0-59)
getYear()	Deprecated. Use the getFullYear() method instead
now()	Returns the number of milliseconds since midnight Jan 1, 1970
parse()	Parses a date string and returns the number of milliseconds since January 1, 1970
setDate()	Sets the day of the month of a date object
setFullYear()	Sets the year of a date object
setHours()	Sets the hour of a date object
setMilliseconds()	Sets the milliseconds of a date object
setMinutes()	Set the minutes of a date object
setMonth()	Sets the month of a date object
setSeconds()	Sets the seconds of a date object
setTime()	Sets a date to a specified number of milliseconds after/before January 1, 1970
setUTCDate()	Sets the day of the month of a date object, according to universal time
setUTCFullYear()	Sets the year of a date object, according to universal time
setUTCHours()	Sets the hour of a date object, according to universal time
setUTCMilliseconds()	Sets the milliseconds of a date object, according to universal time
setUTCMinutes()	Set the minutes of a date object, according to universal time
setUTCMonth()	Sets the month of a date object, according to universal time
setUTCSeconds()	Set the seconds of a date object, according to universal time
setYear()	Deprecated. Use the setFullYear() method instead
toDateString()	Converts the date portion of a Date object into a readable string
toGMTString()	Deprecated. Use the toUTCString() method instead
toISOString()	Returns the date as a string, using the ISO standard
toJSON()	Returns the date as a string, formatted as a JSON date
toLocaleDateString()	Returns the date portion of a Date object as a string, using locale conventions
toLocaleTimeString()	Returns the time portion of a Date object as a string, using locale conventions
toLocaleString()	Converts a Date object to a string, using locale conventions
toString()	Converts a Date object to a string
toTimeString()	Converts the time portion of a Date object to a string
toUTCString()	Converts a Date object to a string, according to universal time
UTC()	Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time
valueOf()	Returns the primitive value of a Date object

 // Use of Date.now() method   //  var d = Date(Date.now());
  var d = new Date();
 
  // Converting the number of millisecond
  // in date string   
  a = d.toString()
 
  // Printing the current date                   
  document.write("The current date is: " + a)

var dd = new Date();
var a= dd.toString();
console.log(a)

if(a <= 10){
  console.log("good morning");
}
else if(a < 20){
  console.log("good afternoon");
}else{
  console.log("good evening");
}

================================date instances =======================
var d = new Date();

var x = d.toString();
var y = new Date("2012-05-11T17:56:00+10:00")

var y = new Date(2019,7,12,10)
document.write(x);
document.write(y);
//javascript mdn mozila docuemnt for date 
*/


document.write("hello bo-sfsf");