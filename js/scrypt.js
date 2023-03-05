const mainContainer = document.querySelector('.main-container');
const buttons = document.querySelector('.buttons-container');

window.addEventListener(
  'onload',
  fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        if (element.title === 'Self Care') {
          element.title = 'Self-Care';
        }

        const div = document.createElement('div');
        div.classList.add('action-container');
        div.innerHTML = `
          <div class="heroe-img">
            <img src="./images/icon-${element.title.toLowerCase()}.svg" alt="image" />
          </div>
          <div class="time-container">
            <h3>${element.title}</h3>
            <span>${element.timeframes.weekly.current}hrs</span>
            <img src="./images/icon-ellipsis.svg" alt="" />
            <span>Last Week - ${element.timeframes.weekly.previous}hrs</span>
          </div>
          `;

        if (element.title === 'Work') {
          div.firstElementChild.style.backgroundColor = 'hsl(15, 100%, 70%)';
        } else if (element.title === 'Play') {
          div.firstElementChild.style.backgroundColor = 'hsl(195, 74%, 62%)';
        } else if (element.title === 'Study') {
          div.firstElementChild.style.backgroundColor = 'hsl(348, 100%, 68%)';
        } else if (element.title === 'Exercise') {
          div.firstElementChild.style.backgroundColor = 'hsl(145, 58%, 55%)';
        } else if (element.title === 'Social') {
          div.firstElementChild.style.backgroundColor = 'hsl(264, 64%, 52%)';
        } else if (element.title === 'Self-Care') {
          div.firstElementChild.style.backgroundColor = 'hsl(43, 84%, 65%)';
        }

        mainContainer.appendChild(div);
      });
    })
);

buttons.addEventListener('click', (e) => {
  if (e.target.textContent === 'Monthly') {
    console.log('Monthly');
    e.target.style;
  } else if (e.target.textContent === 'Weekly') {
    console.log('Weekly');
  } else if (e.target.textContent === 'Daily') {
    console.log('Daily');
  } else return;
});

/*

timeframes
daily
: 
{current: 5, previous: 7}
monthly
: 
{current: 103, previous: 128}
weekly
: 
{current: 32, previous: 36}
[[Prototype]]
: 
Object
title
: 
"Work"

*/
