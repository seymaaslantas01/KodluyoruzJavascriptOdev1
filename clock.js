let userName = prompt('Lütfen Adinizi Giriniz.')
document.querySelector('#userName').innerHTML = userName

const showTime = () => {
    let x = new Date()
    let time = x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds() ;
    //let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    //let day = days[x.getUTCDay()]
    let day = x.getDay();

    switch (day) {
        case 0 : 
            day = "Pazar"
            break;
        case 1 : 
            day = "Pazartesi"
            break;
        case 2 : 
            day = "Salı"
            break;
        case 3 : 
            day = "Çarşamba"
            break;
        case 4 : 
            day = "Perşembe"
            break;
        case 5 : 
            day = "Cuma"
            break;
        case 6: 
            day = "Cumartesi"
            break;
    }

    document.querySelector('#time').innerHTML = time;
    document.querySelector('#day').innerHTML = day;
    setTimeout(showTime,1000)
}
