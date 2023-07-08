const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "rohit-notes",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://bcifjywz69.execute-api.us-east-1.amazonaws.com/prod",
},
cognito: {
  REGION: "eu-north-1",
  USER_POOL_ID: "eu-north-1_EbCxHZ5SC",
  APP_CLIENT_ID: "7ldo2bm9ac8mm1s0038skvje0c",
  IDENTITY_POOL_ID: "eu-north-1:b6a8e5a5-27b7-489a-b443-576b26360ab5",
},
  
};
export default config;