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
          fontSize: "24px"
        }}
      >
        Welcome to my App
      </h1>
      <HelloButton buttonText={"Rachmat Maulana"} buttonText2={"Teknik Informatika 2021"}/>
    </section>
  );
}

function HelloButton({ buttonText, buttonText2 }) {
  return (
    <>
    <button style={{
      width: "240px",
      height: "36px",
      borderRadius: "8px",
      marginBottom: "12px"
    }}>
      {" "}
      {buttonText}{""}
    </button>
    <button style={{
      width: "240px",
      height: "36px",
      borderRadius: "8px"
    }}>
      {" "}
      {buttonText2}{""}
    </button>
    </>
  )
} 
