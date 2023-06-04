export const getIsAdmin = async () => {
  const { data } = await axios.get('/api/users');
  return data;
};

export const getUserRole = async () => {
  try {
    await getIsAdmin();
  } catch (error) {
    window.location.pathname = '/login/';
  }
}