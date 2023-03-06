const mainContainer = document.querySelector('.main-container');
const buttonsContainer = document.querySelector('.buttons-container');

const fetchData = async () => {
  const data = await fetch('./data.json')
    .then((response) => response.json())
    .then((data) => data);
  return data;
};

const createActionContainers = (element, timeframes) => {
  const elementTitle = element.title;
  let imagePath = elementTitle;
  if (element.title === 'Self Care') {
    imagePath = 'self-care';
  }
  const timeframe = timeframes;

  const div = document.createElement('div');
  div.classList.add('action-container');
  div.innerHTML = `
            <div class="heroe-img">
              <img src="./images/icon-${imagePath.toLowerCase()}.svg" alt="image" />
            </div>
            <div class="time-container">
              <h3>${elementTitle}</h3>
              <span>${timeframe.current}hrs</span>
              <img src="./images/icon-ellipsis.svg" alt="" />
              <span>Last Week - ${timeframe.previous}hrs</span>
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
  } else if (element.title === 'Self Care') {
    div.firstElementChild.style.backgroundColor = 'hsl(43, 84%, 65%)';
  }

  mainContainer.appendChild(div);
};

fetchData().then((dataArray) => {
  dataArray.forEach((element) => {
    createActionContainers(element, element.timeframes.weekly);
  });
});

buttonsContainer.addEventListener('click', (e) => {
  const actionContainers = document.querySelectorAll('.action-container');
  const selectedButton = document.querySelector('.selected');

  if (e.target.textContent === 'Monthly') {
    actionContainers.forEach((div) => {
      div.remove();
    });
    fetchData().then((dataArray) => {
      dataArray.forEach((element) => {
        createActionContainers(element, element.timeframes.monthly);
      });
    });

    selectedButton.classList.remove('selected');
    e.target.classList.add('selected');
  } else if (e.target.textContent === 'Weekly') {
    actionContainers.forEach((div) => {
      div.remove();
    });
    fetchData().then((dataArray) => {
      dataArray.forEach((element) => {
        createActionContainers(element, element.timeframes.weekly);
      });
    });

    selectedButton.classList.remove('selected');
    e.target.classList.add('selected');
  } else if (e.target.textContent === 'Daily') {
    actionContainers.forEach((div) => {
      div.remove();
    });
    fetchData().then((dataArray) => {
      dataArray.forEach((element) => {
        createActionContainers(element, element.timeframes.daily);
      });
    });

    selectedButton.classList.remove('selected');
    e.target.classList.add('selected');
  } else return;
});
