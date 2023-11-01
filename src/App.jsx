import styles from "./style";
import { Billing, Business, CTA, Footer, Navbar, Stats, Hero, Posts } from "./components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostOne from "./components/PostOne";
import PostTwo from "./components/PostTwo";
import Terms from "./components/Terms"
import WhoWeAre from "./components/WhoWeAre";
import Privacy from "./components/Privacy";
const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/blog" element={<Posts />} />
        <Route path="/post1" element={<PostOne />} />
        <Route path="/post2" element={<PostTwo />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/" element={
          <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar />
              </div>
            </div>
            <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>
            <div className={`bg-four ${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Stats />
                <Business />
                <Billing />
                <CTA />
                <Footer />
              </div>
            </div>
          </div>} />
      </Routes></Router></>
);

export default App;
