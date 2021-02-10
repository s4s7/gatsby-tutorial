import React from "react"
import Header from "../components/header"

export default function Home() {
    return (
    <div style={{ color: `purple` }}>
      <Header headerText="About Gatsby from Prop" arbitraryPhrase="is arbitrary"/>
      <h1>about Gatsby!</h1>
    </div>
  )

}