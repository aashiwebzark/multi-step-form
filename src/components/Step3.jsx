export default function Step3({ register, errors }) {
  return (
    <div>
      <h2>Step 3</h2>
      <input type="password" {...register("password")} placeholder="Password" />
      <p>{errors.password?.message}</p>

      <input type="password" {...register("confirmPassword")} placeholder="Confirm Password" />
      <p>{errors.confirmPassword?.message}</p>
    </div>
  );
}