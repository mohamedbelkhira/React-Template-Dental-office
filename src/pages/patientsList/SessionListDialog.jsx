// src/components/SessionListDialog.jsx

import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button } from '@mui/material';

const SessionListDialog = ({ open, onClose, consultation }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Consultation Sessions</DialogTitle>
      <DialogContent>
        {consultation.sessions.length > 0 ? (
          consultation.sessions.map((session, idx) => (
            <div key={idx} className="mb-4">
              <Typography variant="subtitle1">
                Session {idx + 1}: {session.details}
              </Typography>
              <Typography variant="body2">Payment: {session.payment} USD</Typography>
            </div>
          ))
        ) : (
          <Typography variant="body2">No sessions available.</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SessionListDialog;
