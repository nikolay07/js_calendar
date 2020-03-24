import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { renderEvents } from '../events/events.js';

const generateDay = () => {
    // функция должна сгенерировать и вернуть разметку недели в виде строки
    // разметка состоит из 24 часовых временных слотов (.calendar__time-slot)

    // const slots = createNumbersArray(0, 24)
    //     .map(timeSlot => `
    // <div
    //     class="calendar__time-slot" data-time="${timeSlot}"
    // ></div>
    // `).join('');
};

export const renderWeek = () => {
    // функция должна сгенерировать разметку недели в виде строки и вставить ее на страницу (в .calendar__week)
    // разметка недели состоит из 7 дней (.calendar__day) отображаемой недели
    // каждый день должен содержать в дата атрибуте порядковый номер для в месяце
    // какую неделю отображать - берем из storage
    // после того, как отрисовали всю сетку для отображаемой недели - добавляем события методом renderEvents

    // const startDate = getItem('displayedWeekStart');
    // const daysContainer = document.querySelector('.calendar__week');
    // const dayList = generateWeekRange(startDate);
    // const weekElementString = dayList
    //     .map(day => `<div class="calendar__day" data-day="${day.getDate()}">
    // ${dayTemplateString}</div>`, )
    //     .join('');
    // daysContainer.innerHTML = weekElementsString;
    // renderEvents();
};