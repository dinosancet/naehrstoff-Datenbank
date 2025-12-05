"use client";
import React, { useState } from "react";
import foods from "../data/foods.json";
import NutrientCard from "./NutrientCard";

export default function NutrientList() {
  const [query, setQuery] = useState("");
  const data = Array.isArray(foods) ? foods : [];

  const filtered = data.filter((f) =>
    f.Lebensmittel.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
        <input
          className="input"
          placeholder="Lebensmittel suchen (z. B. Brokkoli)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="count">Ergebnisse: {filtered.length}</div>
      </div>

      <div style={{ display: "grid", gap: 16 }}>
        {filtered.map((food, i) => (
          <NutrientCard key={i} food={food} />
        ))}
      </div>
    </section>
  );
}
