import { useEffect } from "react";
import Head from "next/head";

export default function Mapa() {
  useEffect(() => {
    // espera o script do Leaflet carregar
    const tick = setInterval(() => {
      const L = typeof window !== "undefined" ? window.L : null;
      if (!L) return;

      clearInterval(tick);

      // cria o mapa (Itatiaia aproximado)
      const map = L.map("map", { scrollWheelZoom: true }).setView([-22.354, -44.611], 10);

      // camada de azulejos (OpenStreetMap grátis)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap"
      }).addTo(map);

      // marcador de exemplo
      L.marker([-22.354, -44.611]).addTo(map).bindPopup("Parque Nacional do Itatiaia").openPopup();
    }, 150);

    return () => clearInterval(tick);
  }, []);

  return (
    <main style={{maxWidth: 900, margin: "20px auto", fontFamily: "system-ui, Arial"}}>
      <Head>
        {/* CSS e JS do Leaflet via CDN */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
          defer
        ></script>
      </Head>

      <h1>Mapa — EcoTrails</h1>
      <p>Mapa gratuito com OpenStreetMap (sem cartão). Ponto de exemplo no Itatiaia.</p>

      {/* contêiner do mapa */}
      <div id="map" style={{height: 480, borderRadius: 12, overflow: "hidden"}} />

      <p style={{marginTop: 16}}>
        <a href="/" style={{textDecoration: "underline"}}>← Voltar</a>
      </p>
    </main>
  );
}
