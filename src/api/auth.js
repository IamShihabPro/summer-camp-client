export const saveUser = (user) => {
  const currentUser = {
    email: user.email,
    name: user.displayName,
    photoURL: user.photoURL,
  };

  fetch(`${import.meta.env.VITE_API_URL}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// Get all users
export const getAllUsers = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users`);
  const data = await response.json();
  return data;
};

// Get all users
export const getAllCourse = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/courses`);
  const data = await response.json();
  return data;
};


// Get all data
export const getBookedCourse = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`);
  const data = await response.json();
  return data;
};

