const mysql = require('mysql');

//配置连接
const connection = {
  host: 'localhost',
  post: '3306',
  user: 'root',
  password: '',
  database: 'timu'
};

// let con = mysql.createConnection(connection)

// //开始链接数据库
// con.connect(function(err){
//   if(err){
//       console.log(`mysql连接失败: ${err}!`);
//   }else{
//       console.log("mysql连接成功!");
//   }
// },
//创建连接对象
//let con = mysql.createConnection(connection);

//连接
// con.connect(err => {
//   if (err) {
//     console.log('数据库连接失败');
//   } else {
//     console.log('数据库连接成功');
//   }
// });

//创建promise对象查询方法

function queryFn(sqlStr, arr) {
  //创建连接对象
  let con = mysql.createConnection(connection);
  return new Promise((resolve, reject) => {
    con.query(sqlStr, arr, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
        con.end()
      }
    });
  });
}

module.exports = queryFn;
