const { GoogleAuth } = require("google-auth-library");

async function getAccessToken() {
  const auth = new GoogleAuth({
    // Use the full JSON content shown in your output
    credentials: {
      type: "service_account",
      project_id: "absolute-brook-452020-d5",
      private_key_id: "4cff7d86012a9f2ccd0ff05e9e090c1724ee575e",
      private_key:
        "-----BEGIN PRIVATE KEY-----\n" +
        "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCezYRLkuTUHh6W\n" +
        "Oe6sTrmMT7oz9T9RtsUXLeAJEendqFJwiEFxwMLiGS0VZ6EkTqBe+yy+f8nMF/kW\n" +
        "AskFzfya23NPNLEAZVUfTMPPkm64NQJfjKBbWEaQvswTJOe7apFEIfUomOBzXo4/\n" +
        "H4vnQP0O0925OyRnKJD2R38TlldwdylwPcdbjrWnRmDBSg83JZ80sTx//6/ZkK02\n" +
        "5hqoH33PUiEhuxGqAufMKFR9LhSvo5w9Ld3NZKRsa3glt8xREOEdJKdpFtwvXQ/Q\n" +
        "xWVIwKGMcCfKadSC8i0797vJYaVc9xrnTNDY1IY+A35qn7I7ImlEu0q6C+onC5Wb\n" +
        "fxfP7zHVAgMBAAECggEABdKdTjQVpd1w26tGIBVG4mkt96e/aZyc/2uUMmDwxUrd\n" +
        "svicBbK+spGfwJArLWygnrrw+g8vdAdQ/8icXFUgNQFk6fuRneUZSOuEpoDFBIYV\n" +
        "DzHV02OaOsZ0LyOER6/xoaDpH1Lzr+dAqfnbJGCSps+H6rnLbOjk39LhSvORQzNc\n" +
        "gIKOM26K5AOoct+g2cmwCu4HXC3qUj4glxLGtg2MF8KcJGokxw6EyHkf6W+e0caD\n" +
        "zH7jJ6z51P1YZ5SS9AsZ/moFAqqfBtrY0V9BZFxJvlSEqx3mVIQRrk/YZI/M6zNf\n" +
        "KG+16B9JMcSaOtp/tanKywTC0v+SMkIte5Uuocuy4QKBgQDa8yO9bTVhzcvKAfkp\n" +
        "K8FTE/ZYYNIKNeh47p2qzu3QrgJLN8w/7QyUoWyKUGqJzlXyLwBfMDLk3x9yyvg9\n" +
        "UV/Pioo6hz7QNNTeWOBWHlmRxgkelF1Be1WZLCwTzVc5aqlLFFCBJdObbVYbHyp1\n" +
        "0TNBgNaSQGXqui34dMNECEShWQKBgQC5rNKV6txUUqfQ9usU+z90cDJIxhZDSsKk\n" +
        "cNVMEkS68ly8jmPhDr+Vbn+p8SeoInddPl1CQY/DZAyysUF4/LPw6yGSM860W32u\n" +
        "aKcU9ZiWr+Vihmvfy83Gn+EZ01MGvVNrfXQEt6uoHpMuTI1b7jICf6cpNpjEUTvR\n" +
        "Kkj2Fgoo3QKBgQCDi9dqRQXwmCObX+oiKU7Cqli0qp8nUVI17i8+Y4sQeKuaI5EM\n" +
        "y1BmsEG1LDGGUDjlBAY2KpA5YDDV2EqjFJP67qK0HXPIxiUq3b0TILLx2Ui7XapV\n" +
        "4FMCbz6gOxvvvDywhikEHwTu+hbkvqnVFXa1IUJJpnVVPLzH7OcwpcMOKQKBgCwu\n" +
        "DSWS7r45tKiqOCGT7vNbxvs99won/cx29KnXJvd8t8g98VIZ2khKNKJROWhuWwya\n" +
        "zEH5q6WIZuUV/Eg3iPFoYWKSZTrREkSvriH0lkw0qlYZOg3URrBeVod4mybdYb4P\n" +
        "6c09juC/9bFska4wLUIe8b2CujLsSVlpwFadw+kZAoGBALyJcmFyh/5LfIFVjP3C\n" +
        "sesDTTUjc+ObtENiGzyMS6k5vpczpuDoXML3y3fObBqQUf7Su6CMbM7WBJ5bZ+rX\n" +
        "Vw2sjRSoEhgiOqZAX8ypbkrAc1FP92CvAeG9xOtKvGQHOTfGgr3qwRJI4+S42RGl\n" +
        "Cyb7AC6uK7G/s8Bo5cBoBpdC\n" +
        "-----END PRIVATE KEY-----\n",
      client_email:
        "topfinanzas-vertex-ai-sa@absolute-brook-452020-d5.iam.gserviceaccount.com",
      client_id: "108326180285963424944",
      // Include other fields as shown in your output
    },
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });

  const client = await auth.getClient();
  const token = await client.getAccessToken();
  console.log("Access Token:", token.token);
  return token.token;
}

getAccessToken();
