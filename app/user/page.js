import UpcomingAppointments from "./sections/UpcomingAppointments/UpcomingAppointments"
import PhotoShootMenu from "./sections/PhotoShootMenu/PhotoShootMenu"

const Dashboard = () => {
    
    return (
        <>
        <UpcomingAppointments appointment={null} />
        <PhotoShootMenu onDashboard={true}/>
        </>
    )
}
export default Dashboard