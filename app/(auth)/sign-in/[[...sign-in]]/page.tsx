import { SignIn } from "@clerk/nextjs";

export default function Page() {
    console.log('halaman sign in')
    return <SignIn />
}