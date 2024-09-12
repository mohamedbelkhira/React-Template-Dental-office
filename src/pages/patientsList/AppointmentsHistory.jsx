// src/components/AppointmentsHistory.jsx

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const AppointmentsHistory = ({ appointments }) => {
  if (!appointments.length) {
    return <Typography variant="body1">No appointments available.</Typography>;
  }

  return (
    <div className="space-y-4">
      {appointments.map((appointment, index) => (
        <Card key={index} className="shadow-sm">
          <CardContent>
            <Typography variant="h6">{appointment.date}</Typography>
            <Typography variant="body2">{appointment.details}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AppointmentsHistory;
