import React, { useEffect, useState } from 'react'
import './Reserve.css'
import Header from '../../components/Header'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Button from '../../components/Button';
import { api } from '../../server/api';
import { ToastContainer } from 'react-toastify';
import { notifyError, notifySuccess } from '../../components/notifys/toastfy';


interface ReserveData {
  name: string;
  email: string;
  phone: string;
  date: Date;
}

const Reserve = () => {
  const [reservedDates, setReservedDates] = useState([]);
  const [formData, setFormData] = useState<ReserveData>({
    name: '',
    email: '',
    phone: '',
    date: new Date()
  });

  const submitForm = async (event : any) => {
    event.preventDefault();

    let newDate = new Date(formData.date).toISOString().split('T')[0];

    try {
      await api.post('/reserve/create', {
        ...formData,
        date: newDate,
      })
        .then((response) => {      
          notifySuccess(response.data.message)
        })
    } catch (error : any) {
        notifyError(error.response.data.message);
    }

  }

  const findAllDates = async () => {
    await api.get('/reserve/dates/').then((response) => {
      setReservedDates(response.data.dates)
    })
  }

  useEffect(() => { 
    findAllDates();
  }, [])
  

  return (
    <>
      <section>
          <Header />
          <form className='container-form' onSubmit={submitForm}>
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
                    required
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
                    required
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
                    required
                  />
                </div>

                <div className='container-info'>
                  <label className='form-label'>Data</label>
                  <DatePicker 
                    className='form-input-data'
                    selected={formData.date} 
                    onChange={(date : Date) => setFormData({
                      ...formData,
                      date: date
                    })} 
                    minDate={new Date()}
                    required
                    excludeDates={reservedDates.map((item : any) => item.data.date)}
                  />
                </div>

                <div className='container-info-button'>
                  <Button text='Reservar'/>;
                </div>
                
                <ToastContainer />

              </div>
          </form>
      </section>
    </>
  )
}

export default Reserve