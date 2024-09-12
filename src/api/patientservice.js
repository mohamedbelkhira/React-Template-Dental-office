import { firestore } from '../firebase'; // Firestore initialization from firebase.js
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'; // Modular Firestore imports

// Add a new patient to Firestore
export const addPatient = async (patientData) => {
  try {
    const docRef = await addDoc(collection(firestore, 'patients'), patientData); // Correct v9 syntax
    return docRef.id;
  } catch (error) {
    console.error("Error adding patient: ", error);
    throw error;
  }
};

// Check if a patient already exists
export const checkIfPatientExists = async (fullName, phoneNumber) => {
    try {
      // Create a query to check for matching name and phone number
      const q = query(
        collection(firestore, 'patients'),
        where('name', '==', fullName),
        where('contact', '==', phoneNumber)
      );
  
      // Execute the query
      const querySnapshot = await getDocs(q);
  
      // If querySnapshot has any documents, return true (patient exists)
      return !querySnapshot.empty;
    } catch (error) {
      console.error("Error checking if patient exists:", error);
      throw error;
    }
  };

  //get all patient that exists 
  export const getPatients = async () => {
    try {
      // Get the reference to the "patients" collection
      const patientsCollectionRef = collection(firestore, 'patients');
      
      // Fetch all documents from the collection
      const querySnapshot = await getDocs(patientsCollectionRef);
  
      // Map the documents to an array of patient objects
      const patients = querySnapshot.docs.map(doc => ({
        id: doc.id,  // Include the document ID
        ...doc.data() // Spread the document data
      }));
  
      return patients;
    } catch (error) {
      console.error("Error fetching patients:", error);
      throw error;
    }
  };