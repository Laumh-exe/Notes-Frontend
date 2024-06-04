import { BASE_URL } from "../utils/globalVariables";

const createNote = async (note) => {
  try {
    const token = localStorage.getItem("token");

    const result = await fetch(`${BASE_URL}/user/note/create`, {
        method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(note),
    });

    return await result.json();
  } catch (e) {
    console.log(e);
  }
};

const getUserEmails = async () => {
  try {
    const token = localStorage.getItem("token");

    const result = await fetch(`${BASE_URL}/users/email`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return await result.json();
  } catch (e) {
    console.log(e);
  }
}

const readAllNotes = async () => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      const result = await fetch(`${BASE_URL}/user/notes/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const theResult = await result.json();

      return theResult;
    }
  } catch (e) {
    console.log(e);
  }
};

const readNote = async () => {
  try {
    const token = localStorage.getItem("token");

    const result = await fetch(`${BASE_URL}/user/note`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return await result.json();
  } catch (e) {
    console.log(e);
  }
};

const updateNote = async (note) => {
  try {
    const token = localStorage.getItem("token");

    const result = await fetch(`${BASE_URL}/user/note/update/${note.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(note),
    });
    return await result.json();
  } catch (e) {
    console.log(e);
  }
};

const deleteNote = async (note) => {
  try {
    const token = localStorage.getItem("token");

    const result = await fetch(`${BASE_URL}/user/note/delete/${note.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return await result.json();
  } catch (e) {
    console.log(e);
  }
};

export {

  createNote,
  readNote,
  updateNote,
  deleteNote,
  readAllNotes,
  getUserEmails
};
