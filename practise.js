//JAVASCRIPT LANGUAGE
document.write("Hello");
// alert("this is my new page");
console.log("I am from console");

//-------------------------------------------------------------------------------------------------
//variables
let value=15
console.log(value);
let name ="sunil";

 //-------------------------------------------------------------------------------------------------

let adress,zip,state;
adress="tirupati";
zip=517507;
state="ap";
console.log(adress,zip,state);//writing the variables besides
name="minukusunilkumar";
console.log(name);

//-------------------------------------------------------------------------------------------------

//let vs const vs var
let nam="sunilkumar";//let and var almost have similar properties
var num=4;
//we have to initiliase it in one place at once 
const place="tirupati";//we cannot reassign it

console.log(nam);
console.log(num);
console.log(place);
//--------------------------------------------------------------------------------------------------
//STRING CONCATINATION
let firstname="sunil";
let lastname="kumar";
const fullname=firstname+" "+lastname;
console.log("My Full name is :"+firstname+" "+lastname);
//another methhod
console.log(fullname);

// -------------------------------------------------------------------------------------------------
//data types(primitive data types)
//1.string
const string="sunil";
//2.boolean
const val=true;
//3.null 4.number 5.undefined 6.symbol
const val1=null;
console.log(typeof(string));
console.log(typeof(val));
console.log(typeof(val1));
// -------------------------------------------------------------------------------------------------
// object data types(Arrays,Functions and Objects)

//ARRAYS
const fruit1="apple";
const fruit2="berry";
const fruit3="cherry";
const fruit4="banana";
const fruit5="mango";

let fruitlist=["apple","berry","cherry","banana","mango"];
console.log(fruitlist);
console.log(fruitlist[4]);

let fav =fruitlist[1];
console.log(fav);

fruitlist[3]="grapes";//updation of array
console.log(fruitlist);

// --------------------------------------- FUNCTIONS----------------------------------------------------------
//
// declaration

function hello()
{
  console.log("hello");
  console.log("welcome");    //logic
  console.log("thanks");
}

hello();
//after 100 lines
hello();          //u can use 1 function at multiple cases & times

// TO REDUCE MULTIPLE FUN CASES WE USE PARAMETERS & ARGUMENTS
function hellovinay()
{
   console.log("hello vinay");
}
function hellovijay() {
   console.log("hello vijay");
}

hellovinay();
hellovijay();
// -------to overrcome this we use p&a
const vijay="vijay";
function greet(name)
{
   console.log("hello"+" "+name);
}

//greet vinay
greet(7);    //param is taken as per reference u given 
//greet vijay
greet(vijay);// i stored string in var and i passed it 
greet("vijay");

//-----two params
function greet(name,rollno)
{
   console.log("hello"+" "+name+"your no is "+rollno);
}
greet("sunil",12);
//**************************************************************************************************************************************************************************/
const wallheight =80;
function cal(value)
{
   return("The value in "+value*2.54+" cm");
   console.log("hello");
   console.log("hello");
   console.log("hello");  //after return the value the fun didn't print anything
   console.log("hello");
   console.log("hello");
   console.log("hello");

}
const width =cal(100);  // if your storing fun in variable, we must use the return keyword in the function
const height =cal(wallheight);
 
let array_cal=[width,height];
console.log(array_cal);
//*********************************************************************function expressions**********************************************************************************/
// 


function add(num1,num2)
{
   return num1+num2;
}
const firstval=add(10,2);
const secondval=add(5,5);
//function expression
const thirdval=function(num1,num2)
{
   return num1+num2;
};

const result=[firstval,secondval,thirdval(3,4)];//function calling in array

console.log(result);
// **Arrow functions***
const addition=(num1,num2)=>num1*num2;
//------------------------------------------------------------------------------OBJECTS--------------------------------------------------------------------------
const person = {
   name:"sunil",
   no:23,
   lan:["c","java","python"],
   greets:function(){console.log("helloo");},
   educated:true,

}
console.log(person.educated);
 person.greets(); 

//------------------------------------------------------------------------------ConditionalS--------------------------------------------------------------------------
// <=,>=,==,!=
// === and !== it checks values and type also

//------------------------------------------------------------------------------Logocal operators--------------------------------------------------------------------------
// && ||

// switch case use

const dice=5;
// if(numb===1)
// {
//    console.log("You got one");
// }
// else if(numb===2)
//    {
//       console.log("You got two");
//    }
//    else if(numb===3)
//       {
//          console.log("You got three");
//       }
//       else if(numb===4)
//          {
//             console.log("You got four");
//          }
//          else if(numb===5)
//             {
//                console.log("You got five");
//             }
//             else if(numb===6)
//                {
//                   console.log("You got six");
//                }

switch(dice)
{
   case 1:
      {
         console.log("1");
         break;
      }
      case 2:
         {
            console.log("2");
            break;
         }
         case 3:
            {
               console.log("3");
               break;
            }
            case 4:
               {
                  console.log("4");
                  break;
               }
               case 5:
                  {
                     console.log("5");
                     break;
                  }
                  case 6:
                     {  
                        console.log("6");
                        break;
                     }
                     default:
                        console.log("You didnt role the dice");
}
//------------------------------------------------------------------ LOOPs-----------------------------------------------------------------------
//while loop
//Do-While Loop
// For Loop
let i;
   for(i=0;i<=10;i++)
   {
      console.log("20"+"x"+i+"="+i*20);
      
   }
let i;
   for(i=0;i<=10;i++)
   {
      console.log("20"+"x"+i+"="+i*20);
      
   }
   // ---------------------------------------------------------String properties & methods(String handling functions)----------------------------

   let string1="sunilkumar";
   console.log(string1.length);
   console.log(string1.toUpperCase());
   console.log(string1);
   // ----------------------------------------------Truthy and Falsey--------------------------------------------------------------------
   // truthy =sometext in value
   // falsey ="",``,'',0,-0,null,false,undefined.
   let text="some text";
   if(text)
   {
      console.log("it is Truthy");
   }
   else{
      console.log("It is Falsey");
   }
//--------------------------------------------------------Operators----------------------------------------------------------
//URINARY OPERATORS- typeof,++,-- 
//BINARY OPERATORS- +,-,*,%,/

//                     TERNARY OPERATOR
//syntax:-
// codition ?(runs if it is true):(runs if it is false)
let _text="sunil";
_text?console.log(`it is true ${_text}`):console.log(`it is false`);

// ---------------------------------------------------------SCOPE OF VARIABLES---------------------------------------------------------
//GLOBAL SCOPE
//LOCAL SCOPE
const globalnum=10;

function sum(num1,num2)
{
   return num1+num2+globalnum;
}
let t=sum(3,4);
console.log(t);

   // 1 ==================================================================problems================================================================
 const first_name=["vinay","vinod","vishnu"];
 let last_name="yadav";

 const newarray=[];

 for(let i=0;i<first_name.length;i++)
 {
   let totalname=`${first_name[i]} ${last_name}`;
   newarray.push(totalname);
 }
 console.log(first_name);
 console.log(newarray);
  // 2 ==================================================================problems================================================================
const food=[20,42,34,55,64];
const medicine=[120,130,140,150,100];

function total(arr)
{
   let total=0;
   for(let i=0;i<arr.length;i++)
   {
         total =total+arr[i];
         if(total>500)
         {
            console.log("your spending too much that is "+total);
            return total;
         }
   }
   console.log("your budget is good that is "+total);
   return total;
}
let toatlfoodcost=total(food);
let totalmedicine=total(medicine);

const totalallbills={   //storing in object
   food:toatlfoodcost,
   medicine:totalmedicine
}

// console.log(toatlfoodcost);
// console.log(totalmedicine);
console.log(totalallbills);
// Json array
const suggestions=[{name:"iphone",price:50},
   {name:"poco",price:40},
   {name:"nothing",price:45}]
   for(let i=0;i<suggestions.length;i++)
   {
      let suggest =suggestions[i];
      console.log(suggest.name);
   }
