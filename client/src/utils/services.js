export const baseUrl = "http://localhost:3000/api";
export const postRequest = async (url, body) => {
  const response = await fetch(`${baseUrl}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const data = await response.json();
  if (!response.ok) {
    let message;
    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, message };
  }

  return data;
};

export const getRequest = async (url) => {
  const response = await fetch(`${baaseUrl}/${url}`);
  const data = await response.json();
  if (!response.ok) {
    let message = "Something went wrong";
    if (data?.message) {
      message = data.message;
    }
    return { error: true, message };
  }
  return data;
};
