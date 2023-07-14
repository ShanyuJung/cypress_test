"use client";
import { useSearchParams } from "next/navigation";
import classes from "./page.module.css";

const Result = () => {
  const searchParams = useSearchParams();

  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");

  return (
    <div className={classes.container}>
      <div>{`First Name: ${firstName}`}</div>
      <div>{`First Name: ${lastName}`}</div>
    </div>
  );
};

export default Result;
