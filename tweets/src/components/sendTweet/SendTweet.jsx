import React, { useState } from 'react';
import './SendTweet.scss';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment';
import ModalContainer from '../modalContainer';
import FormSendTweet from '../fromSendTweet';

export default function SendTweet() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
      <div className="send-tweet">
        <Fab className="send-tweet__open-modal"
             color="primary"
             aria-label="add"
             onClick={openModal}
        >
          <AddIcon/>
        </Fab>
        <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
          <FormSendTweet />
        </ModalContainer>
      </div>
  );
}
