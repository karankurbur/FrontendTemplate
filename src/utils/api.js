async function doPost(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}

async function doGet(url, data) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}

export { doPost, doGet };
