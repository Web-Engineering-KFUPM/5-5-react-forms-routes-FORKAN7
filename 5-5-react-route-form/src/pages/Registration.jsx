import { useState } from "react";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    { /*Form validations*/ }
    // Email validation
  if (!email.trim()) {
    nextErrors.email = "Email is required";
  } else if (!(email.includes("@") && email.endsWith(".com"))) {
    nextErrors.email = "Enter a valid email address";
  }
  // Password validation
  if (!password.trim()) {
    nextErrors.password = "Password is required";
  }

  // Gender validation
  if (!gender) {
    nextErrors.gender = "Please select your gender";
  }

  setErrors(nextErrors);

  if (Object.keys(nextErrors).length > 0) return;


    // alert(`Regiteration submit: ${email}`);
    alert(`Registration submit: ${email}`);

  setEmail("");
  setPassword("");
  setGender("");
  }

  return (
    <section>
      <h1>Student Registration</h1>
      <p className="muted">
        Create your portal access. Your email will be used for course updates.
      </p>

      <form onSubmit={handleSubmit} className="card form neon">
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="error">{errors.email}</p>
          )}
        </div>
        <div className="form-row">
           {/*password*/}
        </div>

        <fieldset className="form-row">
          {/*Radio Button for gender*/}
        </fieldset>

          {/*Disable the submit button until all requirements met*/}
        <button type="submit" className="btn">Register</button>
      </form>

      <div className="card info">
        <h3>Why Register?</h3>
        <ul className="list">
          <li>📘 Access course materials & assignments</li>
          <li>💬 Join the discussion forum</li>
          <li>🎓 Track your progress & get certified</li>
        </ul>
      </div>
    </section>
  );
}
