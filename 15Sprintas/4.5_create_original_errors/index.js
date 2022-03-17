import fs from "fs/promises";

async function loadData() {
  const data = await fs.readFile("./users.json");
  // console.log(JSON.parse(data));
  return JSON.parse(data);
}

async function run(operationIncoming, dataIncoming) {
  let data = await loadData();
  console.log(data);

  const operation = operationIncoming;
  console.log(`Here's the operation you invoked: "${operation}"`);
  const incomingData = dataIncoming;
  console.log(`Here's the data you supplied: "${incomingData}"`);

  if (operation === "add") {
    addUser(data, incomingData);
  }
  if (operation === "delete") {
    // data = deleteUser(data, incomingData);
    console.log(`DELETE was used`);

    if (parseInt(incomingData) === 5) {
      console.log("The fifth user entry is about to be deleted");
    }
    if (
      data.find((element) => {
        return element.id === parseInt(incomingData);
      }) === undefined
    ) {
      const err = new Error("ID must match an existing user...");
      err.code = "ERR_MUST_BE_A_CURRENT_USER";
      console.log("Bespoke error is about to fire - !");
      throw err;
    }
    data = deleteUser(data, incomingData);
  }

  console.log(`Here's what "users.json" is about to be *re-written* with:`);
  console.log(data);
  await saveData(data);
}

function addUser(data, newUser) {
  const newId = data.reduce((a, c) => Math.max(a, c.id), 0) + 1;
  data.push({ id: newId, name: newUser });
}
async function saveData(data) {
  // console.log(JSON.stringify(data));
  return fs.writeFile("./users.json", JSON.stringify(data));
}

function deleteUser(data, removeId) {
  return data.filter((user) => user.id !== parseInt(removeId));
}

function checks(input1, input2) {
  const operation = input1;
  const incomingData = input2;

  const currentOperationsList = ["add", "delete"];

  function verifyOperationInput(operationInput, currentOperations) {
    // console.log(currentOperations.indexOf(operationInput));
    if (!(currentOperations.indexOf(operationInput) > -1)) {
      // console.log(`That doesn't exist as an operation`);
      const err = new Error("that isn't an available operation");
      err.code = "ERR_CAN_ONLY_BE_A_VALID_OPERATION";
      throw err;
    }
  }

  // verifyOperationInput("add", currentOperationsList);
  // verifyOperationInput("move", currentOperationsList);
  verifyOperationInput(operation, currentOperationsList);

  run(operation, incomingData);
}

try {
  console.log(`Try was executed`);
  // TRIAL CASES:

  // Case 1: AddUser SUCCESFULLY
  // checks("add", "Washington");

  // Case 2: MoveUser INCORRECT OPERATION
  // checks("move", "2");

  // Case 3: DeleteUser SUCCESFULLY
  // checks("delete", "6");

  // Case 4: DeleteUser INCORRECT ID
  checks("delete", "10");
} catch (error) {
  if (error.code === "ERR_CAN_ONLY_BE_A_VALID_OPERATION") {
    // console.log(`${operation} is not an available operation`);
    console.log(`That is not an available operation`);
  } else if (error.code === "ERR_MUST_BE_A_CURRENT_USER") {
    // console.log(`A user with ID #${incomingData} does not exist`);
    console.log(`A user with that ID # does not exist`);
  } else {
    console.log(error);
  }
}

// run();
