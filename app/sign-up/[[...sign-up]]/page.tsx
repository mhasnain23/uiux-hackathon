import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <SignUp />
    </div>
  );
}
