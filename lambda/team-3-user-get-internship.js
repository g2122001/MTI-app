const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const TableName = "User";

exports.handler = async (event, context) => {
  //レスポンスの雛形
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ message: "" }),
  };

  const userId = event.queryStringParameters.userId; //見たいユーザのuserId

  //TODO: 取得対象のテーブル名と検索に使うキーをparamに宣言
  const param = {};
  
  try{
    // dynamo.get()でDBからデータを取得
    const user = (await dynamo.get(param).promise()).Item;
    
    //TODO: 条件に該当するデータがあればパスワードを隠蔽をする処理を記述

    //TODO: レスポンスボディに取得したUserの情報を設定する
  
  }catch(e){
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: "予期せぬエラーが発生しました。",
      errorDetail: e.toString()
    });
  }
  
  return response;
};