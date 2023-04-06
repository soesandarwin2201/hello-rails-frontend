import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Greeting from './components/greeting';
import { getMessageData } from './redux/greetingdata';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessageData());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
