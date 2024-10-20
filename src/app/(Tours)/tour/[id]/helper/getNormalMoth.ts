export const getNormalData = (data: string): string => {
    const objMonths: { [key: string]: string } = {
        "01": "января",
        "02": "февраля",
        "03": "марта",
        "04": "апреля",
        "05": "мая",
        "06": "июня",
        "07": "июля",
        "08": "августа",
        "09": "сентября",
        "10": "октября",
        "11": "ноября",
        "12": "декабря"
    };

    const [year, month, day] = data.split("-");

    return objMonths[month];
}