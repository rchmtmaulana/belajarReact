export default function Home() {
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          margin: 0,
          paddingBottom: "16px",
        }}
      >
        Welcome to my App
      </h1>
      <button
        style={{
          width: "170px",
          height: "40px",
        }}
      >
        Halo!!!
      </button>
      <button>Halo Halo</button>
    </section>
  );
}

function HelloButton() {}
