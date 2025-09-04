import UserProfile from "./components/UserProfile";

function App() {
  const userData = {
    name: "Ярослав",
    email: "student@example.com",
  };

  return (
    <div style={{ border: "1px solid blue", padding: "16px" }}>
      <h1>Component App (Рівень 1)</h1>
      <p>Компонент має дані про користувача і передає їх до UserProfile.</p>
      <UserProfile user={userData} />
    </div>
  );
}

export default App;
