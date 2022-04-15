import React from "react"
import { GeolocationCard } from '../../components/GeolocationCard/GeolocationCard';
import { SearchHistoryList } from '../../components/SearchHistoryList/SearchHistoryList';
import * as Styled from './Dashboard.style'
import { GeolocationDetailsCard } from '../../components/GeolocationDetailsCard/GeolocationDetailsCard';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { observer } from 'mobx-react-lite';
import { dashboardStore } from '../../stores/DashboardStore';

export const Dashboard = observer(() => {
  const { addressDetails, previousAddressDetails } = dashboardStore;
  return <Styled.DashboardWrapper>
    <SearchHistoryList/>
    <Styled.DashboardCards>
      <Styled.GeolocationDetails>
        <GeolocationCard address={ addressDetails }/>
        <GeolocationDetailsCard address={ addressDetails }/>
      </Styled.GeolocationDetails>

      <SearchBox/>

      <Styled.GeolocationDetails>
        <GeolocationCard address={ previousAddressDetails }/>
        <GeolocationDetailsCard address={ previousAddressDetails }/>
      </Styled.GeolocationDetails>
    </Styled.DashboardCards>
  </Styled.DashboardWrapper>
})