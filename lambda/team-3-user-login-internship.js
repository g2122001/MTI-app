const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const TableName = "User";

exports.handler = async (event, context) => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ message: "" }),
  };
  
  // TODO: リクエストボディの中身をJavaScriptオブジェクトに変換し、1つ、あるいは複数の変数に代入する

  // TODO: query()に渡すパラムを宣言
  const param = {
    TableName,
    //キー、インデックスによる検索の定義
    KeyConditionExpression: "",
    //プライマリーキー以外の属性でのフィルタ
    FilterExpression: "",
    //検索値のプレースホルダの定義
    ExpressionAttributeValues: {
    },
  };

  try{
    // dynamo.query()を用いてuserIdとpasswordが一致するデータの検索
    const res = await dynamo.query(param).promise();
    
    //TODO: 該当するデータが見つからない場合の処理を記述(ヒント：resの中には個数のプロパティが入っています。)

    //TODO: 認証が成功した場合のレスポンスボディを設定する。

  }catch(e){
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: "予期せぬエラーが発生しました。",
      errorDetail: e.toString()
    });
  }
  
  return response;
};
