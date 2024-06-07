const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getAllStaff = async () => {
  const requestOptions = {
    method: "GET",
    credentials: "include",
  };
  const response = await fetch(`${BACKEND_URL}/team`, requestOptions);
  if (response.status !== 200) {
    throw new Error("Unable to fetch staff");
  }
  const data = await response.json();
  return data;
};

export const createStaff = async (formData) => {
  console.log("SERVICE LOG", formData);

  const requestOptions = {
    method: "POST",
    credentials: "include",
    body: formData,
  };
  const response = await fetch(
    `${BACKEND_URL}/staffmember/new`,
    requestOptions
  );

  if (response.status !== 200) {
    throw new Error("Unable to create staff");
  }
  const data = await response.json();
  return data;
};
