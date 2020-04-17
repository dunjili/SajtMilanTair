
function resetCalendar() {
    document.getElementById('title').innerText = '';
    document.getElementById('days').innerHTML = '';
}


function fillCalendar(year, month) {

    resetCalendar();

    let nameOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let nameOfChosenMonth = nameOfMonths[month-1];
    let titleForTitle = nameOfChosenMonth +' - '+ year;
    document.getElementById('title').innerText = titleForTitle;

    let firstDateOfChosenMonth = new Date(year, month-1, 1);
    let lastDateOfChosenMonth = new Date(year, month, 0);

    let firsDayInChosenMonth = firstDateOfChosenMonth.getDay();
    if (firsDayInChosenMonth == 0) firsDayInChosenMonth = 7;

    let lastDayInChosenMonth = lastDateOfChosenMonth.getDay();
    if (lastDayInChosenMonth == 0)  lastDayInChosenMonth = 7;

    let numberOfDaysInMonth = lastDateOfChosenMonth.getDate();

    let days = [];

    for(let i=1; i<firsDayInChosenMonth; i++) {
        days.push('');
    }

    for(let y=1; y<=numberOfDaysInMonth; y++) {
        days.push(y);
    }

    for(let z=lastDayInChosenMonth; z<7; z++) {
        days.push('');
    }

    let weeks = [];

    while (days.length>0) {
        let nextWeek = days.splice(0, 7);
        weeks.push(nextWeek);
    }

    addDatesToCalendar(weeks);

}

function addDatesToCalendar(weeks) {
    for(let week of weeks) {
        let tableRow = document.createElement('tr');

        for(let day of week) {
            let tableData = document.createElement('td');
            tableData.innerText = day;
            tableRow.appendChild(tableData);
        }

        document.getElementById('days').appendChild(tableRow);
    }
}

window.addEventListener('load', main);

function main() {
    let nowDate = new Date();
    fillCalendar(nowDate.getFullYear(), nowDate.getMonth()+ 1);
}

