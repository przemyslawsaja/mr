import React, { useEffect, useState } from "react"
import { Button } from '../../components/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { voteStore } from '../../stores/voteStore';
import { ApplicationRoutePaths } from '../Root';
import * as Styled from './VoteDetails.style'
import { toast } from 'react-toastify';

export const VotesDetails = observer(() => {
  const [isLoading, setLoader] = useState<boolean>(true)
  const navigate = useNavigate();
  const { id } = useParams()
  const { vote, fetchVoteDetails } = voteStore;

  const onVoteRemoveHandler = (id: number) => {
    voteStore.removeVote(id.toString())
      .then(() => {
        toast.success('vote removed')
        navigate(ApplicationRoutePaths.VOTES)
      });
  }

  useEffect(() => {
    if (!id) {
      return;
    }

    fetchVoteDetails(id)
      .then(() => setLoader(false));
  }, [])

  if (isLoading) {
    return <span>Loading...</span>
  }

  return <Styled.VoteDetailsContainer>
    <p><b>value</b> :{ vote.value }</p>
    <p><b>crated at: </b>{ new Date(vote.created_at).toDateString() }</p>
    <p><b>id: </b>{ vote.id }</p>
    <p><b>image id: </b>{ vote.image_id }</p>
    <p><b>sub id: </b>{ vote.sub_id }</p>
    <br/>
    <Button onClick={ () => navigate(ApplicationRoutePaths.VOTES) } content={ "Go back" }/>
    <Button onClick={ () => onVoteRemoveHandler(vote.id) } content={ "Remove" }/>

  </Styled.VoteDetailsContainer>
});