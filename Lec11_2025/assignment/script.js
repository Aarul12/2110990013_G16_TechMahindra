function SearchBar() {
    let query = "";
    const apiUrl = "https://api.chucknorris.io/jokes/categories"; // Replace with actual API URL
  
    async function fetchResults(searchTerm) {
      try {
        const response = await fetch(`${apiUrl}?query=${searchTerm}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
    }
  
    async function handleSearch() {
      const results = await fetchResults(query);
      console.log(results);
      document.getElementById("results").innerHTML = results
        .map(item => <div>${item.word} - ${item.count} "a"(s)</div>)
        .join("");
    }
  
    document.body.innerHTML = `
      <div>
        <input id="searchInput" type="text" placeholder="Search..." />
        <button id="searchButton">Search</button>
        <div id="results"></div>
      </div>
    `;
  
    document.getElementById("searchInput").oninput = function (e) {
      query = e.target.value;
    };
    
    document.getElementById("searchButton").onclick = handleSearch;
  }
  
  SearchBar();