import React from 'react'
import './Reserve.css'
import Header from '../../components/Header'

type Props = {}

const Reserve = (props: Props) => {
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
            </div>
        </form>
    </section>
  )
}

export default Reserve