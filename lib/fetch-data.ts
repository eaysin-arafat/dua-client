export const getDuas = async () => {
  const response = await fetch("http://localhost:8000/read-duas");
  const data = await response.json();

  return data;
};

export async function getCategorys() {
  const res = await fetch("http://localhost:8000/read-categories");
  return res.json();
}

// export const getCategorys = async () => {
//   const response = await fetch("http://localhost:8000/read-categories");
//   const data = await response.json();

//   return data;
// };

export const getSubCategories = async () => {
  const response = await fetch("http://localhost:8000/read-sub-categories");
  const data = await response.json();

  return data;
};
