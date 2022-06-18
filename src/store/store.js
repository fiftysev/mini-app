import create from "zustand";
import {locations} from "../utils/locations";

const useStore = create((set) => ({
  playersCount: 4,
  locations: locations,
  setPlayersCount: (count) => set((state) => ({
    ...state,
    playersCount: count
  }))
}));

export default useStore;