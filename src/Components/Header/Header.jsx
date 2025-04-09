import React from 'react'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from 'react-router-dom/dist';

const Header = (props) => {
     const navigate = useNavigate();
     return (
          <>
               <section className="top-part fixed-top">
                    <div className="header-section fixed-top">
                         <ArrowBackIosNewIcon className="fs-5" onClick={() => navigate(-1)} />
                         <p className="fw-bold mb-0">{props.name}</p>
                         <p></p>
                    </div>
               </section>
          </>
     )
}

export default Header;
