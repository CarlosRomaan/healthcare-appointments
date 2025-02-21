/* eslint-disable */

import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <div className="flex gap-1">
            <Image
              src="/assets/images/logo-img.png"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-12 h-10 w-fit"
            />
            <span className="text-white text-2xl font-semibold mt-1">
              Healthcare
            </span>
          </div>

          <RegisterForm user={user} />

          <p className="copyright py-12">&copy; 2025 Healthcare</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
}

export default Register;