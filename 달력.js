'use strict';
const currentDate = document.querySelector('.current-date');
const currentDate2 = document.querySelector('.current-date2');
const daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'Agust', 'September', 'October', 'November', 'December'];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
  lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last day of month
  lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
  lastDateofLastMonth = new Date(currYear, currMonth,0).getDate(); // getting last day of previous month
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
    // adding active class to li if the current day, month, and year matched
    let isToday = i === date.getDate() && currMonth === new Date().getMonth()
      && currYear === new Date().getFullYear() ? 'active' : '';
    liTag += `<li class="${isToday}">${i}</li>`;
  }
  
  for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currMonth]}`;
  currentDate2.innerText = `${currYear}`;
  daysTag.innerHTML = liTag;
}
renderCalendar();

// prevNextIcon.forEach(icon => {
//   icon.addEventListener('click', () => {
//     currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

//     if (currMonth < 0 || currMonth > 11) { // if current month is ledd than 0 or greater than 11
//       // creating a new date of current year & month and pass it as date value
//       date = new Date(currYear, currMonth);
//       currYear = date.getFullYear(); //updating current year with new date month
//       currMonth = date.getMonth(); // updating current month with new date month
//     } else { // else pass new Date as date value
//       date = new Date();
//     }
//     renderCalendar();
//   });
// });


for (let index = 0; index < prevNextIcon.length; index++) {
  prevNextIcon[index].addEventListener('click', () => {
    currMonth =  prevNextIcon[index].id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) { // if current month is ledd than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear(); //updating current year with new date month
      currMonth = date.getMonth(); // updating current month with new date month
    } else { // else pass new Date as date value
      date = new Date();
    }
    renderCalendar();
  });
}