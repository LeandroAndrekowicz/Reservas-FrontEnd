import React, { useState } from 'react'
import './Reserve.css'
import Header from '../../components/Header'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Button from '../../components/Button';


interface ReserveData {
  name: string;
  email: string;
  phone: string;
  data: Date;
}

const Reserve = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [formData, setFormData] = useState<ReserveData>({
    name: '',
    email: '',
    phone: '',
    data: new Date()
  });

  return (
    <section>
        <Header />
        <form className='container-form'>
            <div className='container-titulo'>
              <h2>Preencha seus dados</h2>
            </div>
            <div className='form-style'>

              <div className='container-info'>
                <label className='form-label'>Nome</label>
                <input 
                  type="text" 
                  placeholder='Digite seu nome' 
                  className='form-input'
                  onChange={(e) => setFormData({
                    ...formData,
                    name: e.target.value
                  })}
                />
              </div>

              <div className='container-info'>
                <label className='form-label'>Email</label>
                <input 
                  type="text" 
                  placeholder='Digite seu email' 
                  className='form-input'
                  onChange={(e) => setFormData({
                    ...formData,
                    email: e.target.value
                  })}  
                />
              </div>

              <div className='container-info'>
                <label className='form-label'>Telefone</label>
                <input 
                  type="text" 
                  placeholder='Digite seu telefone' 
                  className='form-input'
                  onChange={(e) => setFormData({
                    ...formData,
                    phone: e.target.value
                  })}
                />
              </div>

              <div className='container-info'>
                <label className='form-label'>Data</label>
                <DatePicker 
                  className='form-input-data'
                  selected={formData.data} 
                  onChange={(date : Date) => setFormData({
                    ...formData,
                    data: date
                  })} 
                  minDate={new Date()}/>
              </div>

              <div className='container-info-button'>
                <Button onclick={() => console.log('oi')} text='Reservar'/>;
              </div>

            </div>
        </form>
    </section>
  )
}

export default Reserve