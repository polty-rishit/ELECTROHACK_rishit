// app/login/page.tsx
// "use client"
// import { useState } from 'react'
// import { useRouter } from 'next/navigation'

// export default function Login() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const router = useRouter()

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault()

//     // Simulate authentication (replace with your actual logic)
//     if (email === 'test@example.com' && password === 'password123') {
//       // Redirect to the page with cards (after successful login)
//       router.push('/dashboard') // This is where the cards will be displayed
//     } else {
//       alert('Invalid login credentials')
//     }
//   }

//   return (
//     <main>
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </main>
//   )
// }


"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate authentication (replace with your actual logic)
    if (email === "test@example.com" && password === "password123") {
      // Redirect to the page with cards (after successful login)
      router.push("/dashboard"); // This is where the cards will be displayed
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Login</h1>
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0070f3, #4fc1e9)",
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
  },
  container: {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "30px",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
    color: "#0070f3",
    fontWeight:800,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  label: {
    marginBottom: "0.5rem",
    fontSize: "1rem",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "0.8rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
    outline: "none",
    transition: "all 0.3s ease",
  },
  inputFocus: {
    borderColor: "#0070f3",
  },
  button: {
    padding: "0.8rem",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "5px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#005bb5",
  },
};
