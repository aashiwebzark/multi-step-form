export default function Step2({ register, errors }) {
  return (
    <div>
      <h2>Step 2</h2>
      <input {...register("city")} placeholder="City" />
      <p>{errors.city?.message}</p>

      <input {...register("pincode")} placeholder="Pincode" />
      <p>{errors.pincode?.message}</p>
    </div>
  );
}