const year = document.getElementById('year')
const month = document.getElementById('month')
const day = document.getElementById('day')
const years = document.getElementById('result-year')
const months = document.getElementById('result-month')
const days = document.getElementById('result-day')
const button = document.getElementById('btn')

button.addEventListener(('click'),(e) => {
    const now = new Date();
    const nowyear = now.getFullYear()
    const nowmonth = now.getMonth() + 1
    const nowday = now.getDate() 

    if(year.value <= nowyear){
        const age_y = nowyear - year.value
        years.innerHTML = age_y;
        
    }
    else if(year.value > nowyear){
        alert("Siz noto'g'ri yil kiritingiz")
    }

    if(nowmonth >= month.value){
        const age_m = nowmonth - month.value
        months.innerHTML = age_m;
        
    }
    else if(nowmonth < month.value){
        const age_m = 12 + nowmonth - month.value
        months.innerHTML = age_m;

    }
    if(nowday >= day.value){
        const age_d = nowday - day.value
        days.innerHTML = age_d;
        
    }
    else if(nowday < day.value){
        const age_d = -(nowday - day.value)
        days.innerHTML = age_d;

    }
    
})