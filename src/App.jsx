import React from 'react'
import "./App.css"
import Fundo from './fundinho.jpg'
export default function App() {
  return (
    <div className='containerGeral'>

      <div className='fotoLogo'>
        <h1 className='tituloLogin'>Logo</h1>
        <p>
          Plataforma Ana Rita Digital
        </p>
      </div>

     
      <div className='conteudo'>

        


          <div className='login'>
            <h2>
              Login
            </h2>
            <div className='box-user'>
              <input type="email" required />
              <label>E-mail</label>
            </div>
            <div className='box-user'>
              <input type="password" required />
              <label>Senha</label>
            </div>
            <div>
              <a href="#" className='forget'>Esqueceu a senha?</a>
            </div>
            <a href="#" className='botao'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Entrar

            </a>
          </div>
        
      </div>
    </div>
  )
}
