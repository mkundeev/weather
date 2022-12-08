import React from "react";
import { AxiosError } from "axios";

interface IProps {
  error: unknown;
}
export default function ErrorHandler({ error }: IProps) {
  if (error instanceof AxiosError) {
    return <div>{error.message}</div>;
  }
  return <div>Unknown error, please try later</div>;
}
