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
      IDENTITY_POOL_ID: "eu-north-1:e3f58571-ba24-4805-9a11-d6c673f3ca09",
    },
  };
  
  export default config;
// const config = {
//   MAX_ATTACHMENT_SIZE: 5000000,
//     s3: {
//       REGION: "ap-south-1",
//       BUCKET: "notes-app-uploads-mt1",
//     },
//     apiGateway: {
//       REGION: "ap-south-1",
//       URL: "https://jxleojxvgb.execute-api.ap-south-1.amazonaws.com/prod",
//     },
//     cognito: {
//       REGION: "ap-south-1",
//       USER_POOL_ID: "ap-south-1_42s1Jqzt8",
//       APP_CLIENT_ID: "691qoct6bbkki7bahu65e4hn84",
//       IDENTITY_POOL_ID: "ap-south-1:389c7b41-1639-4550-a00b-9fa743c01a44",
//     },
//   };
  
//   export default config;
// const config = {
//   MAX_ATTACHMENT_SIZE: 5000000,
//   s3: {
//     REGION: "us-east-1",
//     BUCKET: "rohit-notes",
//   },
//   apiGateway: {
//     REGION: "us-east-1",
//     URL: "https://bcifjywz69.execute-api.us-east-1.amazonaws.com/prod",
// },
// cognito: {
//   REGION: "eu-north-1",
//   USER_POOL_ID: "eu-north-1_EbCxHZ5SC",
//   APP_CLIENT_ID: "7ldo2bm9ac8mm1s0038skvje0c",
//   IDENTITY_POOL_ID: "eu-north-1:b6a8e5a5-27b7-489a-b443-576b26360ab5",
// },
  
// };
// export default config;