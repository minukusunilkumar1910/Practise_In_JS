// let num =1056;
// let c=0;
// while(num>0)
// {
//    let last=num%10;
//    c+=last;
//    num=Math.floor(num/10);
// }
//  console.log(c);
  

//  let number =3;
//  let fact=1;
//  for(let i=1;i<=number;i++)
//  {
//   fact =fact*i;
//  }
// console.log(fact);

// let arr=[1,3,4,5,6,74,8]
// let max=0;
// for(let i=0;i<arr.length;i++)
//    {
//    if(arr[i]>max)
//    {
//       max=arr[i];
//    }
//    }
//    console.log(max);


// TODO GAME  
// let todo=[];
// let req=prompt("Enter your request to todo list");

// while(true)
// {
//    if(req=='quit')
//    {
//       console.log('quitting...');
//       break;
//    }
//    if(req=='list')
//    {
//       for(let i=0;i<todo.length;i++)
//       {
//          console.log(i,todo[i]);
//       }
//    }
//    else if(req=='add')
//    {
//       let task=prompt("Enter your task into todo list");
//       todo.push(task);
//       console.log('added your task');
//    }
//    else if(req=='remove'){

//       let idx=prompt("Enter the number to remove the task");
//       todo.splice(idx,1);
//       console.log('removed your task');
//    }
//    else
//    {
//       console.log('fake Request');
//    }
// req=prompt('choose your request')

// }




//  function avg(n1,n2,n3)
//  {
//    tavg=Math.floor((n1+n2+n3)/3);
//    console.log(`the average of three numbers ${n1},${n2},${n3} is ${tavg}`);
//  }
//  avg(2,22,12);
 

//  function mt(n)
//  {
//    for(let i=n;i<=10*n;i+=5)
//    {
//       console.log(i);
//       // console.log(`${n} X ${i} = ${n*i}`);
//    }
//  }
//  mt(5);



// //  RETURN  
//  function Sum(a,b)
//  {
//    return a+b;
//  }

//  let result=Sum(42,33); 
//  console.log(result);


//  function oneTon(n)
//  {
//  let sum=0;
//  for(let i=1;i<=n;i++)
//  {
//   sum=sum+i;
// }

// return sum;
//  }
// console.log(oneTon(10));
//SCOPE
// ARROW FUNCTIONS
// THIS KEYWORD
// TRY & CATCH
// SETINTERVAL
// SETTIMEOUT


// let id=setInterval(  ()=>{ console.log(`hello`);   }, 4000 );
// to stop this
//  clearInterval(id);
 
//  let id1=setInterval(()=>{console.log(`sunil`);},3000);


// ASSIGNMENT
//1 
// const sqr=(n) =>
//   {
//   console.log(`The square root of ${n} is ${n*n}`);
// };
//   sqr(3);
// //2
//   let id=setInterval(()=>{console.log("Hello");}, 2000 );

//   setTimeout(()=>{clearInterval(id);console.log("stopped...");},10000);
 

// //3
// const arrayAverage=(a,b,c)=>{
//   return Math.floor((a*b*c)/3);
// };
// console.log(arrayAverage(2,2,2));

// const even=(n)=>{
//   if(n%2==0)
//   {
//     return 'Even';
//   }
//   else
//   {
//     return "not even";
//   }
// };

// console.log(even(10));


//FOR EACH 
// let arr=[{
//   name:"vinod",
//   marks:92
// },{
//   name:"charan",
//   marks:96
// },{
//   name:"sunil",
//   marks:90
// }]

// let print =function(el)
// {
//   console.log(el);
// }
// arr.forEach(print);

// arr.forEach(function(el){
//   console.log(el);
// })

// arr.forEach((el)=>{
//   console.log(el.name);
// })

// // MAP
// let num =[1,2,3,4];

// let double = num.map((el)=>{
//   return el*2;
// })
// console.log(double);

// let avg=arr.map((el)=>
// {
//   return el.marks/10;
// })
// console.log(avg);
// // FILTER
// let even = num.filter((el)=>{
//   return el%2==0;
// })
// console.log(`Even are ${even}`);


// let nums = arr.map((el)=> {
//   return el > 5; 
// })
// console.log(`the elements are ${nums}`);

// //REDUCE
// let final=num.reduce((res,el)=>{
//   return res+el; 
// }) 
// console.log(`the result is ${final}`);


// // ASSIGNMENT
// //1
// let numbers=[10,20,30,40,50,1]

// let val=numbers.every((el)=> 
//   el%10 == 0);
// console.log(val);

// let min =numbers.reduce((min,el)=>{
//   if(min>el)
//   {
//     return el;
//   }
//   else
//   {
//     return min;
//   }
// })
// console.log(min);

// // SPREAD OPERATOR
// let char=[..."hello"];
// let char1=[..."welcome"];
// let newchar=[...char,...char1]

//REST
// DESTRUCTING

// ------------------------------------------------------------------------------------------------------------------------
//                                                   DOM (Document Object Model)
//                                         RANDOMCOLOR GENERATOR

// let btn =document.querySelector('button');


// let rgb=()=>{

//    let red=Math.floor(Math.random()*255)
//    let blue=Math.floor(Math.random()*255)
//    let green=Math.floor(Math.random()*255)
   
//    let total=`rgb(${red},${blue},${red})`;
//    return total;
// }
 
// btn.addEventListener("click",()=>{
//    let h3 =document.querySelector('h3');
//    let randomcolor = rgb();
//    h3.innerText=randomcolor;

//    let div=document.querySelector('div')
//    div.style.backgroundColor=randomcolor;
// })
  

// let box=document.querySelector('div')

// box.addEventListener("mouseenter",()=>
// {
//    let p =document.querySelector('p')
//    console.log("mouse entered ");
// })
// box.addEventListener("click",()=>
//    {
     
//       console.log("clicked ");
//    })

// let color = document.querySelector('.color')

// color.addEventListener("click",function()
// {
 
//     this.style.backgroundColor='blue';
// })
   

function factorial(n) {
    if (n < 0) {
        return "Factorial not defined for negative numbers.";
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Example usage
let number = 5;
console.log("The factorial of", number, "is", factorial(number));

                                                   // TODO APP

let inp=document.querySelector('input')
let btn=document.querySelector('button')
let ul=document.querySelector('ul')

btn.addEventListener('click',()=>
{
   let item=document.createElement('li')
   item.innerText=inp.value;
   ul.appendChild(item)
   inp.value=''

   let delbtn=document.createElement('button')
   delbtn.innerText='Remove'
   delbtn.classList.add('remove')
   item.appendChild(delbtn)
})
let delbtn = document.querySelector('.remove')
for(dlbtn of delbtn)
{
   dlbtn.addEventListener("click",function()
      {
       let par=this.parentElement;
       console.log(par.innerText);   
      });
      
}

