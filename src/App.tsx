import React from 'react';
import { Routers } from './router/Routers';
import { Header } from './component/header/Header';
import { Footer } from './component/footer/Footer';
import Container from 'react-bootstrap/Container'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Container>
            <Routers/>
        </Container>
        <Footer/>
    </div>
  );
}

export default App;
