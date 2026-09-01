"use client";

export function openInquiry(planName: string = "") {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-inquiry-modal", { detail: planName })
    );
  }
}
