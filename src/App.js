import Home from "./Page/Home";
import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import CreateAcc from "./Page/CreateAcc";
import { Routes, Route } from "react-router-dom";
import Uploadcv from "./Page/Uploadcv";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import Register from "./Page/Register";
import Contact from "./Page/Contact";
import TermsAndCondition from "./Page/TermsAndCondition";
import CompanyList from "./Page/CompanyList";
import EmailVerification from "./Page/EmailVerification";
import Blogs from "./Page/Blog/Blogs";
import About from "./Page/About";
import Privacy from "./Page/PrivacyPolicy";
import BlogDetails from "./Page/Blog/BlogDetails";
import Joblist from "./Page/Jobs/Joblist";
import FavouriteJob from "./Page/Jobs/FavouriteJob";
import Jobdetails from "./Page/Jobs/Jobdetails";
import Postajob from "./Page/Jobs/Postajob";
import Candidatelist from "./Page/Candidate/Candidatelist";
import CandidateDetails from "./Page/Candidate/CandidateDetails";
import SingleResume from "./Page/Candidate/SingleResume";
import Pricing from "./Page/Candidate/Pricing";
import CandidateDash from "./Page/Candidate/CandidateDash";
import { AnimatePresence, motion } from "framer-motion";
import jobsData from "./Datas/JobsData";
function App() {

const url=("http://127.0.0.1:8000/api/v1/api-token-auth/")

  const [JumpTop, setJumpTop] = useState(false);
  const [data, setdata] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setJumpTop(true);
      } else {
        setJumpTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateAcc />} />
          <Route path="/upload" element={<Uploadcv />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/Joblist" element={<Joblist />} />
          <Route path="/FavouriteJob" element={<FavouriteJob />} />
          <Route path="/Postajob" element={<Postajob />} />
          <Route path="/Jobdetails" element={<Jobdetails />} />
          <Route path="/Candidatelist" element={<Candidatelist />} />
          <Route path="/CandidateDetails" element={<CandidateDetails />} />
          <Route path="/SingleResume" element={<SingleResume />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/CandidateDash" element={<CandidateDash />} />
          <Route path="/CompanyList" element={<CompanyList />} />
          <Route path="/EmailVerification" element={<EmailVerification />} />
          <Route path="/TermsAndCondition" element={<TermsAndCondition />} />
          <Route path="/Privacy" element={<Privacy />} />
        </Routes>
      </AnimatePresence>

      {JumpTop && (
        <button className="uparrow" onClick={scrollUp}>
          <FaAngleUp />
        </button>
      )}
    </header>
  );
}

export default App;
