import { create } from 'zustand';
import { produce } from "immer";

interface State {
  notifications: Array<{
    type: string
    message: string
    description?: string
    txid?: string
  }>
  set: (x: any) => void
}

interface NotificationStore extends State {
  notifications: Array<{
    type: string
    message: string
    description?: string
    txid?: string
  }>
  set: (x: any) => void
}

const useNotificationStore = create<NotificationStore>((set: any, _get: any) => ({
  notifications: [],
  set: (fn: (state: NotificationStore) => void) => set(produce(fn)),
}))

export default useNotificationStore
