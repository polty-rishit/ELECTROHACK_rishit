// app/components/Card.tsx

interface CardProps {
    title: string;
    description: string;
    link: string;
  }
  
  const Card = ({ title, description, link }: CardProps) => {
    return (
      <div className="card">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>
          <button>Learn More</button>
        </a>
      </div>
    )
  }
  
  
  export default Card
  