import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.scss'

const DatePick = function ({ mindate, ...props }) {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    
    return (
        <DatePicker
            {...field}
            {...props}
            dateFormat="dd/MM/yyyy"
            selected={(field.value && new Date(field.value)) || null}
            minDate={mindate ? Date.now() : undefined}
            maxDate={mindate ?( Date.now() + (24*5*60*60*1000)): undefined}
            onChange={(val) => {
                let formatDate = ''
                if(val){
                    let day = val.getDate()
                    let month = val.getMonth()
                    let year = val.getFullYear()
                    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    formatDate =  `${day} ${months[month]} ${year}`
                    console.log(formatDate)
                }
                setFieldValue(field.name, formatDate);
            }}
            isClearable
            showFullMonthYearPicker
            showYearDropdown
        />
    );
};

export default DatePick