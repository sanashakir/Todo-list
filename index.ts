#! /usr/bin/env node
import inquirer from "inquirer";

let array: string[] = ["sana", "iqra"];

async function todosArray(array: string[]) {
  do{
  let todosAns = await inquirer.prompt({
    name: "todos",
    type: "list",
    message: "Select an operation",
    choices: ["Add", "Update", "Read", "Delete"],
  });

  if (todosAns.todos == "Add") {
    let addTodos = await inquirer.prompt({
      name: "addTodosAns",
      type: "input",
      message: "What do you want to add to todos?",
    });
    array.push(addTodos.addTodosAns);
    console.log(array);
  }

  if (todosAns.todos == "Update") {
    let updatedItem = await inquirer.prompt({
      name: "updated",
      type: "list",
      message: "Select item to update",
      choices: array,
    });

    let addTodoAns = await inquirer.prompt({
      name: "additionTodo",
      type: "input",
      message: "Add new item",
    });

    let newTodo = array.map(item => 
      item === updatedItem.updated ? addTodoAns.additionTodo : item
    );
    array = [...newTodo];
    console.log(array);
  }

  if (todosAns.todos == "Read") {
    console.log(array);
  }

  if (todosAns.todos == "Delete") {
    let deletedItem = await inquirer.prompt({
      name: "deleted",
      type: "list",
      message: "Select item to delete",
      choices: array,
    });

    array = array.filter(val => val !== deletedItem.deleted);
    console.log(array);
  }
  }while (true) 
  }

todosArray(array);
