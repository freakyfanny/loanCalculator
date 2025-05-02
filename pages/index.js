import LoanCalculator from "../components/LoanCalculator";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lånekalkylator</title>
      </Head>
      <h1>Välkommen till lånekalkylator</h1>
      <LoanCalculator />
    </div>
  );
}
