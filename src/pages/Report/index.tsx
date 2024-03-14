import React, { useEffect, useState } from 'react';
import './Report.css';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker, { Calendar } from 'react-modern-calendar-datepicker';
import { api } from '../../server/api';

type Props = {}

const Report = (props: Props) => {
    const [reservedDates, setReservedDates] = useState([{
        year: '',
        month: '',
        day: '',
    }]);

    const findAllDates = async () => {
        await api.get('/reserve/dates/').then((response) => {

            const datesFilter = response.data.dates.map((date : any) => {
                let day;
                let month;
                let year;
                
                day = new Date(date.data.date).getDay();
                month = new Date(date.data.date).getMonth();
                year = new Date(date.data.date).getFullYear();

                return {
                    year: year,
                    month: month,
                    day: day,                    
                };
            })

            console.log(datesFilter);
            

            setReservedDates(datesFilter);
       
        })
      }      

    
      useEffect(() => { 
        findAllDates();        
      }, [])

  return (
        <Calendar
            value={reservedDates}  
            onChange={() => {}}
            shouldHighlightWeekends
          />
  );
};
export default Report