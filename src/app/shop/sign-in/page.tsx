import { SignedIn, SignedOut, SignIn } from '@clerk/nextjs';
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'
type SignInPageProps = {
  searchParams: {
    redirectUrl: string;
  };
};

export default function SignInPage({
  searchParams: { redirectUrl },
}: SignInPageProps) {
  return (
    <section className='py-14'>
      <ClerkProvider localization={ptBR}>
      <div className='container mx-auto px-4'>
        <div className='flex justify-center'>
          <SignIn signUpUrl='/shop/sign-up' redirectUrl={redirectUrl} />
        </div>
      </div>
      </ClerkProvider>
    </section>
  );
}