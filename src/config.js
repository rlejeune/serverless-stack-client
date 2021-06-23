const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-bob",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://knzs5vrn96.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_mSQuoZ6Gm",
    APP_CLIENT_ID: "4fpa2cjnube5tqsqf7o08oqvgv",
    IDENTITY_POOL_ID: "us-east-1:7c294804-3018-4dd0-a2fb-dc672c76c8d9",
  },
};

export default config;