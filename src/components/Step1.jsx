export default function Step1({ register, errors }) {
  return (
    <div>
      <h2>Step 1</h2>
      <input {...register("name")} placeholder="Name" />
      <p>{errors.name?.message}</p>

      <input {...register("email")} placeholder="Email" />
      <p>{errors.email?.message}</p>
    </div>
  );
}