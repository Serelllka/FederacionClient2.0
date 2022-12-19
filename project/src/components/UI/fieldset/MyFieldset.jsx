import React from "react";
import {useState} from "react"
import classes from './MyFieldset.module.css'

const MyFieldset = ({
    children,
    inputId, 
    optionList, 
    getOption, 
    setValue,
    props}) => {
    console.log(children + " optionList: ", optionList)
    
    const listId = inputId + '__list'
    const [val, setVal] = useState('')

    return (
        <fieldset className={classes.condemn__form}>
            <label className={classes.form__lable}>
                {children}
            </label>
            <input 
                className={classes.form__control} 
                list={listId} 
                id={inputId} 
                {...props}

                value={val}
                onChange={e => {
                    setVal(e.target.value)
                    setValue(e.target.value)
                }}
                />
            
            <datalist className="convicted__list__container" id={listId}>
                {optionList.length === 0 
                ?
                    <option>Ничего нет :c</option>
                :
                    optionList.map(option =>
                        getOption(option)
                    )
                }
            </datalist>
        </fieldset>
    )
}

export default MyFieldset
