let sequelizeInstance = require("./../config/db.config");
const Products = require("../model/product");

async function createTable() {
    await sequelizeInstance.sync({force: true});
    console.log('Products table created successfully!');
    insertProducts();
}

async function insertProducts(){
    await Products.bulkCreate(
            [
                {
                    name:"BNW",
                    categoryId:1,
                    price : 46000000
                },
                {
                    name:"ford",
                    categoryId:1,
                    price : 5060000
                },
                {
                    name:"Skoda",
                    categoryId:2,
                    price : 4900000
                },
                {
                    name:"Kia",
                    categoryId:3,
                    price : 4500000
                },
                {
                    name:"Bentely",
                    categoryId:4,
                    price : 90000000
                },
                {
                    name:"Farrai",
                    categoryId:5,
                    price : 48900000
                },
                {
                    name:"Dustan",
                    categoryId:6,
                    price : 78900000
                },
                {
                    name:"Nissan",
                    categoryId:7,
                    price : 78900000
                },
                {
                    name:"Renault",
                    categoryId:8,
                    price : 78900000
                },
                {
                    name:"Hyundai",
                    categoryId:9,
                    price : 78900000
                },
                {
                    name:"Honda",
                    categoryId:10,
                    price:

                
                }
                

               
            ]
    );

    console.log("Added data successfully")

    getAllProducts();
}

let  getAllProducts = async (req,res,next) => {
   let products = await Products.findAll();
   res.writeHead(200, { 'Content-Type': 'application/json' });
   res.write(JSON.stringify(products));
   res.end();
}

let  getProductById = async (req,res,next) => {
    let id = req.params.productId;
    if(!id) { res.status(400).send("ID not passed")}
    let products =  await Products.findAll({
        where:  {
            id : id
        }
    });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(products));
    res.end();
}

// createTable();

module.exports = { getAllProducts, getProductById};