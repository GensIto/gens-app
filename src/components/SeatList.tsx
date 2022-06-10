import { useQuerySeat } from '../hooks/useQuerySeat'
import { startTransition } from 'react'
export const SeatList = () => {
  const { data, status } = useQuerySeat()
  if (status === 'loading') {
    return <p className="text-indigo-600">Loading...</p>
  }
  if (status === 'error') {
    return <p className="text-pink-600">Error!</p>
  }
  return (
    <div className="text-center">
      <h1>HI</h1>
      {data?.map((seat) => (
        <li key={seat.id}>
          {seat.id} : {seat.created_at} : {seat.active} : {seat.user_id}
        </li>
      ))}
    </div>
  )
}
