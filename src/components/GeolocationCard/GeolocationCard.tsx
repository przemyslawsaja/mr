import React, { FC } from "react"
import * as Styled from './GeolocationCard.style'
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { observer } from 'mobx-react-lite';
import { DEFAULT_ZOOM } from "common/constants";
import { AddressDetails } from '../../models/AdressDetails';

interface IGeolocationCard {
  address: AddressDetails
}

export const GeolocationCard: FC<IGeolocationCard> = observer(({ address }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  if (!isLoaded) return <Styled.GeolocationCardWrapper />
  return <Styled.GeolocationCardWrapper>
    <GoogleMap zoom={ DEFAULT_ZOOM } center={ address.coordinates } mapContainerClassName={ 'map-container' }>
      { !address.coordinatesEmpty && <Marker position={ { lat: address.latitude, lng: address.longitude } }/> }
    </GoogleMap>
  </Styled.GeolocationCardWrapper>
})

