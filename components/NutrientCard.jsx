"use client";
import React from "react";

export default function NutrientCard({ food }) {
  return (
    <article className="card">
      <header className="food-header">
        <div>
          <div className="food-title">{food.Lebensmittel}</div>
          <div className="food-sub">je 100 g</div>
        </div>
        <div style={{ textAlign: "right", color: "#666", fontSize: 13 }}>
          {/* optional extra info area */}
        </div>
      </header>

      <div>
        {Array.isArray(food.Nährstoffe) &&
          food.Nährstoffe.map((n, idx) => (
            <div key={idx} className="row">
              <div style={{ flex: 1, paddingRight: 12 }}>
                <div className="nutrient-name">{n.Name}</div>
                <div className="nutrient-use">{n.Nutzen}</div>
              </div>

              <div className="right-col">
                <div className="amount">{n["Menge je 100 g"]}</div>
                <div className="small" style={{ marginTop: 6 }}>{n.Normwert}</div>

                {n.Abdeckung && n.Abdeckung !== "" && (
                  <>
                    <div className="progress-outer">
                      <div
                        className="progress-inner"
                        style={{ width: `${String(n.Abdeckung).replace("%", "")}%` }}
                      />
                    </div>
                    <div className="small" style={{ marginTop: 6 }}>{n.Abdeckung}</div>
                  </>
                )}
              </div>
            </div>
          ))}
      </div>
    </article>
  );
}
