import React, { useState } from "react";

const plantData = [
  { area: "サクラ属", name: "ｵｵｼﾏｻﾞｸﾗ（大島桜）", description: "Description for ｵｵｼﾏｻﾞｸﾗ（大島桜）", photo: 1 },
  { area: "サクラ属", name: "ｿﾒｲﾖｼﾉ（染井吉野）", description: "Description for ｿﾒｲﾖｼﾉ（染井吉野）", photo: 2 },
  { area: "カエデ属", name: "イロハモミジ（伊呂波紅葉）", description: "Description for イロハモミジ（伊呂波紅葉）", photo: 12 },
  { area: "常緑樹", name: "ｷﾝﾓｸｾｲ（金木犀）", description: "Description for ｷﾝﾓｸｾｲ（金木犀）", photo: 31 },
  { area: "常緑樹", name: "ｻﾂｷ（皐月）", description: "Description for ｻﾂｷ（皐月）", photo: 51 },
  { area: "常緑樹", name: "ｱｶﾏﾂ（赤松）", description: "Description for ｱｶﾏﾂ（赤松）", photo: 41 },
  { area: "落葉樹", name: "ｳﾒ（梅）", description: "Description for ｳﾒ（梅）", photo: 22 },
  { area: "落葉樹", name: "ｶｼﾜﾊﾞｱｼﾞｻｲ（柏葉紫陽花）", description: "Description for ｶｼﾜﾊﾞｱｼﾞｻｲ（柏葉紫陽花）", photo: 61 },
];

const plantAreas = [...new Set(plantData.map((plant) => plant.area))];

export default function ArmandNemuNature() {
  const [activeArea, setActiveArea] = useState(null);

  const filteredPlants = plantData.filter((plant) => plant.area === activeArea);

  return (
    <div style={{ minHeight: "100vh", padding: "20px", backgroundColor: "#f0fdf4" }}>
      <h1 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "20px" }}>
        Armand Nemu
      </h1>

      {!activeArea && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Select a Plant Area</h2>
          {plantAreas.map((area) => (
            <button
              key={area}
              onClick={() => setActiveArea(area)}
              style={{
                margin: "10px",
                padding: "10px 20px",
                fontSize: "1rem",
                backgroundColor: "#34d399",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {area}
            </button>
          ))}
        </div>
      )}

      {activeArea && (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", textAlign: "center", marginBottom: "20px" }}>{activeArea}</h2>
          {filteredPlants.map((plant, index) => (
            <div key={index} style={{ marginBottom: "40px", textAlign: "center" }}>
              <p style={{ marginBottom: "10px", fontSize: "1.2rem" }}>{plant.name}</p>
              <p style={{ marginBottom: "10px", fontSize: "1rem" }}>{plant.description}</p>
              <img
                src={`/images/${plant.photo}.jpg`}
                alt={plant.name}
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            </div>
          ))}
          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => setActiveArea(null)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "1rem",
                backgroundColor: "#34d399",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Back to Main Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
