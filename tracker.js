let FinalRecord=" ";
let binselectedfinal = document.getElementById('Bin');
let timeselectedfinal = document.getElementById('Time');
let binselected = " ";
let timeselected = " ";
binselectedfinal.disabled=true;



document.querySelector('nav-button.w-nav-button').addEventListener('click',()=>{
    setTimeout(() => {
       const step1= document.querySelector('.step1');

       step1.style.display='flex';
       step1.style.opacity=1;
    }, 10);

}
)

console.log("New1");
timeselectedfinal.disabled = true;






    document.addEventListener('DOMContentLoaded',()=>{
        document.querySelectorAll('.select.w-button').forEach(element=>{
            element.addEventListener('click',()=>{
                const step4= document.querySelector('.div-block-41');
                step4.style.display ='none';

                const steplast = document.querySelector('.menu-wrapper.two');
                    steplast.style.display='none';
                    

                   
               
               


                
              
                timeselected +=" at " + element.id ;
                console.log(FinalRecord);

                const step5 = document.querySelector('.pony');
                step5.style.display ='flex';
                binselectedfinal.value= binselected;
                timeselectedfinal.value =timeselected;
    
            })
           
    
    
        })
    })
    
    
    


    



const months= [
    "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December"
]

const bins =[
 "7-yard",
 "10-yard",
 "12-yard",
 "20-yard",
 "30-yard",
 "40-yard"

]

document.querySelector('.nextStep').addEventListener('click',()=>{

    timeselected += document.querySelector('.clicked').innerHTML + ' ' +  months[date.getMonth()];
    console.log(69);
    console.log()
})



