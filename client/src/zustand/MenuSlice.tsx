import { create } from 'zustand'

type MenuStates = {
  isOpen: boolean,
}

type MenuActions = {
  toggleMenu: () => void
  closeMenu: () => void
}

export const useMenuSlice = create<MenuStates & MenuActions>()((set) => ({
  isOpen: false,

  toggleMenu: () => set((state) => {
      if (state.isOpen === false) return { isOpen: true }
      else return { isOpen: false }
    }
  ),

  closeMenu: () => set({ isOpen: false })
}))