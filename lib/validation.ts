import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre debe tener como máximo 50 caracteres"),
  email: z.string().email("Dirección de correo electrónico no válida"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Número de teléfono inválido"),
});

export const PatientFormValidation = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre debe tener como máximo 50 caracteres"),
  email: z.string().email("Dirección de correo electrónico no válida"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Número de teléfono inválido"),
  birthDate: z.coerce.date(),
  gender: z.enum(["Male", "Female", "Other"]),
  address: z
    .string()
    .min(5, "La dirección debe tener al menos 5 caracteres")
    .max(500, "La dirección debe tener como máximo 500 caracteres"),
  occupation: z
    .string()
    .min(2, "La ocupación debe tener al menos 2 caracteres")
    .max(500, "La ocupación debe tener como máximo 500 caracteres"),
  emergencyContactName: z
    .string()
    .min(2, "El nombre de contacto debe tener al menos 2 caracteres")
    .max(50, "El nombre de contacto debe tener como máximo 50 caracteres"),
  emergencyContactNumber: z
    .string()
    .refine(
      (emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
      "Número de teléfono inválido"
    ),
  primaryPhysician: z.string().min(2, "Selecciona un doctor"),
  insuranceProvider: z
    .string()
    .min(2, "El nombre del seguro debe tener al menos 2 caracteres.")
    .max(50, "El nombre del seguro debe tener como máximo 50 caracteres."),
  insurancePolicyNumber: z
    .string()
    .min(2, "El número de póliza debe tener al menos 2 caracteres.")
    .max(50, "El número de póliza debe tener como máximo 50 caracteres."),
  allergies: z.string().optional(),
  currentMedication: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  identificationType: z.string().optional(),
  identificationNumber: z.string().optional(),
  identificationDocument: z.custom<File[]>().optional(),
  treatmentConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "Debe dar su consentimiento para el tratamiento para poder continuar.",
    }),
  disclosureConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "Debe dar su consentimiento a la divulgación para continuar.",
    }),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "Debes dar tu consentimiento a la privacidad para continuar.",
    }),
});

export const CreateAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Selecciona un doctor"),
  schedule: z.coerce.date(),
  reason: z
    .string()
    .min(2, "El motivo debe tener al menos 2 caracteres")
    .max(500, "El motivo debe tener como máximo 500 caracteres"),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const ScheduleAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Selecciona un doctor"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const CancelAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Selecciona un doctor"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z
    .string()
    .min(2, "El motivo debe tener al menos 2 caracteres")
    .max(500, "El motivo debe tener como máximo 500 caracteres"),
});

export function getAppointmentSchema(type: string) {
  switch (type) {
    case "create":
      return CreateAppointmentSchema;
    case "cancel":
      return CancelAppointmentSchema;
    default:
      return ScheduleAppointmentSchema;
  }
}
