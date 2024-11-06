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

export const getUploadedImages = async (filenames) => {
  try {
    const response = await fetch(`${BACKEND_URL}/uploads/batch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filenames }),
      credentials: "include",
    });

    if (response.ok) {
      const images = await response.json();
      // Convert the list of image data into a mapping of filenames to URLs
      const urls = images.reduce((acc, { filename, url }) => {
        acc[filename] = url;
        return acc;
      }, {});
      return urls;
    } else {
      throw new Error(`Unable to fetch images: ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
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

  return response;
};

export const deleteStaff = async (staff_name) => {
  const payload = {
    staff_name: staff_name,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  };

  const response = await fetch(`${BACKEND_URL}/delete/staff`, requestOptions);

  if (response.status !== 200) {
    throw new Error("Unable to delete staff");
  }
  const data = await response.json();
  return data;
};

export const updateStaff = async (staff_id, formData) => {
  const requestOptions = {
    method: "POST",
    credentials: "include",
    body: formData,
  };

  const response = await fetch(
    `${BACKEND_URL}/update/${staff_id}`,
    requestOptions
  );

  return response;
};
