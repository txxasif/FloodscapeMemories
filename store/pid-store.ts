import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { persist } from "zustand/middleware";

export type State = {
  pid: string | number | null;
};

export type Actions = {
  setPid: (pid: string | number) => void;
};

export const usePidStore = create<State & Actions>()((set) => ({
  pid: -10,
  setPid: (pid: string | number | null) => set({ pid: pid }),
}));
