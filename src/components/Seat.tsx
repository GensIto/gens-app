import { useUpdate } from 'react-supabase'

export const Seat = (props: { active: boolean; id: string }) => {
  const [{ count, data, error, fetching }, execute] = useUpdate('seat', {
    filter: (query) => query.eq('id', true),
  })

  async function onClick() {
    const { count, data, error } = await execute({ active: true }, (query) =>
      query.eq('active', false)
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
