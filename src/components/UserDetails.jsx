const UserDetails = ({ user }) => {
  return (
    <div
      style={{ border: "1px solid green", padding: "16px", marginTop: "16px" }}
    >
      <h3>Component UserDetails (Рівень 3)</h3>
      <p>Кінцевий компонент який використовує данні.</p>
      <p>Ім'я: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;
