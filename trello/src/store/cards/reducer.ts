import { ACTION_TYPES } from './types';

export interface CardsState {
  cards: Array<any>;
}
const INITIAL_STATE = {
  cards: []
};



const cardsReducer = (state: CardsState = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case ACTION_TYPES.SET_CARDS:
      return { ...state, cards: payload };

    case ACTION_TYPES.SUCCESS_ADDED_CARD: 
      const newItem = {
        name:payload.name, 
        idList:payload.idList
      }
      return{...state, cards: [...state.cards, newItem]}

    case ACTION_TYPES.SUCCESS_DELETE_CARD:
      // const delItem = [
      //   {...state.cards.filter(card => card !== payload.id)}
      // ]
      // return delItem
      return {cards: [...state.cards.filter(card=> card.id !== payload.id)]}
      

    default:
      return state;
  }
};

export default cardsReducer