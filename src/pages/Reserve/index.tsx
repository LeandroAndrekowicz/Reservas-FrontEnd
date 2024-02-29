import React, { useState } from 'react'
import './Reserve.css'
import Header from '../../components/Header'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


type Props = {}

const Reserve = (props: Props) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <section>
        <Header />
        <form className='container-form'>
            <div className='container-titulo'>
              <h2>Preencha seus dados</h2>
            </div>
            <div className='container-info'>
              <label className='form-label'>Nome</label>
              <input type="text" placeholder='Digite seu nome' className='form-input'/>
            </div>
            <div className='container-info'>
              <label className='form-label'>Email</label>
              <input type="text" placeholder='Digite seu nome' className='form-input'/>
            </div>
            <div className='container-info'>
              <label className='form-label'>Telefone</label>
              <input type="text" placeholder='Digite seu nome' className='form-input'/>
            </div>
            <div className='container-info'>
              <label className='form-label'>Data</label>
              <DatePicker selected={startDate} onChange={(date : Date) => setStartDate(date)} />
            </div>
        </form>
    </section> 
  )
}

export default Reserve