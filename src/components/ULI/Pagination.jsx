import React from 'react';
import {useGetPagesArray} from "../Utils/usePages";

const Pagination = ({totalPages,page,changePage}) => {

    const pagesArray=useGetPagesArray(totalPages)
    return (
        <div className="page-wrapper">

            {pagesArray.map(p=>

                    <span
                        onClick={()=>changePage(p)}
                        key ={p}
                        className={page ===p?'page page__current' : 'page'}>
            {p}
        </span>
            )}
        </div>
    );
};

export default Pagination;