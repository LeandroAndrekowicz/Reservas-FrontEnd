import React from 'react'
import './Home.css'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Home = (props: Props) => {

  const navigate = useNavigate();

  const goReserve = () => {
    navigate('/reserve');
  } 

  return (
    <div>
        <Header />

        <div className='container-home-sobre'>
          <div className='text-sobre'>
            <h2>Conheça o Projeto Pormade Móvel</h2>
            <p>O projeto do Pormade Móvel tem como objetivo divulgar os produtos e serviços da empresa além das barreiras geográficas. O veículo passa por eventos de inúmeras cidades para que a comunidade local possa conhecer de perto o que a Pormade oferece ao mercado.</p>
            <p>O primeiro Showroom Móvel da Pormade estreou na “Feicon Batimat em 2019, depois dos comentários positivos sobre a novidade, a frota cresceu e os veículos passaram por vários eventos importantes e tradicionais de diferentes cidades, como Design Fair, Expoingá, Kiwi Fest, Feicon, High Design, Equipotel, ConstruSul, lojas de materiais de construção, entre outros.</p>
            <p>Ele apresenta em sua carroceria os modelos de portas da Pormade, as estampas dos papéis de parede, piso vinilico, rodapés e fechaduras. Além disso, mesas e cadeiras ficam dispostas próximas aos veículos para que os visitantes conversem com os especificadores e analisem os catálogos.</p>
            <p>A arquitetura dos veículos do projeto conta ainda com uma televisão, na qual vídeos sobre a cultura Pormade são exibidos durante as participações nas feiras.</p>
            <p>O Pormade Móvel participa de vários eventos, feiras e faz visitas aos seus parceiros como lojas, arquitetos, engenheiros e instaladores.</p>
            <p>O que achou? Vamos agendar uma visita até você?</p>
          </div>
          <div className='button-sobre'>
            <Button text='Agendar' onclick={goReserve}/>
          </div>
          <div className='gallery'>
            <figure className='gallery__item gallery__item--1'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ilKDzuYuEFhIBkege7FpMHmJuH1-K2mPFg&usqp=CAU" className="gallery__img" alt="Image 1" />
            </figure>
            <figure className="gallery__item gallery__item--2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu6P6YsiyVpTlkWB-1CCwiLdAmxAk39X-mnw&usqp=CAU" className="gallery__img" alt="Image 2" />
            </figure>
            <figure className="gallery__item gallery__item--3">
              <img src="https://s2.glbimg.com/Wbk-rlpM182Op1dGSVxShVVfKEQ=/512x320/smart/e.glbimg.com/og/ed/f/original/2022/02/03/photo-2022-01-20-17-08-59_2.jpg" className="gallery__img" alt="Image 3"/>
            </figure>
            <figure className="gallery__item gallery__item--4">
              <img src="https://blog.pormade.com.br/wp-content/uploads/2022/07/Pormade_M_vel.jpeg" className="gallery__img" alt="Image 4"/>
            </figure>
            <figure className="gallery__item gallery__item--5">
              <img src="https://pormade.vtexassets.com/assets/vtex.file-manager-graphql/images/6f300537-27f2-457e-9726-64c0e07f4efc___a4cdbdfd0a7479ed0afea431eb7b8ee3.png" className="gallery__img" alt="Image 5"/>
            </figure>
            <figure className="gallery__item gallery__item--6">
              <img src="https://blog.pormade.com.br/wp-content/uploads/2022/11/1671020580648.png" className="gallery__img" alt="Image 6"/>
            </figure>
          </div>
        </div>
    </div>
  )
}

export default Home