import { Layout } from '../components/Layout'
import { Timer } from './Timer'
import Logout from './Logout'
import { SeatList } from './SeatList'

export const DashBoard = () => {
  return (
    <Layout title="DashBoard">
      <Timer />
      <Logout />
      <SeatList />
    </Layout>
  )
}
