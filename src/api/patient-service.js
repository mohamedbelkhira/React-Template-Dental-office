export const PatientsService = {
  getPatientsData() {
    return [
      {
        name: 'Ahmed Bouzid',
        contact: '213-0556-123456',
        consultations: [
          {
            details: 'Extraction of Wisdom Tooth',
            price: 400,
            sessions: [
              { details: 'Session 1 - Initial examination', payment: 100 },
              { details: 'Session 2 - Extraction', payment: 300 }
            ]
          },
          {
            details: 'Cavity Filling',
            price: 150,
            sessions: [{ details: 'Session 1 - Filling Procedure', payment: 150 }]
          }
        ],
        appointments: [{ date: '2023-10-15', details: 'Follow-up consultation' }]
      },
      {
        name: 'Fatima Bensalem',
        contact: '213-0557-234567',
        consultations: [
          {
            details: 'Orthodontic Braces',
            price: 2000,
            sessions: [
              { details: 'Session 1 - Examination and X-ray', payment: 500 },
              { details: 'Session 2 - Braces installation', payment: 1500 }
            ]
          }
        ],
        appointments: [{ date: '2023-11-01', details: 'Braces tightening' }]
      },
      {
        name: 'Mohamed Belhadi',
        contact: '213-0558-345678',
        consultations: [
          {
            details: 'Dental Implant',
            price: 2500,
            sessions: [
              { details: 'Session 1 - Implant consultation', payment: 500 },
              { details: 'Session 2 - Implant Surgery', payment: 2000 }
            ]
          }
        ],
        appointments: [{ date: '2023-09-20', details: 'Implant check-up' }]
      },
      {
        name: 'Samira Djelloul',
        contact: '213-0559-456789',
        consultations: [
          {
            details: 'Teeth Whitening',
            price: 300,
            sessions: [{ details: 'Session 1 - Whitening Procedure', payment: 300 }]
          },
          {
            details: 'Routine Dental Check',
            price: 100,
            sessions: [{ details: 'Session 1 - General check-up', payment: 100 }]
          }
        ],
        appointments: [{ date: '2023-10-05', details: 'Teeth Whitening Follow-up' }]
      },
      {
        name: 'Yacine Messaoud',
        contact: '213-0560-567890',
        consultations: [
          {
            details: 'Root Canal Treatment',
            price: 600,
            sessions: [
              { details: 'Session 1 - Canal Cleaning', payment: 300 },
              { details: 'Session 2 - Filling the Canal', payment: 300 }
            ]
          }
        ],
        appointments: [{ date: '2023-09-29', details: 'Next root canal session' }]
      },
      {
        name: 'Nouria Saadi',
        contact: '213-0561-678901',
        consultations: [
          {
            details: 'Tooth Extraction',
            price: 200,
            sessions: [
              { details: 'Session 1 - Examination', payment: 50 },
              { details: 'Session 2 - Extraction', payment: 150 }
            ]
          }
        ],
        appointments: [{ date: '2023-11-03', details: 'Post-extraction check-up' }]
      },
      {
        name: 'Khaled Amrane',
        contact: '213-0562-789012',
        consultations: [
          {
            details: 'Dental Cleaning',
            price: 100,
            sessions: [{ details: 'Session 1 - Cleaning', payment: 100 }]
          }
        ],
        appointments: [{ date: '2023-12-12', details: 'Next dental cleaning' }]
      },
      {
        name: 'Sonia Meziane',
        contact: '213-0563-890123',
        consultations: [
          {
            details: 'Veneers',
            price: 1500,
            sessions: [
              { details: 'Session 1 - Preparation', payment: 500 },
              { details: 'Session 2 - Veneer Application', payment: 1000 }
            ]
          }
        ],
        appointments: [{ date: '2023-10-10', details: 'Veneer follow-up' }]
      },
      {
        name: 'Mustapha Lounis',
        contact: '213-0564-901234',
        consultations: [
          {
            details: 'Dental Bridge',
            price: 1000,
            sessions: [
              { details: 'Session 1 - Bridge Consultation', payment: 400 },
              { details: 'Session 2 - Bridge Fitting', payment: 600 }
            ]
          }
        ],
        appointments: [{ date: '2023-10-20', details: 'Bridge adjustment' }]
      },
      {
        name: 'Rachid Zighoud',
        contact: '213-0565-012345',
        consultations: [
          {
            details: 'Gum Treatment',
            price: 350,
            sessions: [
              { details: 'Session 1 - Deep Cleaning', payment: 150 },
              { details: 'Session 2 - Scaling', payment: 200 }
            ]
          }
        ],
        appointments: [{ date: '2023-09-28', details: 'Gum check-up' }]
      },
      {
        name: 'Amina Brahimi',
        contact: '213-0566-123456',
        consultations: [
          {
            details: 'Teeth Whitening',
            price: 250,
            sessions: [{ details: 'Session 1 - Whitening', payment: 250 }]
          }
        ],
        appointments: [{ date: '2023-10-11', details: 'Teeth Whitening Follow-up' }]
      },
      {
        name: 'Salah Djemai',
        contact: '213-0567-234567',
        consultations: [
          {
            details: 'Crown Fitting',
            price: 800,
            sessions: [
              { details: 'Session 1 - Crown Consultation', payment: 300 },
              { details: 'Session 2 - Crown Installation', payment: 500 }
            ]
          }
        ],
        appointments: [{ date: '2023-11-15', details: 'Crown Adjustment' }]
      },
      {
        name: 'Leila Benyahia',
        contact: '213-0568-345678',
        consultations: [
          {
            details: 'Scaling and Polishing',
            price: 150,
            sessions: [{ details: 'Session 1 - Procedure', payment: 150 }]
          }
        ],
        appointments: [{ date: '2023-12-01', details: 'Next cleaning session' }]
      },
      {
        name: 'Hamza Lakhdar',
        contact: '213-0569-456789',
        consultations: [
          {
            details: 'Root Canal Treatment',
            price: 600,
            sessions: [
              { details: 'Session 1 - Root Canal Cleaning', payment: 250 },
              { details: 'Session 2 - Filling', payment: 350 }
            ]
          }
        ],
        appointments: [{ date: '2023-09-30', details: 'Follow-up appointment' }]
      },
      {
        name: 'Yasmine Boualem',
        contact: '213-0570-567890',
        consultations: [
          {
            details: 'Orthodontic Retainers',
            price: 1200,
            sessions: [
              { details: 'Session 1 - Molding', payment: 400 },
              { details: 'Session 2 - Retainer Fitting', payment: 800 }
            ]
          }
        ],
        appointments: [{ date: '2023-11-30', details: 'Retainer check-up' }]
      },
      {
        name: 'Tarek Benkhaled',
        contact: '213-0571-678901',
        consultations: [
          {
            details: 'Implant Placement',
            price: 3000,
            sessions: [
              { details: 'Session 1 - Preparation', payment: 1000 },
              { details: 'Session 2 - Surgery', payment: 2000 }
            ]
          }
        ],
        appointments: [{ date: '2023-10-25', details: 'Implant check-up' }]
      },
      {
        name: 'Salima Farhi',
        contact: '213-0572-789012',
        consultations: [
          {
            details: 'Gingivitis Treatment',
            price: 400,
            sessions: [
              { details: 'Session 1 - Initial examination', payment: 200 },
              { details: 'Session 2 - Treatment', payment: 200 }
            ]
          }
        ],
        appointments: [{ date: '2023-11-05', details: 'Gum condition check-up' }]
      },
      {
        name: 'Hassan Mekhlouf',
        contact: '213-0573-890123',
        consultations: [
          {
            details: 'Tooth Bonding',
            price: 250,
            sessions: [{ details: 'Session 1 - Bonding procedure', payment: 250 }]
          }
        ],
        appointments: [{ date: '2023-12-14', details: 'Bonding follow-up' }]
      }, 
      {
        name: 'Belkhira mohamed',
        contact: '213-0573-890123',
        consultations: [
          {
            details: 'Tooth Bonding',
            price: 250,
            sessions: [{ details: 'Session 1 - Bonding procedure', payment: 250 }]
          }
        ],
        appointments: [{ date: '2023-12-14', details: 'Bonding follow-up' }]
      }
    ];
  },

  getPatientsMini() {
    return Promise.resolve(this.getPatientsData().slice(0, 5));
  },

  getPatientsSmall() {
    return Promise.resolve(this.getPatientsData().slice(0, 10));
  },

  getPatients() {
    return Promise.resolve(this.getPatientsData());
  }
};
