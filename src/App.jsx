import Avatar from "./components/Avatar/Avatar"
import EricClapton from "./components/EricClapton/EricClapton"
import Featured from "./components/Featured/Featured"
import Footer from "./components/Footer/Footer"
import GNO from "./components/GNO/GNO"
import GOTG from "./components/GOTG/GOTG"
import Header from "./components/Header/Header"

function App() {
  return (
    <main>
      <header><Header /></header>
      <div className="newsletter-main-sections">
        <GOTG />
        <GNO />
        <EricClapton />
        <Avatar />
      </div>
      <Featured />
      <Footer />
    </main>
  )
}

export default App