"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.warning("Please login first!");
      navigate("/");
      return;
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    toast.info("Logged out successfully!");
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-content">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h2 className="dashboard-title">Welcome to your Dashboard!</h2>
        <p className="welcome-message">You have successfully logged in.</p>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
