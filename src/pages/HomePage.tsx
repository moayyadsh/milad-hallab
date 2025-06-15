import { FaFacebookF, FaInstagram, FaTiktok, FaSnapchatGhost } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__data">
        <img
          className="home-page__data__logo"
          src="/logo.svg"
          alt="WAM Logo"
        />
        <div className="home-page__data__social">
          <a
            href="https://www.facebook.com/share/195wvbKh1Y/"
            target="_blank"
            rel="noopener noreferrer"
            className="home-page__data__social-btn"
          >
            <FaFacebookF />
            Facebook 
          </a>
          <a
            href="https://www.instagram.com/wam_haute_couture?igsh=ZHBjNm5sNjUxY2lt"
            target="_blank"
            rel="noopener noreferrer"
            className="home-page__data__social-btn"
          >
            <FaInstagram />
            Instagram  
          </a>
          <a
            href="https://www.tiktok.com/@wam.haute.couture?_t=ZN-8vrKBM6eXYs&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="home-page__data__social-btn"
          >
            <FaTiktok />
            TikTok
          </a>
          <a
            href="https://www.snapchat.com/add/wamhautecouture?share_id=U3e03iXbzXs&locale=ar-EG"
            target="_blank"
            rel="noopener noreferrer"
            className="home-page__data__social-btn"
          >
            <FaSnapchatGhost />
            Snapchat
          </a>
        </div>
        <div className="home-page__data__location">
          <FaLocationDot  style={{ marginRight: "3px" }} className="home-page__data__location_icon"/>
          Syria – Damascus – Abu Rummaneh – Mafraq Qasr Al-Diyafa
        </div>
      </div>
    </div>
  );
};

export default HomePage;
