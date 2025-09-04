import UserDetails from "./UserDetails";

const UserProfile = ({ user }) => {
  return (
    <div
      style={{ border: "1px solid orange", padding: "16px", marginTop: "16px" }}
    >
      <h2>Component UserProfile (Рівень 2)</h2>
      <p>Проміжний компонент який не використовує данні.</p>
      <UserDetails user={user} />
    </div>
  );
};

export default UserProfile;
