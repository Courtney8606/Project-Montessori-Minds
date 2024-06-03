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

    