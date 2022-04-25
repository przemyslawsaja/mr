import { observer } from 'mobx-react-lite';
import React from 'react';
import { voteStore } from '../../stores/voteStore';
import { Button } from '../../components/Button/Button';
import { toast } from 'react-toastify';
import { ApplicationRoutePaths } from '../Root';
import { useNavigate } from 'react-router-dom';

export const CreateVote = observer(() => {
  const navigate = useNavigate();

  const onCreateVoteHandler = () => {
    voteStore.addVote().then(() => toast.success('Vote added'))
  }
  return <div>
    <h1>Value</h1>
    <input onChange={ e => voteStore.setVoteValue(parseInt(e.target.value)) } type={ 'number' }/>
    <br/>
    <h1>Sub id</h1>
    <input onChange={ e => voteStore.setVoteSubId(e.target.value) }/>
    <Button onClick={ onCreateVoteHandler } content={ "ADD" }/>
    <Button onClick={ () => navigate(ApplicationRoutePaths.VOTES) } content={ "Go back" }/>

  </div>
})