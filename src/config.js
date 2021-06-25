const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    'pk_test_51J5WVhGsXKyvGxq8AAaCVWnHjsQqaBZSuXfaLBzJjqcbu6vcUe1IKCbF4ZwHN0fpg3Xrm5N8UJbfnoZJKNiaAjgX007J06IJJa',
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'dev-notes-infra-s3-uploads4f6eb0fd-18oawivki78fz',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://n6ue4dr047.execute-api.us-east-1.amazonaws.com/dev',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_tl9k0X25c',
    APP_CLIENT_ID: '1eh1r0368a2sa693ivqrn90d56',
    IDENTITY_POOL_ID: 'us-east-1:80b06cd9-7df3-4d71-89bb-00d55bb7c376',
  },
};

export default config;
