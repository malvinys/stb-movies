import React from 'react';
import { Helmet } from 'react-helmet';

import './assets/saas/App.scss';
import Routes from './routes/Routes';
import Header from './components/Header/Header';
import Modal from './components/Modals/ModalImage';

function App() {
  return (
    <>
      <Helmet>
        <title>STB-Movies</title>
      </Helmet>
      <div className="base-container">
        <Header />
        <Routes />
        <Modal />
      </div>
    </>
  );
}

export default App;
