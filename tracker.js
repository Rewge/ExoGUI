let FinalRecord=" ";


    document.addEventListener('DOMContentLoaded',()=>{
        document.querySelectorAll('.select.w-button').forEach(element=>{
            element.addEventListener('click',()=>{
                
                const step4= document.querySelector('.div-block-13');
                step4.style.display ='none';

                FinalRecord += " Time selected: " + element.id ;
                console.log(FinalRecord);

                const step5 = document.querySelector('.divblock14');
                step5.style.display ='flex';
    
    
            })
           
    
    
        })
    
    
    })

    document.querySelector('.div-block-24').addEventListener('click',()=>{
        FinalRecord += " Name : " + document.getElementById("name").value;
        FinalRecord += " Phone Number : " + document.getElementById("email").value;
        FinalRecord += " Email : " + document.getElementById("email-2").value;
        FinalRecord += " Address : " + document.getElementById("field").value + " " +  document.getElementById("field-2").value + " " + document.getElementById("field-3").value;
        FinalRecord += " Additional Requests : " + document.getElementById("request").value;
        console.log(FinalRecord);
    




    })
    
   
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.divblock9').forEach(element => {
        element.addEventListener('click',()=>{
            const id = element.id;
            console.log(id); 
                
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

document.querySelector('.nextStep').addEventListener('click',track)

function track(){
    FinalRecord += "Date : "+ (document.querySelector('.clicked').innerHTML);
    FinalRecord += " Month : " + months[date.getMonth()];

    console.log(FinalRecord);
    console.log()
}



