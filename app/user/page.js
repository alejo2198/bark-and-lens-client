'use client'
import UpcomingAppointments from "./sections/UpcomingAppointments/UpcomingAppointments"
import PhotoShootMenu from "./sections/PhotoShootMenu/PhotoShootMenu"
import { useEffect, useState } from "react";
import { auth } from "../firebase/firbaseConfig"
import { useRouter } from "next/navigation";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state
    const router = useRouter();
    const db = getFirestore();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          setUser(user);
          console.log(user.uid)
          try {
            // Query the 'appointments' collection where 'user_id' matches the logged-in user's uid
            const appointmentsQuery = query(
              collection(db, "appointments"),
              where("user_id", "==", user.uid)
            );
            const querySnapshot = await getDocs(appointmentsQuery);
            const appointmentsData = querySnapshot.docs.map(doc => ({
              id: doc.id,  // Add the document ID to each appointment
              ...doc.data()  // Spread the rest of the document data
            }));
            console.log(appointmentsData); // This will log the appointments data

            setAppointments(appointmentsData);
          } catch (error) {
            console.error("Error fetching appointments: ", error);
          } finally {
            setLoading(false); // Set loading to false when data is fetched
          }
        } else {
            router.push("/signup");
        }
      });
  
      return () => unsubscribe();
    }, [db, router,loading]);
    if (!user) {
      return <p>User not authenticated</p>; // Handle case if user is not logged in
    }
    if (loading) {
      return <p>Loading...</p>; // Display loading state while data is being fetched
    } else{
      console.log(appointments[0])
      return (
          <>
          {/* // {hasAppointments ? (
          //   <UpcomingAppointments appointments={appointments[0]} />
          // ) : (
          //   <UpcomingAppointments appointments={null} />
          // )} */}
          <UpcomingAppointments appointment={appointments[0]} />
          <PhotoShootMenu onDashboard={true}/>
          </>
      );

    }

    
  

}

export default Dashboard;
