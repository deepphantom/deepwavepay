import { FormLayout } from "@/layouts/onboard/form";
import React from "react";

export default function OnboardingPage() {

  // State
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <FormLayout 
      title="Let's get started"
      subtitle="I want to open an"
    >
      <div>
        <p>cskcknsk</p>
      </div>
    </FormLayout>
  );
}
