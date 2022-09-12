import React from 'react';
import Myinput from './UI/input/Myinput';
import Myselect from './UI/select/Myselect';

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
             < Myinput  value={filter.query} onChange={e => setFilter({...filter,query:e.target.value})} placeholder='поиск'/>
    <Myselect value={filter.sort} onChange = {selectedSort=>setFilter({...filter,sort:selectedSort})} defoltValue='сортировка по' options={[{value:'title' ,name: 'По названию'}, {value:'body' ,name: 'По описанию'}]}/>
        </div>
    );
};

export default PostFilter;