import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import experiences from "./data"

export default function App() {
    const cards = experiences.map(exp => {
        return (
            <Card 
                key={exp.id}
                experience={exp}
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
