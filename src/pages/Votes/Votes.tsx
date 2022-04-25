import React, { useEffect, useState } from "react"
import { voteStore } from '../../stores/voteStore';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import * as Styled from './Votes.style'
import { ApplicationRoutePaths } from '../Root';
import { toast } from 'react-toastify';

export const Votes = observer(() => {
    const [isLoading, setLoader] = useState<boolean>(true)
    const navigate = useNavigate();

    useEffect(() => {
      voteStore.fetchVotes().then(() => setLoader(false));

    }, [])

    const onVoteRemoveHandler = (id: number) => {
      voteStore.removeVote(id.toString())
        .then(() => toast.success('vote removed'))
    }
    if (isLoading) {
      return <h1>Loading...</h1>
    }
    return <div>
      { voteStore.votes.map(vote => {
        return <Styled.Vote key={vote.id}>
          <div>
            <p><b>value</b> :{ vote.value }</p>
            <p><b>id: </b>{ vote.id }</p>
          </div>
          <div>
            <Button onClick={ () => navigate(`${ ApplicationRoutePaths.VOTES }/${ vote.id }`) } content={ "Show details" }/>
            <Button onClick={ () => onVoteRemoveHandler(vote.id) } content={ "Remove" }/>
          </div>
        </Styled.Vote>
      })
      }
      <br/>
      <Button onClick={ () => navigate(ApplicationRoutePaths.CREATE_VOTE) } content={ "Add new vote" }/>
    </div>
  })
;