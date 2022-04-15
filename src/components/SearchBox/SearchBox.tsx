import React from "react"
import * as Styled from './SearchBox.styled'
import { BsSearch } from 'react-icons/bs';
import { observer } from 'mobx-react-lite';
import { dashboardStore } from '../../stores/DashboardStore';
import { toast } from 'react-toastify';

export const SearchBox = observer(() => {
  const { search, setSearch, fetchAddress, addSearchToHistory, clearSearch } = dashboardStore;

  const onSearchHandler = async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
    e?.preventDefault();
    if (!search) {
      toast.error('Please type some IP or URL address')
    }

    await fetchAddress();
    addSearchToHistory();
    clearSearch();
  }

  return <Styled.SearchBoxWrapper onSubmit={ e => onSearchHandler(e) }>
    <Styled.SearchInput placeholder={ 'Search by IP or URL adress... ( e.g. stackoverlow.com, sofomo.pl... )' }
                        value={ search }
                        onChange={ e => setSearch(e.target.value) }
    />
    <Styled.SubmitSearchButton onClick={ e => onSearchHandler(e) }>
      Search adress
      <BsSearch size={ '1.8rem' }/>
    </Styled.SubmitSearchButton>
  </Styled.SearchBoxWrapper>
})