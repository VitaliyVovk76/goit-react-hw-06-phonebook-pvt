import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../redux/filterSlice'
import s from './Filter.module.css'

const Filter = () => {
  const val = useSelector((state) => state.filter)
  const disputch = useDispatch()
  return (
    <div className={s.filter}>
      <label className={s.label}>
        Find contact
        <input
          className={s.input}
          type="text"
          value={val}
          onChange={(evt) => disputch(changeFilter(evt.target.value))}
        />
      </label>
    </div>
  )
}

export default Filter
