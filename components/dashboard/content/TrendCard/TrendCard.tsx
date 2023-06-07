import React from "react";
import "./TrendCard.css";
import { TrendData } from "@/Data/TrendData";

interface Trend {
  name: string;
  shares: number;
}

const TrendCard: React.FC = () => {
  return (
    <div className="TrendCard">
      <h3>Trends...</h3>
      {TrendData.map((trend: Trend, index: number) => {
        return (
          <div className="trend" key={index}>
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
