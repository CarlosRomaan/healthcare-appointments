/* eslint-disable */

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";

const RequestSuccess = async ({
  searchParams,
  params: { userId },
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment.primaryPhysician
  );

  return (
    <div className=" flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <div className="flex gap-1">
            <Image
              src="/assets/images/logo-img.png"
              height={1000}
              width={1000}
              alt="logo"
              className="mb-12 h-10 w-fit"
            />
            <span className="text-white text-2xl font-semibold mt-1">
              Healthcare
            </span>
          </div>
        </Link>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            ¡Su <span className="text-green-500">solicitud de cita</span> ha sido enviada exitosamente!
          </h2>
          <p>Nos pondremos en contacto contigo en breve para confirmarlo.</p>
        </section>

        <section className="request-details">
          <p>Detalles de la cita solicitada: </p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image!}
              alt="doctor"
              width={100}
              height={100}
              className="size-6"
            />
            <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
            />
            <p> {formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>

        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            Agendar otra cita
          </Link>
        </Button>

        <p className="copyright">&copy; 2025 Healthcare</p>
      </div>
    </div>
  );
}

export default RequestSuccess;