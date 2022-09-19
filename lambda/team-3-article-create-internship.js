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

  // リクエストの取得
  const rbody = JSON.parse(event.body);
  const userId = rbody.userId;
  const text = rbody.text;
  const category = rbody.category;
  
  // 認証チェック
  if (event.headers.authorization !== 'mtiToken') {
    response.statusCode = 401;
    response.body = JSON.stringify({
      message: "トークンが設定されていません",
    });
    return response;
  }

// 必須項目の入力チェック
  const nullInput = userId === "" || text === "";
  const undefinedInput = userId === undefined || text === undefined;
  if (nullInput || undefinedInput) {
    response.statusCode = 404;
    response.body = JSON.stringify({
      message: "ユーザーID、テキスト、タイムスタンプの全ての入力が必須です",
    });
    return response;
  }
  
  const timestamp = Date.now();

  // 記事をDBへ書き込む
  const param = {
    TableName,
    "Item": {
      userId,
      text,
      category,
      timestamp
    }
  };


  try {
    await dynamo.put(param).promise().Item;
    const data = {
      userId,
      text,
      category,
      timestamp
    }
    response.body = JSON.stringify(data);
    response.statusCode = 201

  }
  catch (e) {
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: "予期せぬエラーが発生しました。",
      errorDetail: e.toString()
    });
  }

  return response;
}
