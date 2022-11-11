function one() {
 
    let aaa = new Array(8*60+45, 10*60+25, 12*60+25, 14*60+5);
    let bbb = new Array(10*60+15, 11*60+55, 13*60+55, 15*60+35); // время звонков, которые мы перевели в минуты

    let d = new Date(); // время на данных момент

    //переводим время в минуты
    let vrem = d.getHours()*60 + d.getMinutes();


    //цикл сравнивает начало и конец пар
    for ( i = 0; i < 4; i++ ) {
        if (vrem > aaa[i] && vrem < bbb[i])
        {
            let ost = bbb[i]-vrem;
            document.getElementById('root').innerText = "До конца " + (i+1) + " -й пары осталось " + ost + " минут";
        }
    }
}