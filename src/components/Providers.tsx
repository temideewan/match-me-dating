import { NextUIProvider } from '@nextui-org/react';

import React, { ReactNode } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <NextUIProvider>
      <ToastContainer position='bottom-right' hideProgressBar />
      {children}
    </NextUIProvider>
  );
};

export default Providers;
