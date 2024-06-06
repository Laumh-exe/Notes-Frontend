import { BASE_URL } from "../utils/globalVariables";

 async function fetchData(url, callback, method, body) {
  const headers = {
    Accept: "application/json",
  };

  if (method === "POST" || method === "PUT") {
    headers["Content-Type"] = "application/json";
  }

  // Add the Authorization header if a token is provided
  if (localStorage.getItem("token")) {
    headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  }

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      // HTTP error, status = 404 or 500 etc
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => callback(data))
  .catch((error) => {
    if (error.message.startsWith("HTTP error!")) {
      console.log("We have a server side error");
    } else {
      console.log("Network error");
    }
  });
}

const getUserEmails = async (callback) => {
  fetchData(`${BASE_URL}/users/email`, callback , "GET");
};

const createNote = async (note, callback) => {
  fetchData(`${BASE_URL}/user/note/create`, callback, "POST", note);
};

const readAllNotes = async (callback) => {
  fetchData(`${BASE_URL}/user/notes/`, callback, "GET");
};

const deleteNote = async (note) => {
  fetchData(`${BASE_URL}/user/note/delete/${note.id}`, () => {}, "DELETE");
};

const updateNote = async (note, callback) => {
  fetchData(`${BASE_URL}/user/note/update/${note.id}`, () => {}, "PUT", note);
};


// --- Previous code ---

// const createNote = async (note) => {
//   try {
//     const token = localStorage.getItem("token");

//     const result = await fetch(`${BASE_URL}/user/note/create`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(note),
//     });

//     return await result.json();
//   } catch (e) {
//     console.log(e);
//   }
// };

// const getUserEmails = async () => {
//   try {
//     const token = localStorage.getItem("token");

//     const result = await fetch(`${BASE_URL}/users/email`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return await result.json();
//   } catch (e) {
//     console.log(e);
//   }
// };

// const readAllNotes = async () => {
//   try {
//     const token = localStorage.getItem("token");

//     if (token) {
//       const result = await fetch(`${BASE_URL}/user/notes/`, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const theResult = await result.json();

//       return theResult;
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };

// const updateNote = async (note) => {
//   try {
//     const token = localStorage.getItem("token");

//     const result = await fetch(`${BASE_URL}/user/note/update/${note.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(note),
//     });
//     return await result.json();
//   } catch (e) {
//     console.log(e);
//   }
// };

// const deleteNote = async (note) => {
//   try {
//     const token = localStorage.getItem("token");

//     const result = await fetch(`${BASE_URL}/user/note/delete/${note.id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return await result.json();
//   } catch (e) {
//     console.log(e);
//   }
// };

export {
  createNote,
  updateNote,
  deleteNote,
  readAllNotes,
  getUserEmails,
};
