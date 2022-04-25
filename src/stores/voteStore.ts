import { action, computed, makeAutoObservable, observable } from "mobx"
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_CONFIG, API_URL } from '../api/config';



type Vote = {
  country_code: string
  created_at: string,
  id: number
  image_id: string
  sub_id: string
  value: number
}

class VoteStore {

  @observable
  public votes: Vote[] = [];

  @observable
  public vote: Vote = this.emptyVote;

  @observable
  public voteSubId: string = '';

  @observable
  public voteValue: number = 0;

  constructor() {
    makeAutoObservable(this)
  }

  @action
  public fetchVotes = async (): Promise<void> => {
    axios.get(`${ API_URL }/votes`, API_CONFIG)
      .then((response) => {
          if (response.data.error) {
            return toast.error(response.data.error.info)
          }
          this.votes = response.data
        }
      )
  }

  @action
  public fetchVoteDetails = async (id: string): Promise<void> => {
    axios.get(`${ API_URL }/votes/${ id }`, API_CONFIG)
      .then((response) => {
          if (response.data.error) {
            return toast.error(response.data.error.info)
          }
          this.vote = response.data
        }
      )
  }

  @action
  public removeVote = async (id: string): Promise<void> => {
    axios.delete(`${ API_URL }/votes/${ id }`, API_CONFIG)
      .then((response) => {
          if (response.data.error) {
            return toast.error(response.data.error.info)
          }
          this.fetchVotes()
        }
      )
  }

  @action
  public addVote = async (): Promise<void> => {
    const payload = {
      image_id: "asf2",
      sub_id: this.voteSubId,
      value: this.voteValue
    }

    axios.post(`${ api }/votes`, payload, config)
      .then((response) => {
          if (response.data.error) {
            return toast.error(response.data.error.info)
          }
          this.vote = response.data
        }
      )
  }

  @computed
  public get emptyVote(): Vote {
    return {
      country_code: '',
      created_at: '',
      id: 0,
      image_id: '',
      sub_id: '',
      value: 0
    }
  }

  @action
  public setVoteSubId = (value: string) => {
    this.voteSubId = value
  }

  @action
  public setVoteValue = (value: number) => {
    this.voteValue = value;
  }

}

export const voteStore = new VoteStore()