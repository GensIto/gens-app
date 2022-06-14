import { useQuerySeat } from '../hooks/useQuerySeat'
import { useRealtime } from 'react-supabase'
import { useUpdate } from 'react-supabase'
import { Seat } from './Seat'

export const SeatList = () => {
  const [result, reexecute] = useRealtime('seat')
  const { data, fetching, error } = result

  if (fetching) return <p className="text-indigo-600">Loading...</p>
  if (error) return <p className="text-pink-600">Error! {error.message}</p>

  return (
    <div className="text-center">
      <h1>HI</h1>
      <ul>
        {data?.map((seat) => (
          <li className="my-2 flex flex-col items-center" key={seat.id}>
            <label>{seat.user_id}</label>
            <Seat id={seat.id} active={seat.active} />
          </li>
        ))}
      </ul>
    </div>
  )
}
