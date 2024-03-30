
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.divblock9').forEach(element => {
        element.addEventListener('click',()=>{
            const box = document.querySelector('.w-layout-blockcontainer.w-container');
            box.style.visibility = 'hidden';
            const box2= document.querySelector('.step2');
            box2.style.display='flex';
        }
        )
        
        })
        


})



const date = new Date();

const renderCalender = () => {
    const firstDayIndex = date.getDay();
const prevLastDay= new Date(date.getFullYear(),date.getMonth(),0).getDate();

const lastDate = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
console.log(lastDate);

const monthDays = document.querySelector('.calendarPrevDates');
const month = date.getMonth();

const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();

const nextDays = 7-lastDayIndex-1;
console.log(month);

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

document.querySelector('.calendarMonth').innerHTML = months[date.getMonth()];
document.querySelector('.calendarDate').innerHTML = new Date().toDateString();

let days = "";

for(let x=firstDayIndex ; x>0;x--){
    days+= '<div class="prev-date">'+(prevLastDay+1-x)+'</div>';
}

for (let i= 1; i<=lastDate ; i++){
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth() ){
        days+= '<div class="today">' + i + '</div>';
    }
    else if(i< new Date().getDate() && date.getMonth()=== new Date().getMonth()){
        days += '<div class="past-date">' + i + '</div>';
    }
    else {
days +=  '<div>'+i+'</div>';
}
}



for(let j=1;j<=nextDays;j++){
    days+= '<div class="next-date">' + j +'</div>'; 
}
monthDays.innerHTML = days;

}




document.querySelector('.arrow').addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1);
    renderCalender();


});

document.querySelector('.arrow2').addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1);
    renderCalender();


});

renderCalender()