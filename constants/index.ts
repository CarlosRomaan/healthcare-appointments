
export const GenderOptions = [
  { value: "Male", label: "Hombre" },
  { value: "Female", label: "Mujer" },
  { value: "Other", label: "Otro" }
];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  { value: "Birth Certificate", label: "Certificado de nacimiento" },
  { value: "Driver's License", label: "Licencia de conducir" },
  { value: "Medical Insurance Card/Policy", label: "Tarjeta/póliza de seguro médico" },
  { value: "Military ID Card", label: "Cartilla militar" },
  { value: "National Identity Card", label: "Credencial para votar" },
  { value: "Resident Alien Card (Green Card)", label: "Tarjeta de residente extranjero" },
  { value: "Social Security Card", label: "Tarjeta de seguridad social" },
  { value: "Student ID Card", label: "Credencial de identificación de estudiante" },
  { value: "Passport", label: "Pasaporte" },
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
