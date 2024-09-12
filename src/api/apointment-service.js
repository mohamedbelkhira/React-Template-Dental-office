export const ApointmentsService = {
  getApointmentsData() {
    return [
      {
        id: 1,
        patientName: 'John Doe',
        doctorName: 'Dr. Sarah Taylor',
        appointmentDate: '2024-09-10',
        appointmentTime: '10:00 AM',
        appointmentType: 'Check-up',
        status: 'Scheduled'
      },
      {
        id: 2,
        patientName: 'Jane Smith',
        doctorName: 'Dr. Michael Green',
        appointmentDate: '2024-09-12',
        appointmentTime: '2:30 PM',
        appointmentType: 'Consultation',
        status: 'Scheduled'
      },
      {
        id: 3,
        patientName: 'Bob Johnson',
        doctorName: 'Dr. Anna Brown',
        appointmentDate: '2024-09-15',
        appointmentTime: '11:00 AM',
        appointmentType: 'Follow-up',
        status: 'Completed'
      },
      {
        id: 4,
        patientName: 'Alice Brown',
        doctorName: 'Dr. Emily Clark',
        appointmentDate: '2024-09-18',
        appointmentTime: '3:00 PM',
        appointmentType: 'Therapy',
        status: 'Scheduled'
      },
      {
        id: 5,
        patientName: 'Tom White',
        doctorName: 'Dr. William Johnson',
        appointmentDate: '2024-09-20',
        appointmentTime: '9:00 AM',
        appointmentType: 'Check-up',
        status: 'Cancelled'
      },
      {
        id: 6,
        patientName: 'Nancy Green',
        doctorName: 'Dr. Sarah Taylor',
        appointmentDate: '2024-09-22',
        appointmentTime: '1:00 PM',
        appointmentType: 'Consultation',
        status: 'Scheduled'
      },
      {
        id: 7,
        patientName: 'George Black',
        doctorName: 'Dr. Michael Green',
        appointmentDate: '2024-09-25',
        appointmentTime: '4:00 PM',
        appointmentType: 'Follow-up',
        status: 'Scheduled'
      },
      {
        id: 8,
        patientName: 'Betty Blue',
        doctorName: 'Dr. Anna Brown',
        appointmentDate: '2024-09-28',
        appointmentTime: '10:30 AM',
        appointmentType: 'Therapy',
        status: 'Scheduled'
      },
      {
        id: 9,
        patientName: 'Harry King',
        doctorName: 'Dr. William Johnson',
        appointmentDate: '2024-10-01',
        appointmentTime: '8:00 AM',
        appointmentType: 'Check-up',
        status: 'Scheduled'
      },
      {
        id: 10,
        patientName: 'Lisa Queen',
        doctorName: 'Dr. Emily Clark',
        appointmentDate: '2024-10-03',
        appointmentTime: '5:00 PM',
        appointmentType: 'Consultation',
        status: 'Scheduled'
      }
    ];
  },

  getApointmentsMini() {
    return Promise.resolve(this.getApointmentsData().slice(0, 5));
  },

  getApointmentsSmall() {
    return Promise.resolve(this.getApointmentsData().slice(0, 10));
  },

  getApointments() {
    return Promise.resolve(this.getApointmentsData());
  }
};
