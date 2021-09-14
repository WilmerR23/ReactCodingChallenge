import { createContext } from 'react';
import { ProviderType } from '../types/ProviderType';

export const initContext = {
    Action: {
        onClearAll: () => {},
        onStop: () => {}
    },
    State: {
        Message: {
            message: "",
            priority: 1
        },
        CallApi: true
    }
};

export const AppContext = createContext<ProviderType>(initContext);