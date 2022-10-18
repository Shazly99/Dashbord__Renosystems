import { ClassNames } from '@emotion/react';
import moment from 'moment/moment'
import React from 'react'

const CurrData = () => {
    let data = moment().format("ddd, MMM D YYYY   h:mm a");
    let currMood = ""
    var day = new Date();
    var hr = day.getHours();
    if (hr >= 0 && hr < 12) {
        currMood = "Good Morning!";
    } else if (hr == 12) {
        currMood = "Good Noon!";
    } else if (hr >= 12 && hr <= 17) {
        currMood = "Good Afternoon!";
    } else {
        currMood = "Good Evening!";
    }
    return (
        <>
            <span className='currData'>
                <span className='currMood'>{currMood}</span>
                <span className='data'>{data}</span>
            </span>
        </>
    )
}
export default CurrData
