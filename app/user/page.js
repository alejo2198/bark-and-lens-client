import UpcomingAppointments from "./sections/UpcomingAppointments/UpcomingAppointments"
import PhotoShootMenu from "./sections/PhotoShootMenu/PhotoShootMenu"

const Dashboard = () => {
    let appointment = {
        name: "basic",
        date : new Date(),
        location : "Humber Bay Arch Bridge",
        time: "11 AM"
    }
    return (
        <>
        <UpcomingAppointments appointment={appointment}/>
        <PhotoShootMenu/>
        </>
    )
}
export default Dashboard