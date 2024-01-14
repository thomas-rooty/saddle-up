import { create } from 'zustand'

interface CharacterState {
  isOnFloor: boolean
  setIsOnFloor: (isOnFloor: boolean) => void
  horseState: string
  setHorseState: (horseState: string) => void
}

export const useCharacterStore = create<CharacterState>((set) => ({
  isOnFloor: true,
  setIsOnFloor: (isOnFloor) => set({ isOnFloor }),
  horseState: '1Idle1',
  setHorseState: (horseState) => set({ horseState }),
}))
