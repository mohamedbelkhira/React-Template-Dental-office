// src/components/PatientDetailsPage.jsx

import React, { useState } from 'react';
import { Tabs, Tab, Box, SpeedDial, SpeedDialAction } from '@mui/material';
import { CalendarOutlined, FormOutlined, PhoneOutlined, PlusOutlined } from '@ant-design/icons';
import ConsultationHistory from './ConsultationHistory';
import AppointmentsHistory from './AppointmentsHistory';

// PatientHeader Component
const PatientHeader = ({ patient }) => {
  const { name, contact, consultations, appointments } = patient;
  const totalConsultations = consultations.length;
  const totalAppointments = appointments.length;

  return (
    <>
      <div className="p-4 bg-gray-100 rounded-md shadow-sm flex lg:flex-row flex-col gap-2 lg:justify-between justify-center items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
          <div className="text-sm text-gray-600">
            <span className="flex items-center">
              <PhoneOutlined className="mr-2" /> {contact}
            </span>
          </div>
        </div>
        <div className="text-right space-x-6 flex">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-600">{totalConsultations}</h3>
            <p className="text-sm text-green-500">Consultations</p>
          </div>
          <div className="h-8 border-l border-gray-300"></div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-600">{totalAppointments}</h3>
            <p className="text-sm text-blue-500">Appointments</p>
          </div>
        </div>
      </div>
    </>
  );
};

// Tabs Component
const PatientDetailsTabs = ({ currentTab, setCurrentTab }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={currentTab} onChange={(e, newValue) => setCurrentTab(newValue)} aria-label="Patient Details Tabs">
        <Tab label="Consultation History" />
        <Tab label="Appointments History" />
      </Tabs>
    </Box>
  );
};

// Main PatientDetailsPage Component
const PatientDetailsPage = ({ patient }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className=" p-2 space-y-6">
      {/* Header */}
      <PatientHeader patient={patient} />

      {/* Tabs */}
      <PatientDetailsTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Tab Content */}
      <div className="mt-4">
        {currentTab === 0 && <ConsultationHistory consultations={patient.consultations} />}
        {currentTab === 1 && <AppointmentsHistory appointments={patient.appointments} />}
        {/* Speed Dial for Add Actions */}
        <SpeedDial
          ariaLabel="Add Consultation or Appointment"
          className="absolute lg:bottom-20 lg:right-20 bottom-5 right-5"
          icon={<FormOutlined className="text-lg" />}
          direction="up"
        >
          <SpeedDialAction className="text-lg" icon={<PlusOutlined />} tooltipTitle="Consultation" tooltipOpen />
          <SpeedDialAction className="text-lg" icon={<CalendarOutlined />} tooltipTitle=" Appointment" tooltipOpen />
        </SpeedDial>
      </div>
    </div>
  );
};

export default PatientDetailsPage;
