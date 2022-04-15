import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from 'common/constants';
import { omit } from '../common/helpers';

export interface IAddressLocation {
  calling_code: string,
  capital: string,
  country_flag: string,
  country_flag_emoji: string,
  country_flag_emoji_unicode: string,
  geoname_id: string,
  is_eu: string
}

export interface IAddressDetails {
  city: string,
  continent_code: string,
  continent_name: string,
  country_code: string,
  country_name: string,
  ip: string,
  latitude: number,
  longitude: number,
  location: IAddressLocation,
  region_code: string,
  region_name: string,
  type: string,
  zip: string
  isEmpty: boolean
}

export class AddressDetails {
  public city: string;
  public continent_code: string;
  public continent_name: string;
  public country_code: string;
  public country_name: string;
  public ip: string;
  public latitude: number;
  public longitude: number;
  public location: IAddressLocation;
  public region_code: string;
  public region_name: string;
  public type: string;
  public zip: string;
  public isEmpty: boolean;

  constructor(addressDetails: IAddressDetails) {
    this.city = addressDetails.city;
    this.continent_code = addressDetails.continent_code;
    this.continent_name = addressDetails.continent_name;
    this.country_code = addressDetails.country_code;
    this.country_name = addressDetails.continent_name;
    this.ip = addressDetails.ip;
    this.latitude = addressDetails.latitude;
    this.longitude = addressDetails.longitude;
    this.location = addressDetails.location;
    this.region_code = addressDetails.region_code;
    this.region_name = addressDetails.region_name;
    this.type = addressDetails.type;
    this.zip = addressDetails.zip;
    this.isEmpty = addressDetails.isEmpty;
  }

  static create(addressDetails?: IAddressDetails) {
    if (addressDetails) {
      return new AddressDetails({...addressDetails, isEmpty: false});
    } else {
      return new AddressDetails({
        city: '',
        continent_code: '',
        continent_name: '',
        country_code: '',
        country_name: '',
        ip: '',
        latitude: 0,
        longitude: 0,
        location: {
          calling_code: '',
          capital: '',
          country_flag: '',
          country_flag_emoji: '',
          country_flag_emoji_unicode: '',
          geoname_id: '',
          is_eu: '',
        },
        region_code: '',
        region_name: '',
        type: '',
        zip: '',
        isEmpty: true,
      })
    }
  }

  public get formattedDetails(): { label: string, value: any }[] {
    return Object.entries(omit(this, ["location", "isEmpty"])).map(detail => {
      const detailLabel = detail[0] ? detail[0].replace("_", " ") : detail[0]
      return {
        label: detailLabel,
        value: detail[1]
      }
    })
  }

  public get coordinatesEmpty(): boolean {
    return this.longitude === 0 || this.latitude === 0
  }

  public get coordinates(): { lat: number, lng: number } {
    if (this.coordinatesEmpty) {
      return {
        lat: DEFAULT_LATITUDE,
        lng: DEFAULT_LONGITUDE,
      }
    }

    return {
      lat: this.latitude,
      lng: this.longitude
    }
  }
}