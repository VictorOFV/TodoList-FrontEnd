import { differenceInDays, differenceInHours, differenceInMinutes, differenceInMonths, differenceInSeconds, differenceInYears } from "date-fns"

function getLargestTimeDifference(date1, date2) {
    const secondsDiff = differenceInSeconds(date2, date1)
    const minutesDiff = differenceInMinutes(date2, date1)
    const hoursDiff = differenceInHours(date2, date1);
    const daysDiff = differenceInDays(date2, date1);
    const monthsDiff = differenceInMonths(date2, date1);
    const yearsDiff = differenceInYears(date2, date1);

    if (yearsDiff > 0) {
        return `${yearsDiff} ano${yearsDiff > 1 ? 's' : ''}`;
    } else if (monthsDiff > 0) {
        return `${monthsDiff} mês${monthsDiff > 1 ? 'es' : ''}`;
    } else if (daysDiff > 0) {
        return `${daysDiff} dia${daysDiff > 1 ? 's' : ''}`;
    } else if (hoursDiff > 0) {
        return `${hoursDiff} hora${hoursDiff !== 1 ? 's' : ''}`;
    } else if (minutesDiff > 0) {
        return `${minutesDiff} minuto${minutesDiff !== 1 ? 's' : ''}`
    } else {
        return `${secondsDiff} segundo${secondsDiff !== 1 ? 's' : ''}`
    }
}

export default getLargestTimeDifference