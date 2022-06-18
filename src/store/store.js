import create from "zustand";
import _ from "lodash";
import {locations} from "../utils/locations";

const useStore = create((set) => ({
    playersCount: 4,
    players: [],
    locations: locations,
    currentPlayer: {},
    setPlayersCount: (count) => set((state) => ({
      ...state,
      playersCount: count
    })),
    newGame: () => set((state) => {
      let playerCards = [];
      const location = _.sample(state.locations);
      for (let i = 0; i < state.playersCount; i++) {
        playerCards.push({id: i, location: location.name, isSpy: false})
      }
      const randomId = _.random(0, state.playersCount - 1)
      playerCards[randomId].location = "???";
      playerCards[randomId].isSpy = true;
      return {
        ...state,
        players: playerCards,
        currentPlayer: playerCards[0],
      }
    }),
    next: () => set((state) => {
      if (state.currentPlayer.id + 1 === state.playersCount) {
        throw new Error("Out of bounds!")
      }
      return {
        ...state,
        currentPlayer: state.players[++state.currentPlayer.id]
      }
    }),
    endGame: () => set((state) => ({
      ...state,
      players: [],
      currentPlayer: {}
    }))
  }))
;

export default useStore;