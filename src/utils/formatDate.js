import { addHours, format, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale"

function convertDate(date, formatDateFns) {
    const dateISO = parseISO(date?.split("T")[0])
    const dateFormat = format(dateISO, formatDateFns, { locale: ptBR })
    return dateFormat
}

export default convertDate