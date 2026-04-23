import { RequirementType, createActor } from "@/backend";
import type { InquiryFormData } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useState } from "react";

export type InquiryStatus = "idle" | "submitting" | "success" | "error";

export function useInquiry() {
  const { actor } = useActor(createActor);
  const [status, setStatus] = useState<InquiryStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function submitInquiry(data: InquiryFormData): Promise<void> {
    if (!actor) {
      setErrorMessage("Service unavailable. Please try again.");
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setErrorMessage("");
    try {
      const reqType =
        RequirementType[data.requirementType as keyof typeof RequirementType];
      const result = await actor.submitInquiry(
        data.name,
        data.phone,
        data.email,
        reqType,
        data.message,
      );
      if (result.__kind__ === "ok") {
        setStatus("success");
      } else {
        setErrorMessage(
          result.err || "Failed to submit inquiry. Please try again.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage("Failed to submit inquiry. Please try again.");
      setStatus("error");
    }
  }

  function reset() {
    setStatus("idle");
    setErrorMessage("");
  }

  return { submitInquiry, status, errorMessage, reset };
}
