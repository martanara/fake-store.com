export const getSortedList = (list: any[], sortType: string, param: string) => {
    const sortedList = [...list];

    if (sortType === "desc") {
        sortedList.sort((a, b) => {
            if (a[param] < b[param]) {
                return -1;
            }
            if (a[param] > b[param]) {
                return 1;
            }
            return 0;
        });
    } else {
        sortedList.sort((a, b) => {
            if (a[param] > b[param]) {
                return -1;
            }
            if (a[param] < b[param]) {
                return 1;
            }
            return 0;
        });
    }

    return sortedList;
};
