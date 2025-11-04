"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const featuredCars = [
    {
      name: "Ferrari 488 GTB",
      description:
        "A masterpiece of design and performance — where luxury meets raw power.",
      image:
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1080&q=80",
      link: "https://www.ferrari.com/en-EN",
    },
    {
      name: "Lamborghini Aventador",
      description:
        "An icon of speed and luxury, combining bold design with unmatched precision.",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1080&q=80",
      link: "https://www.lamborghini.com/en-en",
    },
    {
      name: "Porsche 911 Turbo S",
      description:
        "Experience precision engineering and timeless design in one powerful package.",
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1080&q=80",
      link: "https://www.porsche.com/international/",
    },
  ];

  const router = useRouter();

  const handleExplore = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Discover the Future of Luxury Cars</h1>
        <p>
          Explore our hand-picked collection of luxury vehicles that combine
          innovation, craftsmanship, and performance in perfect harmony.
        </p>
      </section>

      {/* Featured Cars */}
      <section className="cars-grid">
        {featuredCars.map((car, index) => (
          <div key={index} className="car-card">
            <Image
              src={car.image}
              alt={car.name}
              width={500}
              height={300}
              className="car-image"
              priority
            />
            <div className="car-info">
              <h3>{car.name}</h3>
              <p>{car.description}</p>
              <button
                className="car-btn"
                onClick={() => handleExplore(car.link)}
              >
                Explore More
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
