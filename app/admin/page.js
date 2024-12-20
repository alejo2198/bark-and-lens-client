'use client'
import React from "react";
import styles from './AppointmentList.module.scss'
import Button from "../components/UI/Button/Button";

const AppointmentTable = () => {
  // Sample data
  const appointments = [
    {
      id: 1,
      clientName: "John Doe",
      date: "2024-12-20",
      time: "10:00 AM",
      package: "Premium",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      clientName: "Jane Smith",
      date: "2024-12-21",
      time: "1:00 PM",
      package: "Basic",
      email: "jane.smith@example.com",
    },
    {
        id: 1,
        clientName: "John Doe",
        date: "2024-12-20",
        time: "10:00 AM",
        package: "Premium",
        email: "john.doe@example.com",
      },
      {
        id: 2,
        clientName: "Jane Smith",
        date: "2024-12-21",
        time: "1:00 PM",
        package: "Basic",
        email: "jane.smith@example.com",
      },
  ];

  const handleEdit = (id) => {
    alert(`Edit appointment with ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Delete appointment with ID: ${id}`);
  };

  return (
    <div>
      <h2 className={styles.header}>Appointments</h2>
      <table className={styles["table"]}>
        <thead >
          <tr className={styles["table__header"]}>
            <th className={styles["table__field"]}>Client Name</th>
            <th className={styles["table__field"]}>Date</th>
            <th className={styles["table__field"]}>Time</th>
            <th className={styles["table__field"]}>Package</th>
            <th className={styles["table__field"]}>Email</th>
            <th className={styles["table__field"]}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} className={styles["table__row"]}>
              <td className={styles["table__cell"]}>{appointment.clientName}</td>
              <td className={styles["table__cell"]}>{appointment.date}</td>
              <td className={styles["table__cell"]}>{appointment.time}</td>
              <td className={styles["table__cell"]}>{appointment.package}</td>
              <td className={styles["table__cell"]}>{appointment.email}</td>
              <td className={styles["table__cell"]}>
                <Button variant="view" text="View Details"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default AppointmentTable;
