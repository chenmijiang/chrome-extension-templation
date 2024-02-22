import React from 'react';
import { Button } from 'antd';

import { useStore } from '@/hooks/useStore';
import { changeCount, initialState, state } from '@/store';

export const Home: React.FC = () => {
  const { count } = useStore(state, initialState);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <div>hello world</div>
      <div>{count}</div>
      <Button type="primary" onClick={()=>{
        changeCount(count + 1);
      }}>Button</Button>
    </div>
  );
};
