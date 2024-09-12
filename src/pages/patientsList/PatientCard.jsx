import { IdcardOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import Avatar from 'components/@extended/Avatar'; // Ensure this path is correct

const PatientCard = ({ patient, onUpdate, onDelete, onPatientSelect }) => {
  // Destructure and provide default values for patient data
  const { name = 'Unknown', contact = 'No contact available' } = patient || {};

  return (
    <Card
      onClick={() => onPatientSelect(patient)}
      className="relative shadow-md flex items-center pl-2 hover:shadow-lg hover:bg-gray-100 transition-shadow duration-200 hover:cursor-pointer"
    >
      {/* Avatar */}
      <Avatar>
        <IdcardOutlined />
      </Avatar>

      {/* Card Content */}
      <CardContent className="flex-1">
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {contact}
        </Typography>
      </CardContent>

      {/* Update and Delete Icon Buttons - Hidden by default, shown on hover */}
      <div className="absolute right-4 top-4 flex flex-col">
        <IconButton color="primary" size="small" onClick={() => onUpdate(patient)}>
          <EditOutlined />
        </IconButton>
        <IconButton color="error" size="small" onClick={() => onDelete(patient.id)}>
          <DeleteOutlined />
        </IconButton>
      </div>
    </Card>
  );
};

export default PatientCard;
