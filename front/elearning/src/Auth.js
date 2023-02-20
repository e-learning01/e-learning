import { create } from 'zustand'

export const useAuth = create((set,get) => ({
  connected: false,
  user : {},
  connect: (user) => set((state) => ({ connected: true , user:user  })),
  logg :  () => {const user = get().user ;  console.log(user) } ,
  remove: () => set({ connected : false , user: {} }),
}))