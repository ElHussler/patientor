import { useEffect, useState } from "react";
import patients from "../../services/patients";
import { Patient } from "../../types";
import { useParams } from "react-router-dom";

const PatientPage = () => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchPatient = async () => {
      const patient = await patients.getById(id!);
      setPatient(patient);
    };
    void fetchPatient();
  }, [id]);

  if (!patient) {
    return (
      <div>Patient not found</div>
    );
  }

  return (
    <div>
      <h3>{patient.name}</h3>
      <p>{patient.gender}</p>
      <p>{patient.dateOfBirth}</p>
      <p>{patient.occupation}</p>
      <p>{patient.ssn}</p>
    </div>
  );
};

export default PatientPage;