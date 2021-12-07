import { useState, useEffect } from "react";

/*---------- create pagination (like 1,2,3.. 9)-------------*/
const calculateRange = (data, rowsPerPage) => {
    const range = [],
        count = Math.ceil(data.length / rowsPerPage);
    let i = 1;
    for (let i = 1; i <= count; i++) {
        range.push(i);
    }
    return range;
};

const sliceData = (data, page, rowsPerPage) => {
    debugger;
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};


const usePagination = (data, page, rowsPerPage) => {
    const [isRange, setIsRange] = useState([]);
    const [slice, setSlice] = useState([]);

    useEffect(() => {
        const range = calculateRange(data, rowsPerPage);
        setIsRange([...range]);

        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]);

    }, [data, setIsRange, page, setSlice]);

    return { slice, range: isRange };
};

export default usePagination;