// Wrap the code in an async function
async function main() {
  const apiKey = generateKey();
  const items = await getItemData();
  logItems(items);
}

// Call the async function to start the process
main();

// Rest of the code remains the same

async function getItemData() {
  const response = await fetch('https://api.boot.dev/v1/courses_rest_api/learn-http/items', {
    method: 'GET',
    mode: 'cors',
    headers: {
//    'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  });
  return response.json();
}

function generateKey() {
  const characters = 'ABCDEF0123456789';
  let result = '';
  for (let i = 0; i < 16; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function logItems(items) {
  for (const item of items) {
    console.log(item.name);
  } 
}
