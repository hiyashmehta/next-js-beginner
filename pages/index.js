import Head from "next/head";
import { Inter } from "@next/font/google";
import BaseLayout from "../layouts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <BaseLayout>
        <h1>
          Home Page
        </h1>
      </BaseLayout>
    </>
  );
}
