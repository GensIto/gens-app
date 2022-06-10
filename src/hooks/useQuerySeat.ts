import { useQuery } from 'react-query'
import { supabase } from '../utils/supabase'
import { Seat } from '../types'

export const useQuerySeat = () => {
  const getSeats = async () => {
    const { data, error } = await supabase
      .from('seat')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) {
      throw new Error(error.message)
    }
    return data
  }

  return useQuery<Seat[]>({
    queryKey: ['seat'],
    queryFn: getSeats,
  })
}
