async function getData() {
    const res = await fetch("https://meowfacts.herokuapp.com/");
    const data = await res.json();
    console.log(data);
  
    const textBlock = document.createElement("div");
    textBlock.innerHTML = data.data[0];
    document.body.append(textBlock);
  }
  
  getData();