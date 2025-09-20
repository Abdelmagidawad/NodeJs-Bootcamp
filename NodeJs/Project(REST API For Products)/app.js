import http from "http";
import fs from "fs";

const path = "./products.json";

const server = http.createServer((req, res) => {
  let products = JSON.parse(fs.readFileSync(path, "utf-8"));
  let [, rout, Id] = req.url.split("/");
  //
  if (req.url === "/products" && req.method === "GET") {
    res.statusCode = 200;
    res.end(JSON.stringify(products));
  } else if (req.url === "/products" && req.method === "POST") {
    //
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      let { id, name, price, category } = JSON.parse(body);
      id = products.length + 1;
      products.push({ id, name, price, category });
      fs.writeFileSync(path, JSON.stringify(products));
      res.statusCode = 201;
      res.end("Product Added Successfully");
    });
  } else if (rout === "products" && Id && req.method === "PUT") {
    //
    if (Id <= products.length) {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        let { name, price, category } = JSON.parse(body);
        products = products.map((product) => {
          if (product.id === +Id) {
            return {
              id: product.id,
              name: name || product.name,
              price: price || product.price,
              category: category || product.category,
            };
          }
          return product;
        });

        fs.writeFileSync(path, JSON.stringify(products));
        res.statusCode = 200;
        res.end(`Product Id_${Id} Updated Successfully`);
      });
    } else {
      res.statusCode = 404;
      res.end(`Not Product Found Id_${Id}`);
    }
  } else if (rout === "products" && Id && req.method === "GET") {
    //
    if (Id <= products.length) {
      let product = products.filter((product) => {
        return product.id === +Id;
      });
      res.statusCode = 200;
      res.end(JSON.stringify(product));
    } else {
      res.statusCode = 404;
      res.end(`Not Product Found Id_${Id}`);
    }
  } else if (rout === "products" && Id && req.method === "DELETE") {
    //
    if (Id <= products.length) {
      let newProducts = products.filter((product) => {
        return product.id !== +Id;
      });
      fs.writeFileSync("./products.json", JSON.stringify(newProducts));
      res.statusCode = 200;
      res.end(`Product Id_${Id} Deleted Successfully`);
    } else {
      res.statusCode = 404;
      res.end(`Not Product Found Id_${Id}`);
    }
  } else {
    res.statusCode = 404;
    res.end("404 Not found");
  }
});

server.listen(3000, "localhost", () => {
  console.log("Listening on Port 3000!");
});
