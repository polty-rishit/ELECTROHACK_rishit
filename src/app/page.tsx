// app/page.tsx

// import Link from 'next/link'

// export default function Home() {
//   return (
//     <main>
//       <div>
//         <h1>Welcome to Startup Ecosystem Integrator</h1>
//         <p>Your platform to connect with resources, mentors, and investors.</p>
//         <Link href="/login">
//           <button>Login</button>
//         </Link>
//         <Link href="/signup">
//           <button>Register</button>
//         </Link>
//       </div>
//     </main>
//   )
// }

// import Link from 'next/link';

// export default function Home() {
//   return (
//     <main style={styles.main}>
//       <div style={styles.container}>
//         <h1 style={styles.heading}>Welcome to Startup Ecosystem Integrator</h1>
//         <p style={styles.description}>
//           Your platform to connect with resources, mentors, and investors.
//         </p>
//         <div style={styles.buttonContainer}>
//           <Link href="/login" passHref>
//             <button style={{ ...styles.button, ...styles.primaryButton }}>Login</button>
//           </Link>
//           <Link href="/signup" passHref>
//             <button style={{ ...styles.button, ...styles.secondaryButton }}>Register</button>
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }

// const styles = {
//   main: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #0070f3, #4fc1e9)',
//     fontFamily: 'Arial, sans-serif',
//     color: '#fff',
//     textAlign: 'center',
//     padding: '20px',
//   },
//   container: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: '12px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//     padding: '40px 30px',
//     maxWidth: '500px',
//     width: '100%',
//     backdropFilter: 'blur(10px)',
//   },
//   heading: {
//     fontSize: '2.5rem',
//     marginBottom: '1rem',
//     fontWeight: 'bold',
//   },
//   description: {
//     fontSize: '1.2rem',
//     marginBottom: '2rem',
//     lineHeight: '1.5',
//     color: '#e0e0e0',
//   },
//   buttonContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '1rem',
//   },
//   button: {
//     padding: '0.8rem 1.5rem',
//     fontSize: '1rem',
//     fontWeight: 'bold',
//     borderRadius: '8px',
//     border: 'none',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
//   },
//   primaryButton: {
//     backgroundColor: '#fff',
//     color: '#0070f3',
//   },
//   secondaryButton: {
//     backgroundColor: '#0070f3',
//     color: '#fff',
//   },
//   hover: {
//     transform: 'translateY(-2px)',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
//   },
// };

import Link from 'next/link';

export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.heading} >STARIXZ</h1>
        <h2 style={styles.heading}>Welcome to Startup Ecosystem Integrator</h2>
        <p style={styles.description}>
          Your platform to connect with resources, mentors, and investors.
        </p>
        <div style={styles.buttonContainer}>
          <Link href="/login" passHref>
            <button style={{ ...styles.button, ...styles.primaryButton }}>Login</button>
          </Link>
          <Link href="/signup" passHref>
            <button style={{ ...styles.button, ...styles.secondaryButton }}>Sign-Up</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

const styles = {
  h1: {
    transform: 'translateY(-2px)',
    fontWeight:'800',
    
  },
  
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0070f3, #4fc1e9)',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  },
  // container: {
  //   backgroundColor: 'rgba(255, 255, 255, 0.1)',
  //   borderRadius: '12px',
  //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  //   padding: '40px 30px',
  //   maxWidth: '500px',
  //   width: '100%',
  //   backdropFilter: 'blur(10px)',
  // },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    lineHeight: '1.5',
    color: '#e0e0e0',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  button: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
  primaryButton: {
    backgroundColor: '#fff',
    color: '#0070f3',
  },
  secondaryButton: {
    backgroundColor: '#0070f3',
    color: '#fff',
  },
 
  hover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
};
