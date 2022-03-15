export const productCode = () => {
    return Math.floor(Math.random() * (1000000 - 9999999) + 9999999);
};

export const getDate = () => {
    const time = new Date();

    const year = time.getFullYear();
    const month = time.getMonth();
    const day = time.getDate();

    return {
        day: time.getDate(),
        year: year,
        month: month > 12 ? month - 1 : month + 1,
        fullDate: `${day > 9 ? day : `0${day}`}-0${
            month > 12 ? month - 1 : month + 1
        }-${year}`,
    };
};

export const trimStr = (str) => {
    return str.split(" ").join("");
};

export const toLower = (str) => {
    return str.toLowerCase();
};
