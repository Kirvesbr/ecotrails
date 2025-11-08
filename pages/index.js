export default function Home() {
  return (
    <main style={{maxWidth: 720, margin: "40px auto", fontFamily: "system-ui, Arial"}}>
      <h1>EcoTrails</h1>
      <p>Seu planejador simples de natureza. 🚶‍♀️🌿</p>

      <section style={{marginTop: 24}}>
        <h2>Explorar</h2>
        <p>
          Veja o <a href="/mapa" style={{textDecoration: "underline"}}>Mapa inicial</a> com um ponto de exemplo (Itatiaia).
        </p>
      </section>

      <section style={{marginTop: 32}}>
        <h2>Reservas</h2>
        <p>Ao reservar por estes links, você apoia o EcoTrails 🌱</p>
        <div style={{display: "flex", gap: 12, flexWrap: "wrap"}}>
          <a
            href="https://trip.tpo.lv/m5NWrtU8"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            style={{padding: "10px 14px", border: "1px solid #ccc", borderRadius: 8}}
          >
            Hotéis (Booking)
          </a>
          <a
            href="https://trip.tpo.lv/m5NWrtU8"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            style={{padding: "10px 14px", border: "1px solid #ccc", borderRadius: 8}}
          >
            Voos/Hotéis (Trip.com)
          </a>
          <a
            href="https://trip.tpo.lv/m5NWrtU8"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            style={{padding: "10px 14px", border: "1px solid #ccc", borderRadius: 8}}
          >
            Passeios (Viator)
          </a>
        </div>
        <p style={{marginTop: 8, fontSize: 12, opacity: 0.7}}>
          * Links de afiliado gerados via Travelpayouts. Sem custo extra para você.
        </p>
      </section>

      <section style={{marginTop: 32}}>
        <h2>Como usar</h2>
        <ol>
          <li>Escolha um destino</li>
          <li>Veja trilhas e pontos de interesse</li>
          <li>Clique para reservar (links acima)</li>
        </ol>
      </section>

      <p style={{marginTop: 24, fontSize: 14, opacity: 0.7}}>
        (Versão MVP — pronto para conectar mapas e itinerários personalizados)
      </p>
    </main>
  );
}
