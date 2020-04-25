import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterService } from '../actions/actionCreators';
import { FilterFilled } from '@ant-design/icons';

function ServiceFilter() {
  const item = useSelector(state => state.serviceFilter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const {value} = evt.target;
    dispatch(filterService(value));
  };

  return (
    <div className='filter'>
      <input name='value' onChange={handleChange} value={item.value} />
      <FilterFilled className="button" />
    </div>
  );
}

export default ServiceFilter;
