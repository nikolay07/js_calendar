import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { createNumbersArray } from '../common/time.utils.js';
//import { openModal } from '../common/modal.js';

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const daysOfMonth = ['22', '23', '24', '25', '26', '27', '28'];

export const renderHeader = () => {
    // функция должна сгенерировать разметку c днями отображаемой недели (только день недели и число в месяце)
    // полученную разметку вставить на страницу с помощью innerHTML
    // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка

    const header = document.querySelector('.calendar__header')
    let days = document.createElement('div');
    days.classList.add('days');

    const day = createNumbersArray(0, 6)
        .map(elem => `
    <div class="calendar__header-day" data-day="${elem}">${daysOfWeek[elem]}<div class="calendar__header-number" data-number="">${daysOfMonth[elem]}</div></div>`).join('');
    header.innerHTML = `<div class="calendar__time-scale_grinvich">GMT+02</div>`
    header.innerHTML += day;
};
renderHeader()

// при клике на кнопку "Create" открыть модальное окно с формой для создания события