import NutrientList from "../components/NutrientList";

export default function Page() {
  return (
    <main>
      <div className="container">
        <header style={{ marginBottom: 12 }}>
          <h1 className="header-title">Lebensmittel & Nährstoffe</h1>
          <div className="header-sub">Suche, Ansicht & Prozent-Abdeckung pro 100 g — kurze Nutzenbeschreibung unter jedem Nährstoff.</div>
        </header>

        <NutrientList />

        <div style={{ height: 32 }} />

        <div className="ad">Werbung (Platzhalter)</div>
      </div>
    </main>
  );
}
