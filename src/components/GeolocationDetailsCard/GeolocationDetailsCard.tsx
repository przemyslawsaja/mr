import React, { FC } from "react"
import * as Styled from './GeolocationDetailsCard.style'
import { observer } from 'mobx-react-lite';
import { AddressDetails } from '../../models/AdressDetails';
import { IoMdLocate } from 'react-icons/io';

interface IGeolocationDetailsCardProps {
  address: AddressDetails;
}

export const GeolocationDetailsCard: FC<IGeolocationDetailsCardProps> = observer(({ address }) => {

  const renderDetails = () => {
    if (address.isEmpty) {
      return <Styled.EmptyDetails>
        <IoMdLocate size={'5rem'} />
         Address data is not available
      </Styled.EmptyDetails>
    }

    return <Styled.Table>
      <tbody>
      { address.formattedDetails.map((detail, idx) => {
        return <tr key={ idx }>
          <td>{ detail.label }</td>
          <td>{ detail.value }</td>
        </tr>
      }) }
      </tbody>
    </Styled.Table>
  }
  return <Styled.GeolocationDetailsWrapper>
    <Styled.DetailsLabel>
      {!address.isEmpty && "Address details"}
    </Styled.DetailsLabel>
    { renderDetails() }
  </Styled.GeolocationDetailsWrapper>
})