export const fetchUser = async (id) => {
  const res = await fetch(`http://localhost:4000/api/user/${id}`);
  return await res.json(); 
};

export const fetchAllUsers = async () => {
  const res = await fetch(`http://localhost:4000/api/users`);
  return await res.json();
};
