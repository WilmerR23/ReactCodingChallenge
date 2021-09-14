import React, { useState, useContext, useEffect, useCallback } from 'react';
import { AppContext } from '../state/Context';
import { Message } from '../Api'; 
import Grid from '@material-ui/core/Grid';
import { PriorityContainerProps } from '../types/PropsTypes';
import { StyledDiv, StyledCard, StyledSpan } from '../styles/StyledComponents';
import { Count } from '../components/Count';

export const PriorityContainer: React.FC<PriorityContainerProps> = ({ Color, Title, Priority }) => {
  const context = useContext(AppContext);
  const message = context.State.Message;
  const [messages,setMessages] = useState<Message[]>([]);

  //UseCallback to prevent pitfalls
  const manageMessage = useCallback(() => {
    
    //If message is empty (clear blutton pressed), clear messages array
    if (message.message === "") {
      onClearAllMessages();
      return;
    }
    
    //If new message priority is the same of props priority, add it to first position of array
    if (message?.priority === Priority) {
      setMessages(messages => [message].concat(...messages));
    }

  }, [message,Priority])

  useEffect(() => {
    manageMessage()
  }, [manageMessage]);

  //Function to clear only the message selected
  function clear(message:string) {
    setMessages(messages.filter((item) => item.message !== message));
  }

  function onClearAllMessages() {
    setMessages([]);
  }

  return (
        <React.Fragment>
            <StyledDiv size="18" weight="700">{Title}</StyledDiv>
            <Count elementCount={messages?.length} />
            {messages?.map?.((msg,index) => 
                <StyledCard key={index} Color={Color}>
                  <Grid container spacing={2}>
                    <Grid container item sm={10} xs={10}>
                      <StyledDiv>{msg.message}</StyledDiv>
                    </Grid>
                    <Grid container item sm={2} xs={2}>
                      <StyledDiv flexDirection="flex-end" onClick={() => clear(msg.message)}>
                        <StyledSpan cursor="pointer" aria-label="Clear" role="button">Clear</StyledSpan>
                      </StyledDiv>
                    </Grid>
                  </Grid>
                </StyledCard>
            )}
        </React.Fragment>
      );
}
export default PriorityContainer;

