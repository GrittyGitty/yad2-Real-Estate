import 'dayjs/locale/en-il';
import dayjs from 'dayjs';
dayjs.locale('en-il')

const format = (d) => {
    return dayjs(d).format(`DD/MM/YYYY`);
}

const isToday = (d) => {
    return format(d) === format(dayjs());
}


const timeIsLessThanXMinutesAway = (epochSeconds, minutes = 1) => {
    const timeInSeconds = Date.now() / 1000;
    return (epochSeconds > timeInSeconds) && ((epochSeconds - timeInSeconds) <= 60 * minutes);
}


export { isToday, format, timeIsLessThanXMinutesAway };




