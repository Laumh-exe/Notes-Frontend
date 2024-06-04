import { BASE_URL } from "../utils/globalVariables";

async function createUser(userDetailsEntered) {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetailsEntered),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating entity:", error);
    throw error;
  }
}

const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    });
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      return data;
    } else {
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

export { login };
export { createUser };
