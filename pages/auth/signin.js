import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="font-xs italic">
          This is not a REAL app, it is built for educational purposes only
        </p>
        <div className="mt-40">
                {Object.values(providers).map((provider) => (
                  <div key={provider.name}>
                    <button
                      className="transform cursor-pointer rounded-lg p-3 font-semibold text-blue-400 transition duration-200 ease-out hover:scale-110 hover:border-4 hover:border-blue-400 hover:bg-blue-50"
                      onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                    >
                      Sign in with {provider.name}
                    </button>
                  </div>
                ))}
              </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default SignIn;
