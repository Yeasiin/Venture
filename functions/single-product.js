exports.handler = async function (event, context) {
  const productId = event.queryStringParameters?.id;

  if (!productId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Please provide a product ID." }),
    };
  }

  const apiUrl = `${process.env.SINGLE_PRODUCT_URL}${productId}`;

  try {
    const fetchModule = await import("node-fetch");
    const fetch = fetchModule.default;
    const response = await fetch(apiUrl, { method: "GET" });

    if (!response.ok) {
      console.error(`Fetch error: ${response.status} - ${response.statusText}`);
      return {
        statusCode: response.status,
        body: JSON.stringify({ message: "Failed to fetch product data." }),
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Fetch error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Something went wrong while fetching product data.",
      }),
    };
  }
};
