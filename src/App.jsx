import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Profile from "./components/Profile"
import Card from "./components/Card"
import State from "./components/State"
import Clock from "./components/Clock"
import {Routes, Route} from "react-router-dom"
import Homepage from "./pages/Homepage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import NotFound from "./pages/NotFound"
import Data from "./pages/Data"
function App() {
  return (
    <>
      {/* <Navbar />
      <h1>Hello world</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem accusantium sunt repellendus alias cumque ducimus quae possimus iusto, numquam quibusdam asperiores sed nesciunt, illum nam obcaecati provident fugiat aliquid.</p>
      <q>testing</q> */}


      {/* <Card>
        <p>Adeoluwa</p>
        <p>Software Engineer</p>
      </Card> */}

      {/* <Card>
      <Profile name="Adeoluwa" role="Software Engineer" image="https://media.wired.com/photos/63b8d0a771c6b526845f15a6/4:3/w_2400,h_1800,c_limit/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg" />
        
      </Card> */}
        {/* <State/>
        <Clock/> */}
      {/* <Footer /> */}
          <Routes>
              <Route path="/clock" element={<Clock/>} />
              <Route path="/" element={<Homepage/>} />
              <Route path="/about" element={<AboutPage/>} />
              <Route path="/contact" element={<ContactPage/>} />
              <Route path="/user/:id" element={<Data/>} />
              <Route path="*" element={<NotFound/>} />

          </Routes>
    </>
  )
}

export default App;