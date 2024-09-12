import React, { useState } from 'react';
import { Breadcrumbs, Grid, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import ComponentSkeleton from 'pages/component-overview/ComponentSkeleton';
import PatientsList from './PatientsList';
import PatientDetails from './PatientDetails';

// ============================|| COMPONENT - PATIENTS LIST ||============================ //

export default function PatientsManagement() {
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <ComponentSkeleton>
      <Grid item className="my-4">
        <Breadcrumbs aria-label="breadcrumb">
          <Typography
            variant="h4"
            className={` ${!selectedPatient ? 'text-black' : 'hover:underline cursor-pointer'}`}
            onClick={() => setSelectedPatient(null)}
          >
            Patient List
          </Typography>
          {selectedPatient && <Typography className="text-black">{selectedPatient.name}</Typography>}
        </Breadcrumbs>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MainCard className="min-h-[80vh]">
            {!selectedPatient && <PatientsList setSelectedPatient={setSelectedPatient} />}
            {selectedPatient && <PatientDetails patient={selectedPatient} setPatient={setSelectedPatient} />}
          </MainCard>
        </Grid>
      </Grid>
    </ComponentSkeleton>
  );
}
