"use client";

import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return <button type="submit" className="submit-button" disabled={pending}>{pending ? "Sending…" : "Send message →"}</button>;
}
