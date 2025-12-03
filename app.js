// Simple Task Manager using localStorage

let tasks = [];
let currentFilter = "all";

const taskTitleInput = document.getElementById("taskTitle");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const filterButtons = document.querySelectorAll(".filter
