const API_BASE_URL = "http://localhost:5000/api";

// ==========================================
// API REQUEST HELPER
// ==========================================

const apiRequest = async (
  endpoint,
  options = {}
) => {
  const token = localStorage.getItem("careeros_token");

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      ...options,
      headers,
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Something went wrong."
    );
  }

  return data;
};

// ==========================================
// AUTH API
// ==========================================

export const registerUser = (userData) => {
  return apiRequest("/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
};

export const loginUser = (credentials) => {
  return apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
};

// ==========================================
// APPLICATION API
// ==========================================

export const getApplications = () => {
  return apiRequest("/applications");
};

export const createApplication = (application) => {
  return apiRequest("/applications", {
    method: "POST",
    body: JSON.stringify(application),
  });
};

export const updateApplication = (
  id,
  application
) => {
  return apiRequest(`/applications/${id}`, {
    method: "PUT",
    body: JSON.stringify(application),
  });
};

export const deleteApplication = (id) => {
  return apiRequest(`/applications/${id}`, {
    method: "DELETE",
  });
};

// ==========================================
// SKILLS API
// ==========================================

export const getSkills = () => {
  return apiRequest("/skills");
};

export const addSkill = (skill) => {
  return apiRequest("/skills", {
    method: "POST",
    body: JSON.stringify(skill),
  });
};

export const updateSkill = (id, skill) => {
  return apiRequest(`/skills/${id}`, {
    method: "PUT",
    body: JSON.stringify(skill),
  });
};

export const deleteSkill = (id) => {
  return apiRequest(`/skills/${id}`, {
    method: "DELETE",
  });
};

// ==========================================
// LEARNING API
// ==========================================

export const getLearning = () => {
  return apiRequest("/learning");
};

export const createLearning = (learning) => {
  return apiRequest("/learning", {
    method: "POST",
    body: JSON.stringify(learning),
  });
};

export const updateLearning = (
  id,
  learning
) => {
  return apiRequest(`/learning/${id}`, {
    method: "PUT",
    body: JSON.stringify(learning),
  });
};

export const deleteLearning = (id) => {
  return apiRequest(`/learning/${id}`, {
    method: "DELETE",
  });
};

// ==========================================
// TASKS API
// ==========================================

export const getTasks = () => {
  return apiRequest("/tasks");
};

export const createTask = (task) => {
  return apiRequest("/tasks", {
    method: "POST",
    body: JSON.stringify(task),
  });
};

export const updateTask = (id, task) => {
  return apiRequest(`/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify(task),
  });
};

export const toggleTask = (id) => {
  return apiRequest(`/tasks/${id}/toggle`, {
    method: "PATCH",
  });
};

export const deleteTask = (id) => {
  return apiRequest(`/tasks/${id}`, {
    method: "DELETE",
  });
};

export default apiRequest;