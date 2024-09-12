// src/components/ConsultationHistory.jsx

import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import SessionListDialog from './SessionListDialog';

const ConsultationHistory = ({ consultations }) => {
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [open, setOpen] = useState(false);

  // Open the dialog with sessions for a specific consultation
  const handleConsultationClick = (consultation) => {
    setSelectedConsultation(consultation);
    setOpen(true);
  };

  // Close the dialog
  const handleClose = () => {
    setOpen(false);
    setSelectedConsultation(null);
  };

  // Calculate total paid vs consultation price
  const getPaymentStatus = (consultation) => {
    const totalPaid = consultation.sessions.reduce((acc, session) => acc + session.payment, 0);
    const paidInFull = totalPaid >= consultation.price;

    return {
      totalPaid,
      paidInFull
    };
  };

  if (!consultations.length) {
    return <Typography variant="body1">No consultations available.</Typography>;
  }

  return (
    <div className="space-y-4">
      {consultations.map((consultation, index) => {
        const { totalPaid, paidInFull } = getPaymentStatus(consultation);
        const paymentColor = paidInFull ? 'text-green-500' : 'text-orange-500';
        const PaymentIcon = paidInFull ? CheckCircleOutlined : ExclamationCircleOutlined;

        return (
          <Card key={index} className="shadow-sm hover:bg-gray-100 cursor-pointer">
            <CardContent onClick={() => handleConsultationClick(consultation)}>
              <div className="flex justify-between items-center ">
                <Typography variant="h6">{consultation.details}</Typography>
                <div className="flex gap-2 items-center">
                  <Typography variant="body1" className={paymentColor}>
                    {`${totalPaid} USD / ${consultation.price} USD`}
                  </Typography>
                  <PaymentIcon className={paymentColor} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}

      {/* Session List Dialog */}
      {selectedConsultation && <SessionListDialog open={open} onClose={handleClose} consultation={selectedConsultation} />}
    </div>
  );
};

export default ConsultationHistory;
