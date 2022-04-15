import React from "react"
import * as Styled from './SearchHistoryList.style'
import { dashboardStore } from '../../stores/DashboardStore';
import { observer } from 'mobx-react-lite';
import { RiEmotionSadLine } from 'react-icons/ri';
import { theme } from '../../theme/MainTheme';
import { MdSend } from 'react-icons/md';

export const SearchHistoryList = observer(() => {
  const { searchHistory } = dashboardStore;

  return <Styled.SearchHistoryListWrapper>
    <Styled.HistoryLabel>
      SEARCH HISTORY
    </Styled.HistoryLabel>

    { searchHistory.length === 0 && <Styled.SearchEmptyComponent>
      <RiEmotionSadLine size={ '5rem' } color={ theme.colors.brand.text300 }/>
      You haven't searched for any address yet
    </Styled.SearchEmptyComponent> }
    <Styled.HistoryItems>
      { searchHistory.map(historyItem => {
        return <Styled.HistoryItem>
          <Styled.HistoryItemLabel>
            <MdSend size={'2rem'} color={theme.colors.brand.primary300}/>
            <span> { historyItem.label }</span>
          </Styled.HistoryItemLabel>
          { historyItem.createdAt.toTimeString().split(' ')[0] }
        </Styled.HistoryItem>
      }) }
    </Styled.HistoryItems>
  </Styled.SearchHistoryListWrapper>
})