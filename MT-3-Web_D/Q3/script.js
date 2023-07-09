document.addEventListener("DOMContentLoaded", getData);

function getData() {
  const dataContainer = document.getElementById("data-container");

  
  showSkeletonLoader(dataContainer);

  
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      
      removeSkeletonLoader(dataContainer);

      
      displayData(data, dataContainer);
    })
    .catch((error) => {
      console.log("Error:", error);
      dataContainer.textContent = "Failed to fetch data.";
    });
}

function showSkeletonLoader(container) {
  for (let i = 0; i < 5; i++) {
    const skeletonElement = document.createElement("div");
    skeletonElement.classList.add("skeleton");
    container.appendChild(skeletonElement);
  }
}

function removeSkeletonLoader(container) {
  const skeletons = container.getElementsByClassName("skeleton");
  while (skeletons.length > 0) {
    skeletons[0].parentNode.removeChild(skeletons[0]);
  }
}

function displayData(data, container) {
  data.forEach((item) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.body}</p>
    `;
    container.appendChild(postElement);
  });
}
