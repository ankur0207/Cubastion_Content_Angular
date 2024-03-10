const url: string = "https://jsonplaceholder.typicode.com/posts";
let allPosts: Ipost[] = [];

const fetchData = () => {
  fetch(url).then((res) => {
    console.log(res);
    res.json().then((data: Ipost[]) => {
      console.log(data[0].title);
      allPosts = data;
      updateFinalArray();
    });
  });
};

fetchData();

interface Ipost {
  userId?: number;
  id: number;
  title: string;
  body?: string;
}

let finalArray: Ipost[];

const updateFinalArray = () => {
  allPosts.map((post: Ipost) => {
    let tempPost = { id: 0, title: "" };
    tempPost["id"] = post.id;
    tempPost["title"] = post.title;
    return tempPost;
  });
};
