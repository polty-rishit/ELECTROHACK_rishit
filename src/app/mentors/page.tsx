// app/mentors/page.tsx
// "use client"
// import { useEffect, useState } from 'react'

// interface Mentor {
//     id: number,
//     name: string,
//     expertise: string
//     }

// const MentorsPage = () => {
//   const [mentors, setMentors] = useState([])

//   useEffect(() => {
//     const fetchMentors = async () => {
//       const response = await fetch('/api/mentors')
//       const data = await response.json()
//       setMentors(data)
//     }

//     fetchMentors()
//   }, [])

//   return (
//     <div className="text-center py-10">
//       <h1 className="text-3xl font-bold">Find Your Mentor</h1>
//       <ul className="mt-4">
//         {mentors.map((mentor: Mentor) => (
//           <li key={mentor.id}>{mentor.name} - {mentor.expertise}</li>
          
//         ))}
//       </ul>
      
//     </div>
    
//   )
// }

// export default MentorsPage
"use client";
import { useEffect, useState } from "react";

interface Mentor {
  id: number;
  name: string;
  expertise: string;
}

const MentorsPage = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch("/api/mentors");
        if (!response.ok) throw new Error("Failed to fetch mentors");
        const data = await response.json();
        setMentors(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  // Categorize mentors by expertise
  const techMentors = mentors.filter((mentor) =>
    mentor.expertise.toLowerCase().includes("tech")
  );
  const businessMentors = mentors.filter((mentor) =>
    mentor.expertise.toLowerCase().includes("business")
  );
  const creativeMentors = mentors.filter((mentor) =>
    mentor.expertise.toLowerCase().includes("creative")
  );

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">
          Find Your Mentor
        </h1>
        <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto">
          Explore a curated selection of mentors who can help you thrive in the
          fields of technology, business, and creativity. Choose your path and
          connect with experienced professionals today.
        </p>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-lg font-medium text-gray-500">Loading mentors...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-lg font-medium text-red-500">{error}</p>
          </div>
        ) : (
          <div className="mt-10">
            {/* Tech Mentors */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-indigo-500 mb-4">
                Tech Mentors
              </h2>
              <div className="mentor-grid">
                {techMentors.map((mentor) => (
                  <div key={mentor.id} className="mentor-card">
                    <h3 className="text-xl font-semibold">{mentor.name}</h3>
                    <p className="text-gray-600">{mentor.expertise}</p>
                  </div>
                ))}
                {techMentors.length === 0 && (
                  <p className="text-gray-500">ADAM SMITH</p>
                )}
              </div>
            </section>

            {/* Business Mentors */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-green-500 mb-4">
                Business Mentors
              </h2>
              <div className="mentor-grid">
                {businessMentors.map((mentor) => (
                  <div key={mentor.id} className="mentor-card">
                    <h3 className="text-xl font-semibold">{mentor.name}</h3>
                    <p className="text-gray-600">{mentor.expertise}</p>
                    <img src="https://th.bing.com/th/id/OIP.DbE7lexttmox7OEKFTifQQHaLH?w=115&h=180&c=7&r=0&o=5&pid=1.7"></img>
                   
                    {/* <img src="https://www.gettyimages.com/photos/businessman"></img> */}
                  </div>
                ))}
                {businessMentors.length === 0 && (
                  <p className="text-gray-500">No Business Mentors available.</p>
                )}
              </div>
            </section>

            {/* Creative Mentors */}
            <section>
              <h2 className="text-2xl font-bold text-purple-500 mb-4">
                Creative Mentors
              </h2>
              <div className="mentor-grid">
                {creativeMentors.map((mentor) => (
                  <div key={mentor.id} className="mentor-card">
                    <h3 className="text-xl font-semibold">{mentor.name}</h3>
                    <p className="text-gray-600">{mentor.expertise}</p>
                  </div>
                ))}
                {creativeMentors.length === 0 && (
                  <p className="text-gray-500">ALLEN SMISH</p>
                )}
              </div>
            </section>
          </div>
        )}
      </div>

      {/* Inline CSS */}
      <style jsx>{`
      h1{
      text-align:center;
      margin-top:20px;
      font-weight:800;
      }
        .mentor-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        .mentor-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 60px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          // text-align: center;
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
          
          margin-left:40px;
          margin-right:40px;
          margin-top:20px;
           margin-bottom:20px;
           font-weight:600;
        }
        .mentor-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        @media (max-width: 640px) {
          .mentor-grid {
            grid-template-columns: 1fr;
          }
        }
          h2{
          margin-left:20px;
          font-weight:700;}
          p{
          margin-left:20px;
          margin-right:20px;
          }
          img{
          dislay:flex;
          margin-left:400px;
          margin-top:-100px;
          height:110px;
          transition:ease-in-out;
          transform: translateY(-5px);
          }
      `}</style>
    </div>
  );
};

export default MentorsPage;
