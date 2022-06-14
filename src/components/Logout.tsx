import { LoginIcon } from '@heroicons/react/solid'
import React from 'react'
import { useQueryClient } from 'react-query'
import { supabase } from '../utils/supabase'
import { useUpdate } from 'react-supabase'

const Logout = () => {
  const queryClient = useQueryClient()
  const userId = supabase.auth.user()?.id
  const [{ count, data, error, fetching }, execute] = useUpdate('seat')
  async function signOut() {
    const { count, data, error } = await execute(
      { active: false, user_id: null },
      (query) => query.eq('user_id', userId)
    )
    supabase.auth.signOut()
  }
  return (
    <>
      <LoginIcon
        className="absolute top-0 left-0 mt-1 ml-2 h-12 w-12 text-indigo-600"
        onClick={signOut}
      />
    </>
  )
}

export default Logout
