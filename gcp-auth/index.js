const { GoogleAuth } = require("google-auth-library");

async function getAccessToken() {
  // Create a new GoogleAuth instance with the key file path
  const auth = new GoogleAuth({
    keyFile: "/usr/gcp-sa-key/TopFinanzas-Vertex-AI-Service-Account.json",
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });

  // Get the access token
  const client = await auth.getClient();
  const token = await client.getAccessToken();
  return token.token;
}

// Example usage
async function makeAuthenticatedRequest() {
  const token = await getAccessToken();

  // Use the token in your API requests
  const response = await fetch(
    "https://media.topfinanzas.com/certs/TopFinanzas-Vertex-AI-Service-Account.json",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  console.log(data);
}

makeAuthenticatedRequest();
