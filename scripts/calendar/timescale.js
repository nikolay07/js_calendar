// import { getDateTime } from '../common/time.utils.js';
import { createNumbersArray } from '../common/time.utils.js';

export const renderTimescale = () => {
    // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
    // полученную разметку вставьте на страницу с помощью innerHTML
    const timeScale = createNumbersArray(0, 24)
        .map(elem =>
            `<div class="calendar__time-scale_hours" id="${elem < 10 ? "0" + elem : elem}:00">${elem < 10 ? "0" + elem : elem}:00</div>`)
        .join('');
    console.log(timeScale);
    document.querySelector('.calendar__time-scale').innerHTML = timeScale;
};