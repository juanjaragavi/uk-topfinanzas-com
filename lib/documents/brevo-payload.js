const url = "https://api.brevo.com/v3/contacts";
const options = {
  method: "POST",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    "api-key": process.env.BREVO_API_KEY,
  },
  body: JSON.stringify({
    attributes: { FIRSTNAME: "Juan", COUNTRIES: "United Kingdom" },
    updateEnabled: false,
    listIds: [9],
    email: "juan.jaramillo@topnetworks.co",
    ext_id: "topfinanzas-uk",
  }),
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err));
