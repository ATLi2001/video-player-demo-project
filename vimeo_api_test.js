let client_id = "ca9095a5c2cb715dd79372fd1383f8014e5e137c";
let client_secret =
  "yuo1ftXIPOEmMegxHuwfyTUSif+wRB7u9oiucP8IJxIE8yTKmCk7+K3GsfvHZF5Ifspv8BAbp7TOZsDxYKhHwy6ZVqstVEGRfNJkUPdgh0K9bNR5P1u6NbDvOJ7gXQh2";
let access_token = "d55316b7a0d2da2863ae1a33c9bc2b0c";

let Vimeo = require("vimeo").Vimeo;
let client = new Vimeo(client_id, client_secret, access_token);

// client.request(
//   {
//     method: "GET",
//     path: "/tutorial",
//   },
//   function (error, body, status_code, headers) {
//     if (error) {
//       console.log(error);
//     }

//     console.log(body);
//   }
// );

// client.request(
//   {
//     method: "GET",
//     path: "/videos/124319825",
//   },
//   function (error, body, status_code, headers) {
//     if (error) {
//       console.log(error);
//     }

//     console.log(body);
//   }
// );

var fs = require("fs");

client.request(
  {
    method: "GET",
    path: "/videos",
    query: {
      page: 1,
      per_page: 25,
      query: "cat",
      sort: "relevant",
      direction: "asc",
    },
  },
  function (error, body, status_code, headers) {
    if (error) {
      console.log("error");
      console.log(error);
    } else {
      let json = JSON.stringify(body);
      fs.writeFile("vimeo_cat_search.json", json, "utf8", function (err) {
        if (err) throw err;
        console.log("complete");
      });
    }
  }
);
