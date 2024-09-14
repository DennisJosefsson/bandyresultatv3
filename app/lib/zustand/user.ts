import { createContext } from 'react'
import { create } from 'zustand'
import { User } from '../types/user/user'
type UserStore = { user: User | null }

export const useUserStore = create<UserStore>()(() => ({
  user: null,
}))

export const setUser = (user: User) => useUserStore.setState({ user })
export const resetUser = () => useUserStore.setState({ user: null })
export const getUser = () => useUserStore.getState()

export const UserContext = createContext<UserStore | null>(null)
