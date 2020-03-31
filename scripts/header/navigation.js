import { getItem, setItem } from '../common/storage.js';
import { renderWeek } from '../calendar/calendar.js';
import { renderHeader } from '../calendar/header.js';
import { getStartOfWeek, getDisplayedMonth } from '../common/time.utils.js';

const navElem = document.querySelector('.navigation');
const displayedMonthElem = document.querySelector('.navigation__displayed-month');

function renderCurrentMonth() {
    // отрисовать месяц, к которому относиться текущая неделя
    displayedMonthElem.innerHTML = `${getDisplayedMonth(getItem('displayedWeekStart'))}`
}

const onChangeWeek = e => {
    // при переключении недели обновите displayedWeekStart в storage
    // и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek, renderCurrentMonth, renderRedLine)
    const startOfWeek = getItem('displayedWeekStart');
    const firstDayOfWeek = new Date(startOfWeek);

    const todayWeek = e.target.classList.contains('navigation__today-btn');
    const nextWeek = e.target.classList.contains('fa-chevron-right');
    const prewWeek = e.target.classList.contains('fa-chevron-left');


    if (nextWeek) {
        firstDayOfWeek.setDate(startOfWeek.getDate() + 7);
        setItem('displayedWeekStart', firstDayOfWeek)
    }
    if (prewWeek) {
        firstDayOfWeek.setDate(startOfWeek.getDate() - 7);
        setItem('displayedWeekStart', firstDayOfWeek)
    }
    if (todayWeek) {
        setItem('displayedWeekStart', getStartOfWeek(new Date()))
    }
    renderHeader();
    renderWeek();
    renderCurrentMonth();
};

export const initNavigation = () => {
    renderCurrentMonth();
    navElem.addEventListener('click', onChangeWeek);
};