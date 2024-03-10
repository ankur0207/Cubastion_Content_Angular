var url = "https://jsonplaceholder.typicode.com/posts";
var fetchData = function () {
  fetch(url).then(function (res) {
    console.log(res);
    res.json().then(function (data) {
      console.log(data);
    });
  });
};
fetchData();

// const  arr:Iuser[]=[{id,title}]

// interface Iuser{
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
