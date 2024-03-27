const baseUrl = "https://go-crud-todo.onrender.com";
const todoId = "655baa6c2453adf98ef4703e";

fetch(`${baseUrl}/updateTodo/${todoId}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Plan Weekend Trip",
    description: "Research and plan a weekend getawayyy",
    is_completed: true,
    created_at: "2023-11-20T18:50:20.667+00:00",
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((updatedTodo) => {
    console.log("Updated Todo:", updatedTodo);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

fetch(`${baseUrl}/getAllTodos`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((todos) => {
    console.log("Todos:", todos);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

fetch(baseUrl + "/options", {
  method: "OPTIONS",
})
  .then((response) => {
    console.log(response);
    if (response.ok || response.status === 204) {
      console.log("OPTIONS request successful");
      console.log(response.headers.get("allow"));
      console.log(response.headers.get("access-control-allow-methods"));
      console.log(new URL(response.url));
    } else {
      // Handle other response statuses
      console.error(
        "Failed OPTIONS request:",
        response.status,
        response.statusText
      );
    }
  })
  .catch((error) => {
    // Handle network errors or other issues
    console.error("Error making OPTIONS request:", error);
  });

const headers = new Headers();
headers.append("Content-Type", "application/json");
const requestOptions = {
  method: "GET",
  headers: headers,
};

const example = fetch(
  "https://go-crud-todo.onrender.com/getAllTodos",
  requestOptions
)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
