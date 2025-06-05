import { SideBar } from "./components/SideBar"
// import { Hero } from "./components/Hero"
// import { About } from "./components/About"
// import { Projects } from "./components/Projects"
// import { Contact } from "./components/contacts"
// import { Header } from "./components/Header"

export default function App() {
  
  return (
    <div className="main-container">
      <main>
        <SideBar />
        <div className="main-content">
          <h1></h1>
          <p></p>
          <p></p>
        </div>
        {/* <Header />
        <Hero />
        <About />
        <Projects />
        <Contact /> */}
      </main>
    </div>
  )
}

