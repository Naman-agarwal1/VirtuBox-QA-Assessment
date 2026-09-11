const USERS_KEY = "qa_users";
const TASKS_KEY = "qa_tasks";
const SESSION_KEY = "qa_current_user";

const $ = id => document.getElementById(id);

function read(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function showMessage(id, text) {
  $(id).textContent = text;
}

function currentUser() {
  return localStorage.getItem(SESSION_KEY);
}

function showApp() {
  const loggedIn = !!currentUser();
  $("auth").classList.toggle("hidden", loggedIn);
  $("tasksSection").classList.toggle("hidden", !loggedIn);
  if (loggedIn) renderTasks();
}

$("registerForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = $("regName").value.trim();
  const email = normalizeEmail($("regEmail").value);
  const password = $("regPassword").value;

  if (!name || !email || !password) {
    showMessage("registerMsg", "Please fill all required fields.");
    return;
  }

  const users = read(USERS_KEY, []);
  if (users.some(u => u.email === email)) {
    showMessage("registerMsg", "Email is already registered.");
    return;
  }

  users.push({ name, email, password });
  write(USERS_KEY, users);
  showMessage("registerMsg", "Registration successful. You can login now.");
  e.target.reset();
});

$("loginForm").addEventListener("submit", e => {
  e.preventDefault();

  const email = normalizeEmail($("loginEmail").value);
  const password = $("loginPassword").value;
  const users = read(USERS_KEY, []);

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    showMessage("loginMsg", "Invalid email or password.");
    return;
  }

  localStorage.setItem(SESSION_KEY, user.email);
  e.target.reset();
  showMessage("loginMsg", "");
  showApp();
});

$("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem(SESSION_KEY);
  $("taskForm").reset();
  showApp();
});

let editingId = null;

$("taskForm").addEventListener("submit", e => {
  e.preventDefault();

  const title = $("taskTitle").value.trim();
  if (!title) {
    showMessage("taskMsg", "Task title is required.");
    return;
  }

  const tasks = read(TASKS_KEY, []);
  const email = currentUser();

  if (editingId !== null) {
    const task = tasks.find(t => t.id === editingId && t.owner === email);
    if (task) task.title = title;
    editingId = null;
    $("cancelEdit").classList.add("hidden");
  } else {
    tasks.push({
      id: Date.now(),
      owner: email,
      title
    });
  }

  write(TASKS_KEY, tasks);
  e.target.reset();
  showMessage("taskMsg", "Task saved.");
  renderTasks();
});

$("cancelEdit").addEventListener("click", () => {
  editingId = null;
  $("taskForm").reset();
  $("cancelEdit").classList.add("hidden");
  showMessage("taskMsg", "");
});

function renderTasks() {
  const list = $("taskList");
  list.innerHTML = "";

  const tasks = read(TASKS_KEY, []);
  const mine = tasks.filter(t => t.owner === currentUser());

  $("emptyMsg").classList.toggle("hidden", mine.length > 0);

  mine.forEach(task => {
    const li = document.createElement("li");
    const text = document.createElement("span");
    text.textContent = task.title + " ";

    const edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.addEventListener("click", () => {
      $("taskTitle").value = task.title;
      editingId = task.id;
      $("cancelEdit").classList.remove("hidden");
      $("taskTitle").focus();
    });

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener("click", () => {
      if (!confirm("Delete this task?")) return;
      const updated = read(TASKS_KEY, []).filter(t => t.id !== task.id);
      write(TASKS_KEY, updated);
      renderTasks();
    });

    li.append(text, edit, del);
    list.appendChild(li);
  });
}

showApp();
