import create from "zustand";
import _ from "lodash";
import {locations} from "../utils/locations";

const initialPlayersState = [
  {id: 0, name: "", isSpy: false},
  {id: 1, name: "", isSpy: false},
  {id: 2, name: "", isSpy: false},
  {id: 3, name: "", isSpy: false},
]


const useStore = create((set) => ({
    playersCount: 4,
    players: initialPlayersState,
    locations: locations,
    currentPlayer: {},
    spy: {},
    updatePlayer: (id, name) => set((state) => {
      const idx  = state.players.findIndex(value => value.id === id);
      if (idx === -1) {
        state.players.push({id, name, isSpy: false});
      } else {
        state.players[idx].name = name;
      }
      return {
        ...state
      }
    }),
    setPlayersCount: (count) => set((state) => {
      while (state.players.length > count) state.players.pop();
      for (let i = state.players.length; i < count; i++) {
        state.players.push({id: i, name: "", isSpy: false})
      }
      return {
        ...state,
        playersCount: count
      }
    }),
    newGame: () => set((state) => {
      const location = _.sample(state.locations);
      for (let i = 0; i < state.playersCount; i++) {
        state.players[i].location = location.name;
      }
      const randomId = _.random(0, state.playersCount - 1)
      state.players[randomId].location = "???";
      state.players[randomId].isSpy = true;
      return {
        ...state,
        currentPlayer: state.players[0],
      }
    }),
    next: () => set((state) => {
      if (state.players[state.currentPlayer.id + 1] === undefined) {
        throw new Error("Out of bounds!")
      }
      if (state.currentPlayer.isSpy) state.spy = state.currentPlayer;
      return {
        ...state,
        currentPlayer: state.players[++state.currentPlayer.id]
      }
    }),
    endGame: () => set((state) => ({
      ...state,
      currentPlayer: {},
      spyName: ""
    })),
  }))
;

export default useStore;