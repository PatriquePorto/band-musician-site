import { SignUp } from "@clerk/nextjs";
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'
type SignUpPageProps = {
    searchParams: {
      redirectUrl: string;
    };
  };
  
  export default function SignUpPage({
    searchParams: { redirectUrl },
  }: SignUpPageProps) {
    return (
      <section className='py-14'>
        <ClerkProvider localization={ptBR}>
        <div className='container mx-auto px-4'>
          <div className='flex justify-center'>
            <SignUp signInUrl='/shop/sign-in' redirectUrl={redirectUrl} />
          </div>
        </div>
        </ClerkProvider>
      </section>
    );
  }