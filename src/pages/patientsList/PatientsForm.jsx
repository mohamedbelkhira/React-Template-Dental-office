import React, { useState } from 'react';
import { TextField, Button, Grid, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { PhoneOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons';

import { addPatient, checkIfPatientExists } from '../../api/patientservice';

const PatientFormDialog = ({ open, onClose }) => {
  const [patientInfo, setPatientInfo] = useState({
    fullName: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo({ ...patientInfo, [name]: value });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
    const formattedValue = formatPhoneNumber(value); // Format the phone number
    setPatientInfo({ ...patientInfo, phoneNumber: formattedValue });
  };

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumberLength = value.length;
    if (phoneNumberLength < 4) return value;
    if (phoneNumberLength < 7) {
      return `(${value.slice(0, 3)}) ${value.slice(3)}`;
    }
    return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!patientInfo.fullName || !patientInfo.phoneNumber) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      console.log("Checking if patient already exists...");

      // Check if the patient already exists
      const patientExists = await checkIfPatientExists(patientInfo.fullName, patientInfo.phoneNumber);

      if (patientExists) {
        alert("Patient with this name and phone number already exists.");
        return;
      }

      // If patient doesn't exist, proceed to add
      await addPatient({
        name: patientInfo.fullName,
        contact: patientInfo.phoneNumber,
        consultations: [], // Leave consultations empty for now
        appointments: []  // Leave appointments empty for now
      });

      console.log('Patient added:', patientInfo);
      onClose(); // Close the dialog on successful submission
    } catch (error) {
      console.error("Error adding patient:", error);
      alert("Failed to add patient.");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle className="flex justify-between items-center">
        <span className="text-lg font-bold">Patient Information</span>
        <IconButton aria-label="close" onClick={onClose}>
          <CloseOutlined />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <Grid container spacing={2}>
            <Grid item xs={12} className="flex items-center">
              <UserOutlined className="text-xl mr-2" />
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                name="fullName"
                value={patientInfo.fullName}
                onChange={handleChange}
                required
                className="w-full"
              />
            </Grid>
            <Grid item xs={12} className="flex items-center">
              <PhoneOutlined className="text-xl mr-2" />
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                name="phoneNumber"
                value={patientInfo.phoneNumber}
                onChange={handlePhoneChange}
                required
                type="tel"
                placeholder="(123) 456-7890"
                inputProps={{ maxLength: 14 }}
                className="w-full"
              />
            </Grid>
          </Grid>
          <DialogActions>
            <Button startIcon={<CloseOutlined />} onClick={onClose} color="secondary" className="text-red-500 hover:text-red-700">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Submit
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PatientFormDialog;
