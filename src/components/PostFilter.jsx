import React from 'react';
import MyInput from "./ULI/MyInput";
import Myselect from "./ULI/Myselect";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e=>setFilter({...filter,query:e.target.value})}
                placeholder='Поиск'

            />

            <Myselect
                value={filter.sort}
                onChange={selectedSort=>setFilter({...filter,sort:selectedSort })}
                defaultValue="Сортировка по:"
                option={[
                    {value:'title',name:'По названию'},
                    {value:'body',name:'По описанию'}


                ]}

            />
        </div>
    );
};

export default PostFilter;