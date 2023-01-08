import Head from "next/head";
import { Inter } from "@next/font/google";
import BaseLayout from "../layouts";
import { Button } from "@mui/material";
import ComboBox from "../components/Common/Inputs/ComboBox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <BaseLayout>
        <h1>Home Page</h1>
        <Button variant="contained">Hello World</Button>
        <ComboBox />
      </BaseLayout>
    </>
  );
}
