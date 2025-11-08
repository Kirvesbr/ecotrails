export default function Home() {
  return (
    <main style={{maxWidth: 720, margin: "40px auto", fontFamily: "system-ui, Arial"}}>
      <h1>EcoTrails</h1>
      <p>Seu planejador simples de natureza. 🚶‍♀️🌿</p>
      <ol>
        <li>Escolha um destino</li>
        <li>Veja trilhas e pontos de interesse</li>
        <li>Clique para reservar (links de afiliados)</li>
      </ol>
      <p style={{marginTop: 24, fontSize: 14, opacity: 0.7}}>
        (Versão MVP — pronto para conectar mapas e afiliados)
      </p>
    </main>
  );
}
