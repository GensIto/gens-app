import { useUpdate } from 'react-supabase'
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

export const Seat = (props: { active: boolean; id: string }) => {
  const userId = supabase.auth.user()?.id

  const [{ count, data, error, fetching }, execute] = useUpdate('seat')
  async function onClick() {
    const { count, data, error } = await execute(
      { active: true, user_id: userId },
      (query) => query.eq('id', props.id)
    )
  }

  return (
    <>
      <input
        id={props.id}
        type="radio"
        name="seat"
        disabled={props.active}
        onClick={onClick}
      />
    </>
  )
}
