const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value));
  console.log(inputValues);
  console.log(typeof inputValues);
};

sortButton.addEventListener("click", sortInputArray);
