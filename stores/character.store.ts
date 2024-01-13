import { create } from 'zustand'

interface CharacterState {
  isOnFloor: boolean
  setIsOnFloor: (isOnFloor: boolean) => void
  horseState: '0Tpose' | '1Idle1' | '1Idle2' | '2galop'
  setHorseState: (horseState: '0Tpose' | '1Idle1' | '1Idle2' | '2galop') => void
}

export const useCharacterStore = create<CharacterState>((set) => ({
  isOnFloor: true,
  setIsOnFloor: (isOnFloor) => set({ isOnFloor }),
  horseState: '1Idle1',
  setHorseState: (horseState) => set({ horseState }),
}))
