export type Seat = {
  id: string
  created_at: string
  active: boolean | undefined
  user_id: string | undefined
}

export type EditedSeat = {
  active: boolean | undefined
  user_id: string | undefined
}
