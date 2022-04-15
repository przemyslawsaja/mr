import { action, makeAutoObservable, observable } from "mobx"
import axios from 'axios';
import { AddressDetails } from '../models/AdressDetails';
import { toast } from 'react-toastify';

interface ISearchHistoryItem {
  label: string,
  address: AddressDetails;
  createdAt: Date;
}

class DashboardStore {
  @observable
  public isLoading: boolean = true;

  @observable
  public search: string = '';

  @observable
  public searchHistory: ISearchHistoryItem[] = [];

  @observable
  public addressDetails: AddressDetails = AddressDetails.create();

  @observable
  public previousAddressDetails: AddressDetails = AddressDetails.create();


  constructor() {
    makeAutoObservable(this)
  }

  @action
  public fetchAddress = async (): Promise<void> => {
    this.isLoading = true;
    const ipDetailsPath = `http://api.ipstack.com/${ this.search }?access_key=${ process.env.REACT_APP_IP_STACK_KEY }`
    await axios.get(ipDetailsPath)
      .then((response) => {
        if (response.data.error) {
          return toast.error(response.data.error.info)
        }
        this.addressDetails = AddressDetails.create(response.data)
      })

    this.isLoading = false;
  }

  @action
  public addSearchToHistory = (): void => {
    this.searchHistory.push({
      label: this.search,
      address: this.addressDetails,
      createdAt: new Date(),
    })
    if (this.searchHistory.length > 0) {
      this.previousAddressDetails = this.searchHistory[this.searchHistory.length - 2].address;
    }
  }

  @action
  public setSearch = (value: string): void => {
    this.search = value;
  }

  @action
  public clearSearch = (): void => {
    this.search = '';
  }
}

export const dashboardStore = new DashboardStore()

