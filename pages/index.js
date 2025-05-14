import LoanCalculator from "../components/LoanCalculator";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lånekalkylator</title>
      </Head>
      <main>
        <h1>Välkommen till lånekalkylator</h1>
        <LoanCalculator />
      </main>
    </>
  );
}
