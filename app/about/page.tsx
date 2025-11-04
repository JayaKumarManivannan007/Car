"use client";

import Image from "next/image";
import React from "react";

const carCompanies = [
  {
    name: "Tesla, Inc.",
    description:
      "Tesla is an American electric vehicle and clean energy company founded by Elon Musk. It’s known for revolutionizing the EV market with advanced battery tech and autonomous driving.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1080&q=80",
  },
  {
    name: "BMW Group",
    description:
      "Bayerische Motoren Werke AG (BMW) is a German multinational that builds luxury vehicles and motorcycles. Renowned for precision engineering and sporty performance.",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1080&q=80",
  },
  {
    name: "Mercedes-Benz",
    description:
      "Mercedes-Benz is a global leader in premium automobiles. Its commitment to innovation and design has set benchmarks in safety, luxury, and performance.",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1080&q=80", 
  },
  {
    name: "Audi AG",
    description:
      "Audi is a German automaker known for its advanced technology and sophisticated design, embodying the slogan ‘Vorsprung durch Technik’—progress through technology.",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=1080&q=80",
  },
  {
    name: "Lamborghini",
    description:
      "Automobili Lamborghini S.p.A. is an Italian manufacturer of luxury sports cars and SUVs, famous for its bold design, performance, and iconic V12 engines.",
    image:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1080&q=80",
  },
];



export default function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="about-title">About Leading Car Companies</h1>
      <div className="card-container">
        {carCompanies.map((company, index) => (
          <div key={index} className="company-card">
            <Image
              src={company.image}
              alt={company.name}
              width={400}
              height={250}
              className="company-image"
            />
            <div className="company-info">
              <h2>{company.name}</h2>
              <p>{company.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
