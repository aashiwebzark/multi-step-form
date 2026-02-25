import "./MultiStepForm.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validationSchema";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

export default function MultiStepForm() {
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched"
  });

  const nextStep = async () => {
    let fields;

    if (step === 0) fields = ["name", "email"];
    if (step === 1) fields = ["city", "pincode"];
    if (step === 2) fields = ["password", "confirmPassword"];

    const valid = await trigger(fields);
    if (valid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const onSubmit = (data) => {
    console.log(data);
    alert("Form Submitted Successfully!");
  };

  return (
    <>
      {/* Step Indicator */}
     <div className="step-indicator">
  {[0, 1, 2, 3].map((item) => (
    <div
      key={item}
      className={`step ${step === item ? "active" : ""}`}
    >
      Step {item + 1}
    </div>
  ))}
</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 0 && <Step1 register={register} errors={errors} />}
        {step === 1 && <Step2 register={register} errors={errors} />}
        {step === 2 && <Step3 register={register} errors={errors} />}

        {/* Review Step */}
        {step === 3 && (
          <div>
            <h2>Review Your Details</h2>
            <p><strong>Name:</strong> {watch("name")}</p>
            <p><strong>Email:</strong> {watch("email")}</p>
            <p><strong>City:</strong> {watch("city")}</p>
            <p><strong>Pincode:</strong> {watch("pincode")}</p>
          </div>
        )}

        <div style={{ marginTop: "20px" }}>
          {step > 0 && (
            <button type="button" onClick={prevStep}>
              Back
            </button>
          )}

          {step < 3 ? (
            <button type="button" onClick={nextStep}>
              Next
            </button>
          ) : (
            <button type="submit">Confirm & Submit</button>
          )}
        </div>
      </form>
    </>
  );
}