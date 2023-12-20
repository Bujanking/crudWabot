import LoginForm from "./components/LoginForm";
import { redirect } from "next/navigation";
import { authOption } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOption)

  if(session) redirect('/country')
  return (
    <div>
      <LoginForm/>
    </div>
  )
}
