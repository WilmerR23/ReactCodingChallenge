import { Message } from '../Api';

export interface ProviderType {
    Action: Actions;
    State: State;
}

interface Actions {
    onStop: () => void;
    onClearAll: () => void;
}

interface State {
    Message: Message;
    CallApi: boolean;
}