import create from 'zustand'
import { Session } from '@supabase/supabase-js'
import { EditedSeat } from '../types'

type State = {
  session: Session | null
  setSession: (payload: Session | null) => void
  editedSeat: EditedSeat
  updateEditedSeat: (payload: EditedSeat) => void
  resetEditedSeat: (payload: EditedSeat) => void
}

const useStore = create<State>((set) => ({
  session: null,
  setSession: (payload) => set({ session: payload }),
  active: true,
  setActive: false,
  editedSeat: { active: false, user_id: '' },
  updateEditedSeat: (payload) =>
    set({
      editedSeat: {
        active: payload.active,
        user_id: payload.user_id,
      },
    }),
  resetEditedSeat: () => set({ editedSeat: { active: false, user_id: '' } }),
}))
export default useStore
