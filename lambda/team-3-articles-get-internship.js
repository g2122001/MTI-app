const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const TableName = "Article";

exports.handler = async (event, context) => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ message: "" }),
  };
  
  // tokenがheaderに含まれているか確認
  if(event.headers.authorization !== "mtiToken"){
    response.statusCode = 401;
    response.body = JSON.stringify({
      message: "認証されていません。HeaderにTokenを指定してください"
    });
    
    return response;
  }
  
  //TODO: 取得対象のテーブル名をparamに宣言
  const param = {
    TableName,
    Limit: 100
  };
  
    
  try{
    // dynamo.scan()で全件取得
    const articles = (await dynamo.scan(param).promise()).Items;
    
    // articleをtimestampを使って降順にする
    articles.sort((a,b) => b.timestamp - a.timestamp);

    //TODO: レスポンスボディを設定する
    if(articles.length == 100){
      response.body = JSON.stringify({articles})
    }else{
      throw new Error("エラー")
    }
  
  }catch(e){
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: "予期せぬエラーが発生しました。",
      errorDetail: e.toString()
    });
  }
  
  return response;
};
