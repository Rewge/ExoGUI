







document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.divblock9').forEach(element => {
        element.addEventListener('click',()=>{
            const bin = element.getAttribute('Id');
        }
)})});


let prevclickCount=null;


document.addEventListener('DOMContentLoaded',()=>{

document.querySelector('.backStep').addEventListener('click',()=>{
    const box = document.querySelector('.w-layout-blockcontainer.w-container');
    const block12 = document.querySelector('.div-block-12')
    block12.style.display='none';
    document.querySelector('.step1').style.display='flex';

            box.style.display = 'flex';
            const box2= document.querySelector('.step2');
            box2.style.display='none';
            document.getElementById('steptext').innerHTML="Step 01";
            document.getElementById('stepdes').innerHTML='Select the load size<br>View the <a href="/loads-info" class="link-9">load chart</a> for more information about each option<br>';
        


})})

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.nextStep').addEventListener('click',()=>{
    const box = document.querySelector('.w-layout-blockcontainer.w-container');


            box.style.display = 'none';
            const box2= document.querySelector('.step2');
            const block12 = document.querySelector('.div-block-12')
            block12.style.display='none';
            box2.style.display='none';

            setTimeout(() => {
                block12.style.opacity = 0; // Use 1 instead of 100 for opacity
            }, 10); // 10-millisecond delay
            document.querySelector('.div-block-41').style.display='flex';
            const step4= document.querySelector('.div-block-13');
            step4.style.display ='flex';
            document.getElementById('steptext').innerHTML="Step 03";
            document.getElementById('stepdes').innerHTML="Select the time-slot you would like the junk removal team to arrive"
        
            setTimeout(() => {
                step4.style.opacity = 1; // Use 1 instead of 100 for opacity
            }, 10); // 10-millisecond delay
           


})})

document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.querySelector('iframe'); // Replace 'iframe' with a more specific selector if necessary

    // Wait for the iframe to fully load
    iframe.addEventListener('load', () => {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        const nextStepButton = iframeDocument.querySelector('.nextStep');
        if (nextStepButton) {
            nextStepButton.addEventListener('click', () => {
                const box = iframeDocument.querySelector('.w-layout-blockcontainer.w-container');
                const block12 = iframeDocument.querySelector('.div-block-12');
                const box2 = iframeDocument.querySelector('.step2');
                const divBlock41 = iframeDocument.querySelector('.div-block-41');
                const step4 = iframeDocument.querySelector('.div-block-13');

                if (block12) block12.style.display = 'none';
                if (box2) box2.style.display = 'none';
                if (divBlock41) divBlock41.style.display = 'flex';
                if (step4) step4.style.display = 'flex';
            });
        }
    });
});




document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.divblock9').forEach(element => {
        element.addEventListener('click',()=>{
            const box = document.querySelector('.w-layout-blockcontainer.w-container');
            box.style.display = 'none';
            document.querySelector('.step1').style.display='none';
            const block12 = document.querySelector('.div-block-12');
            

            block12.style.display='flex';
            setTimeout(() => {
                block12.style.opacity = 1; // Use 1 instead of 100 for opacity
            }, 10); // 10-millisecond delay
            const box2= document.querySelector('.step2');
            box2.style.display='flex';
            document.getElementById('steptext').innerHTML="Step 02";
            document.getElementById('stepdes').innerHTML="Select the date you would like the junk removal team to arrive"
            const id = element.id;
            binselected += element.id ;
            console.log(id); 
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

    




    



    document.querySelectorAll('.calendarPrevDates div:not(.prev-date):not(.past-date):not(.next-date)').forEach(element=>{
  
        element.addEventListener('click',()=>{
           
            
            if (prevclickCount===1){
                prevclick.classList.remove('clicked');
                element.classList.add('clicked');
                element.classList.add('no-hover');

             
                prevclick.classList.remove('no-hover');


                prevclick=element;
                prevclickCount=1;
            }
            else{
                prevclick=element;
        
                element.classList.add('clicked');
                element.classList.add('no-hover');
                prevclickCount=1;


             }

        }
    
    )
    }
    )


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

