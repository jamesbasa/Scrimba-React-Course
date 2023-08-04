import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import experiences from "./data"


export default function App() {
    const cards = experiences.map(exp => {
        return (
            <Card 
                img={exp.coverImg}
                rating={exp.stats.rating}
                reviewCount={exp.stats.reviewCount}
                location={exp.location}
                title={exp.title}
                price={exp.price}
                openSpots={exp.openSpots}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
