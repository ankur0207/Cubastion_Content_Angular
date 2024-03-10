const url = "https://jsonplaceholder.typicode.com/posts";
let allPosts;
const fetchData = () => {
  fetch(url)
    .then((res) => {
      res.json().then((data) => {
        allPosts = data;
        updateAllPosts();
        printPostData();
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
};

fetchData();

let updatedPosts;

const updateAllPosts = () => {
  //Implemet updateAllPosts
};

const printPostData = () => {
  console.log(allPosts);
};
