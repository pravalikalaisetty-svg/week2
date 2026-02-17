const UserCard = ({ name, email, role }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default UserCard;