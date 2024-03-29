let confirmation ="Bin(s) Selected: ";

document.querySelectorAll('.selectButton').forEach(bin => {
    bin.addEventListener('click', function() {
        const selectionMenu = document.querySelector('.selectionmenu');
        const step2 = document.querySelector('.step2');
    
    
        selectionMenu.style.display = 'none';
    
    
        step2.style.display = 'flex'; // Or 'block', depending on your layout
    
    
        confirmation +=  + bin.getAttribute('value') + ", " ;
        console.log(confirmation); // This will log the value attribute of the clicked div
    });
});




document.querySelector('.BookButton').addEventListener('click', function() {
    const step1 = document.qu3117erySelector('.step1');
    


    step1.style.display = 'none';


  
});


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