// material-ui
import Grid from '@mui/material/Grid';

// project import
import MainCard from 'components/MainCard';
import ComponentSkeleton from 'pages/component-overview/ComponentSkeleton';
import ComponentWrapper from 'pages/component-overview/ComponentWrapper';
import React, { useEffect, useState } from 'react';
import { Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material';
import { CalendarOutlined, FileOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { ApointmentsService } from 'api/apointment-service';

// ============================|| COMPONENT - SHADOW ||============================ //

export default function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments data on component mount
  useEffect(() => {
    ApointmentsService.getApointments().then((data) => {
      setAppointments(data);
    });
  }, []);

  return (
    <ComponentSkeleton>
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MainCard>
              <List>
                {appointments.map((appointment) => (
                  <React.Fragment key={appointment.id}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FileOutlined />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${appointment.patientName} - ${appointment.doctorName}`}
                        secondary={
                          <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                              <Typography variant="body2">
                                <CalendarOutlined /> Date: {appointment.appointmentDate}
                              </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Typography variant="body2">
                                <ClockCircleOutlined /> Time: {appointment.appointmentTime}
                              </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Typography variant="body2">Appointment Type: {appointment.appointmentType}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Typography variant="body2">Status: {appointment.status}</Typography>
                            </Grid>
                          </Grid>
                        }
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            </MainCard>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  );
}
