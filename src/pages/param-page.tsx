// pages/param-page.js
export async function getServerSideProps({ query }) {
    const param = query.param || "default"; // Read the query param from the URL
  
    // Simulate fetching data from an API or database
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.example.com/data?param=${param}`);
    const data = await response.json();
  
    return {
      props: { param, data }, // Pass the fetched data as props to the page
    };
  }

  export default function ParamPage({ param, data }) {
    return (
      <div>
        <h1>Query Parameter: {param}</h1>
        <h2>Fetched Data:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
  