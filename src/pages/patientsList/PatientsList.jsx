import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, TextField } from '@mui/material';

// Custom imports
import { getPatients } from '../../api/patientservice'; // Import your Firestore getPatients function
import PatientFormDialog from './PatientsForm'; // Form to add patients
import { PlusOutlined } from '@ant-design/icons';
import PatientCard from './PatientCard'; // Card component to display each patient

// ============================|| COMPONENT - PATIENTS LIST ||============================ //

export default function PatientsList({ setSelectedPatient }) {
  const [patients, setPatients] = useState([]); // All patients state
  const [openDialog, setOpenDialog] = useState(false); // Control dialog open/close
  const [filteredPatients, setFilteredPatients] = useState([]); // Patients filtered by search
  const [searchQuery, setSearchQuery] = useState(''); // Search input value

  // Fetch patients data on component mount
  useEffect(() => {
    getPatients().then((data) => {
      setPatients(data);
      setFilteredPatients(data); // Initialize filtered patients
    });
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter patients by name or phone number
    const filtered = patients.filter((patient) =>
      patient.name.toLowerCase().includes(query) || patient.contact.includes(query)
    );
    setFilteredPatients(filtered);
  };

  // Open the dialog to add a new patient
  const handleAddPatient = () => {
    setOpenDialog(true);
  };

  // Close the dialog and update patient list if a new patient was added
  const handleDialogClose = (newPatient) => {
    setOpenDialog(false);
    if (newPatient) {
      // Add the new patient to the state
      setPatients((prevPatients) => [...prevPatients, newPatient]);
      // Update filtered patients to reflect the new list
      setFilteredPatients((prevPatients) => [...prevPatients, newPatient]);
    }
  };

  // Handle update patient logic (to be implemented)
  const handleUpdatePatient = (patient) => {
    console.log('Update patient:', patient);
    // Open PatientFormDialog with patient data to update
  };

  // Handle delete patient logic (to be implemented)
  const handleDeletePatient = (id) => {
    console.log('Delete patient with ID:', id);
    // Implement the delete logic here
  };

  // Handle patient card click (selecting a patient)
  const handlePatientCardClick = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <>
      {/* Search bar and Add Patient button */}
      <div className="flex justify-between items-center mb-4">
        <TextField
          fullWidth
          placeholder="Search patients by name or phone"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-[50%]"
        />
        <Button
          startIcon={<PlusOutlined />}
          variant="contained"
          color="primary"
          onClick={handleAddPatient}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Patient
        </Button>
      </div>

      {/* Patients grid */}
      <Grid container spacing={3} className="overflow-y-scroll max-h-[70vh] mt-2">
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <Grid item xs={12} md={4} lg={3} key={patient.id}>
              <PatientCard
                patient={patient}
                onDelete={handleDeletePatient}
                onUpdate={handleUpdatePatient}
                onPatientSelect={handlePatientCardClick}
              />
            </Grid>
          ))
        ) : (
          <Grid className="flex justify-center" item xs={12}>
            <Typography>No patients available</Typography>
          </Grid>
        )}
      </Grid>

      {/* Patient Form Dialog */}
      <PatientFormDialog open={openDialog} onClose={handleDialogClose} />
    </>
  );
}
