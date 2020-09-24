import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.scss'

const DatePick = function ({ ...props }) {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <DatePicker
            {...field}
            {...props}
            dateFormat="dd/MM/yyyy"
            selected={(field.value && new Date(field.value)) || null}
            onChange={(val) => {
                let day = val.getDay()
                let month = val.getMonth()
                let year = val.getFullYear()
                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let formatDate =  `${day} ${months[month]} ${year}`
                console.log(formatDate)
                setFieldValue(field.name, formatDate);

            }}
        />
    );
};

export default DatePick