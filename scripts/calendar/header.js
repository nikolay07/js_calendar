import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { createNumbersArray } from '../common/time.utils.js';
//import { openModal } from '../common/modal.js';

const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const numberOfDay = ['16', '17', '18', '19', '20', '21', '22']

export const renderHeader = () => {
    // функция должна сгенерировать разметку c днями отображаемой недели (только день недели и число в месяце)
    // полученную разметку вставить на страницу с помощью innerHTML
    // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка

    const header = document.querySelector('.calendar__header')

    const day = createNumbersArray(0, 6)
        .map(headerDay => `
        <div class="calendar__header-day" data-day="${headerDay}">${daysOfWeek[headerDay]}<div class="calendar__header-num" data-num="">${numberOfDay[headerDay]}</div></div>`).join('');

    header.innerHTML = day;

};

// при клике на кнопку "Create" открыть модальное окно с формой для создания события