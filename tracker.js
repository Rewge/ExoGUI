let FinalRecord=" ";

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



