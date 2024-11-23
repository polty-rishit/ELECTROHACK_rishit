// "use client";
// import { useState } from "react";
// import Card from "../components/Card";



// export default function Dashboard() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleChatbotRedirect = () => {
//     window.location.href = "https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/22/16/20241122162421-E9Y13URP.json"; // Navigate to the chatbot page
//   };

//   return (
//     <main>
//       <h1>Welcome</h1>
//       <p>Your gateway to connecting with mentors, investors, and resources.</p>

//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//         style={{
//           padding: "10px",
//           marginBottom: "20px",
//           fontSize: "1rem",
//           borderRadius: "5px",
//           width: "100%",
//           maxWidth: "400px",
//           display: "block",
//           marginLeft: "auto",
//           marginRight: "auto",
//         }}
//       />

//       <div className="card-container">
//         <Card
//           title="Find Mentors"
//           description="Connect with experienced mentors to guide your startup."
//           link="/mentors"
//         />
//         <Card
//           title="Secure Funding"
//           description="Find potential investors for your startup."
//           link="/investors"
//         />
//         <Card
//           title="Resources & Tools"
//           description="Get access to curated resources and tools for your business."
//           link="/resources"
//         />
//         <Card
//           title="Networking Events"
//           description="Join startup networking events to connect with industry professionals."
//           link="/events"
//         />
//       </div>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           marginTop: "40px",
//         }}
//       >
//         <button
//           onClick={handleChatbotRedirect}
//           style={{
//             padding: "10px 20px",
//             fontSize: "1rem",
//             backgroundColor: "#0070f3",
//             color: "#fff",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Go to Chatbot
//         </button>
//       </div>
//       <style>
        
//       </style>
//     </main>
    
//   );
// }

"use client";
import { useState } from "react"; //use state is for the state of a button
import Card from "../components/Card";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleChatbotRedirect = () => {
    window.location.href =
      "https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/22/16/20241122162421-E9Y13URP.json";
  };

  return (
    <main>
      <h1>WELCOME</h1>
      <p>Your gateway to connecting with mentors, investors, and resources.</p>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />

      <div className="card-container">
        <Card
          title="Find Mentors"
          description="Connect with experienced mentors to guide your startup."
          link="/mentors"
        />
        <Card
          title="Secure Funding"
          description="Find potential investors for your future startup."
          link="/investors"
        />
        <Card
          title="Resources & Tools"
          description="Get access to curated resources and tools for your business."
          link="/resources"
        />
        <Card
          title="Networking Events"
          description="Join startup networking events to connect with industry professionals."
          link="/events"
        />
      </div>

      <div className="button-container">
        <button onClick={handleChatbotRedirect} className="chatbot-button">
          Go to Chatbot
        </button>
      </div>

      <style jsx>{`
        main {
          text-align: center;
          padding: 20px;
        }

        h1 {
          font-size: 3.5rem;
          color: #333;
           font-family: "Lilita One", sans-serif;
  font-weight: 800;
  font-style: normal;
        }

        p {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 30px;
        }

        .search-input {
          padding: 10px;
          margin-bottom: 20px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          width: 100%;
          max-width: 400px;
          display: block;
          margin-left: auto;
          margin-right: auto;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .search-input:focus {
          border-color: #0070f3;
          box-shadow: 0 0 5px rgba(0, 112, 243, 0.5);
          outline: none;
        }

        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .button-container {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .chatbot-button {
          padding: 10px 20px;
          font-size: 1rem;
          background-color: #0070f3;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
        }

        .chatbot-button:hover {
          background-color: #005bb5;
          transform: translateY(-2px);
        }

        .chatbot-button:active {
          transform: translateY(0);
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 1.8rem;
          }

          p {
            font-size: 1rem;
          }

          .search-input {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </main>
  );
}

// "use client";
// import { useState } from "react";
// import Card from "../components/Card";

// export default function Dashboard() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleChatbotRedirect = () => {
//     window.location.href =
//       "https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/22/16/20241122162421-E9Y13URP.json";
//   };

//   return (
//     <main>
//       <h1>Welcome</h1>
//       <p>Your gateway to connecting with mentors, investors, and resources.</p>

//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//         className="search-input"
//       />

//       <div className="card-container">
//         <Card
//           title="Find Mentors"
//           description="Connect with experienced mentors to guide your startup."
//           link="/mentors"
//         />
//         <Card
//           title="Secure Funding"
//           description="Find potential investors for your startup."
//           link="/investors"
//         />
//         <Card
//           title="Resources & Tools"
//           description="Get access to curated resources and tools for your business."
//           link="/resources"
//         />
//         <Card
//           title="Networking Events"
//           description="Join startup networking events to connect with industry professionals."
//           link="/events"
//         />
//       </div>

//       {/* Find Your Mentor Section */}
//       <section className="mentor-section">
//         <h2>Find Your Mentor</h2>
//         <p>Explore mentor categories tailored to your needs:</p>
//         <div className="mentor-container">
//           <div className="mentor-card">
//             <h3>Tech Mentors</h3>
//             <p>Get guidance from industry leaders in technology.</p>
//             <a href="/mentors/tech">Explore</a>
//           </div>
//           <div className="mentor-card">
//             <h3>Business Mentors</h3>
//             <p>Learn strategies and insights to scale your startup.</p>
//             <a href="/mentors/business">Explore</a>
//           </div>
//           <div className="mentor-card">
//             <h3>Creative Mentors</h3>
//             <p>Enhance your design and branding with expert advice.</p>
//             <a href="/mentors/creative">Explore</a>
//           </div>
//         </div>
//       </section>

//       <div className="button-container">
//         <button onClick={handleChatbotRedirect} className="chatbot-button">
//           Go to Chatbot
//         </button>
//       </div>

//       <style jsx>{`
//         main {
//           text-align: center;
//           padding: 20px;
//         }

//         h1 {
//           font-size: 2rem;
//           color: #333;
//         }

//         p {
//           font-size: 1.2rem;
//           color: #666;
//           margin-bottom: 30px;
//         }

//         .search-input {
//           padding: 10px;
//           margin-bottom: 20px;
//           font-size: 1rem;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//           width: 100%;
//           max-width: 400px;
//           display: block;
//           margin-left: auto;
//           margin-right: auto;
//           transition: border-color 0.3s, box-shadow 0.3s;
//         }

//         .search-input:focus {
//           border-color: #0070f3;
//           box-shadow: 0 0 5px rgba(0, 112, 243, 0.5);
//           outline: none;
//         }

//         .card-container {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 20px;
//           margin-top: 30px;
//         }

//         .mentor-section {
//           margin-top: 50px;
//           text-align: center;
//         }

//         .mentor-section h2 {
//           font-size: 1.8rem;
//           color: #333;
//         }

//         .mentor-section p {
//           font-size: 1rem;
//           color: #666;
//           margin-bottom: 20px;
//         }

//         .mentor-container {
//           display: flex;
//           justify-content: center;
//           gap: 20px;
//           flex-wrap: wrap;
//         }

//         .mentor-card {
//           background-color: #f9f9f9;
//           border: 1px solid #ddd;
//           border-radius: 8px;
//           padding: 20px;
//           width: 250px;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           transition: transform 0.3s, box-shadow 0.3s;
//         }

//         .mentor-card h3 {
//           font-size: 1.2rem;
//           color: #0070f3;
//         }

//         .mentor-card p {
//           font-size: 0.9rem;
//           color: #555;
//           margin: 10px 0;
//         }

//         .mentor-card a {
//           display: inline-block;
//           margin-top: 10px;
//           padding: 5px 10px;
//           background-color: #0070f3;
//           color: #fff;
//           border-radius: 5px;
//           text-decoration: none;
//           font-size: 0.9rem;
//           transition: background-color 0.3s;
//         }

//         .mentor-card a:hover {
//           background-color: #005bb5;
//         }

//         .mentor-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
//         }

//         .button-container {
//           display: flex;
//           justify-content: center;
//           margin-top: 40px;
//         }

//         .chatbot-button {
//           padding: 10px 20px;
//           font-size: 1rem;
//           background-color: #0070f3;
//           color: #fff;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           transition: background-color 0.3s, transform 0.2s;
//         }

//         .chatbot-button:hover {
//           background-color: #005bb5;
//           transform: translateY(-2px);
//         }

//         .chatbot-button:active {
//           transform: translateY(0);
//         }

//         @media (max-width: 600px) {
//           h1 {
//             font-size: 1.8rem;
//           }

//           p {
//             font-size: 1rem;
//           }

//           .search-input {
//             font-size: 0.9rem;
//           }

//           .mentor-card {
//             width: 100%;
//             max-width: 300px;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }

