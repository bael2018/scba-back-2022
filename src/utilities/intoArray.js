export const intoArray = (item) => {
    if (!item) return item;

    return Object.entries(item).map((item) => {
        const id = item[0];

        return {
            ...item[1],
            id,
        };
    });
};
