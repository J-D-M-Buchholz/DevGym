import React, { useState } from "react";
import "./InfoCard.css";
import { FaPen } from "react-icons/fa";
import ProfileModal from "../ProfileModal/Profilmodal";
import { useAuth } from "@/components/AuthContext";

const InfoCard: React.FC = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const { logout } = useAuth();
  return (
    <div className="dash_InfoCard">
      <div className="dash_infoHead">
        <h2>Info</h2>
        <div className="dash_Modal">
          <FaPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="dash_info">
        <span>
          <b>Status </b>
        </span>
        <span>Married</span>
      </div>

      <div className="dash_info">
        <span>
          <b>City </b>
        </span>
        <span>Berlin</span>
      </div>

      <div className="dash_info">
        <span>
          <b>Work </b>
        </span>
        <span>Google inc.</span>
      </div>

      <button className="dash_button dash_logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default InfoCard;
