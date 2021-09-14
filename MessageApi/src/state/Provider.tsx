import { AppContext } from './Context';
import React, { useState } from 'react';
import { useEffect } from 'react';
import generateMessage, { Message } from '../Api';
import { ProviderType } from '../types/ProviderType';

const { Provider } = AppContext;
export const AppProvider: React.FC = ({children}) => {
  const [message,setMessage] = useState<Message>({ message: "", priority:1});
  const [callApi, setCallApi] = useState(true);

  const value: ProviderType = {
    State: { Message: message, CallApi: callApi},
    Action: { 
      //Actions for buttons on Layout component
      onStop: () => { setCallApi(!callApi)}, 
      onClearAll: () => { setMessage({ message: "", priority:1}) }
    }
  }
  
  useEffect(() => {
    //if START/STOP button is on initial state, keep calling api otherwise do anything
    if (callApi) {
      const cleanUp = generateMessage((message: Message) => {
       return setMessage(message);
      });
      return cleanUp;
    }
  }, [setMessage,callApi]);

  return(
    <Provider value={value}>
        {children}
    </Provider>
  );
}
export default AppProvider