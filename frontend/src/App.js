import { Container } from 'react-bootstrap';
import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Bienvenido a la tienda de Dos Gauchitos</h1>
        </Container>

        
      </main>
      <Footer />
      
    </>
    
  )
}

export default App