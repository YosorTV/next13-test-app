'use client';

import { useRef } from 'react';
import { useStore } from 'src/store/store';

function StoreProvider({ data, children }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState(data);
    initialized.current = true;
    return <>{children}</>;
  }
  return <>{children}</>;
}

export default StoreProvider;
