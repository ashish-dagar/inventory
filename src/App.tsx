import React from 'react';
import styles from  './App.module.css';
import { Route, Routes } from 'react-router-dom';
import PurchaseOrder from './routes/purchaseOrder/PurchaseOrder';
import About from './routes/about/About';
import SidePanel from './SidePanel';
import CreatePO from './routes/purchaseOrder/create/CreatePO';
import TransferOrder from './routes/transferOrder';
import CreateTO from './routes/transferOrder/create/CreateTO';

function App() {
  return (
    <div className={styles.App}>
      <SidePanel />
      <div className={styles.screen}>
      <Routes>
        <Route path='/' element={<PurchaseOrder />} />
        <Route path='/about' element={<About />} />
        <Route path='/create' element={<CreatePO />} />
        <Route path='/transferOrder' element={<TransferOrder />} />
        <Route path='/createTransferOrder' element={<CreateTO />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
