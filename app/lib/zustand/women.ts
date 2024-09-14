import { createContext } from 'react'
import { create } from 'zustand'
type GenderStore = { women: boolean }

export const useGenderStore = create<GenderStore>()(() => ({
  women: false,
}))

export const setGender = (women: boolean) => useGenderStore.setState({ women })

export const getGender = () => useGenderStore.getState()

export const GenderContext = createContext<GenderStore | null>(null)
