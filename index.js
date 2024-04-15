//Task 1

async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

//Task 2

async function awaitCall() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Failed to fetch data:', error.message);
  }
}

//Task 3 

//Handling Errors with Async/Await
async function awaitCall() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Failed to fetch data: ' + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

//Chaining Async/Await
async function chainedAsyncFunctions() {
  try {
    await logMessageAfterDelay(1000, 'First async function completed');
    await logMessageAfterDelay(1000, 'Second async function completed');
    await logMessageAfterDelay(1000, 'Third async function completed');
  } catch (error) {
    console.error('Error:', error);
  }
}

async function logMessageAfterDelay(delay, message) {
  await new Promise(resolve => setTimeout(resolve, delay));
  console.log(message);
}


// Task 4

async function concurrentRequests() {
  try {
    const [response1, response2] = await Promise.all([
      fetch('https://api.example.com/data1'),
      fetch('https://api.example.com/data2')
    ]);

    if (!response1.ok || !response2.ok) {
      throw new Error('Failed to fetch data');
    }

    const data1 = await response1.json();
    const data2 = await response2.json();

    console.log('Combined results:', data1, data2);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

// Task 5

async function parallelCalls(urls) {
  try {
    const responses = await Promise.all(urls.map(url => fetch(url)));

    const responseData = await Promise.all(responses.map(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${response.url}`);
      }
      return response.json();
    }));

    console.log('Responses:', responseData);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}