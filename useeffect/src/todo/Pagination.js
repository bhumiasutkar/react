import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Pagination ({ range, setPage, page, slice }) {
    console.log('range ', range);
    console.log('page ', page);
    console.log('slice ', slice);
    /*
    page is number of pages
    range is current page numbers 
    slice is number of current row in page
    */
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);

    return (
        <>
            <div className="clearfix">
                <div className="custom-pagination">
                    <div className="hint-text">Showing <b>{slice.length}</b> out of <b>{slice.length}</b> entries </div>
                    <ul className="pagination">
                        {range && range.map((el, index) => (
                            <>
                                <li key={`ind-${index}`} className="page-item">
                                    <button className="page-link" onClick={() => setPage(el)}  >
                                        {el}
                                    </button>
                                </li>
                            </>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Pagination;