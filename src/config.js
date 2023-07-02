const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "rohit-notes",
    },
    apiGateway: {
      REGION: "us-east-1 ",
      URL: "https://e9kxoyawyi.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "eu-north-1",
      USER_POOL_ID: "eu-north-1_LVSQYoJxz",
      APP_CLIENT_ID: "4nbl8jl29f92al1n4q4jbtabot",
      IDENTITY_POOL_ID: "eu-north-1:7f67f558-45be-4a7b-b43b-d1562d2f2636",
    },
  };
  
  export default config;