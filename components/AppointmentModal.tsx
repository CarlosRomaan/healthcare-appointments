/* eslint-disable */

"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Appointment } from "@/types/appwrite.types";
import { Button } from "@/components/ui/button";
import { AppointmentForm } from "./forms/AppointmentForm";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export const AppointmentModal = ({
  patientId,
  userId,
  appointment,
  type,
}: {
  patientId: string;
  userId: string;
  appointment?: Appointment;
  type: "schedule" | "cancel";
  title: string;
  description: string;
}) => {
  const [open, setOpen] = useState(false);

  const appointmentTranslations: Record<string, string> = {
    schedule: "agendar",
    cancel: "cancelar"
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className={`capitalize ${type === "schedule" && "text-green-500"}`}
        >
          {appointmentTranslations[type]}
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize">{appointmentTranslations[type]} cita</DialogTitle>
          <DialogDescription>
            Por favor, rellene los siguientes datos para {appointmentTranslations[type]} su cita.
          </DialogDescription>
        </DialogHeader>

        <AppointmentForm
          userId={userId}
          patientId={patientId}
          type={type}
          appointment={appointment}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
}