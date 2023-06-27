const inputBtn = document.getElementsByClassName("input-btn")[0];
const inputEl = document.getElementsByClassName("input-el")[0];
const ulEl = document.getElementsByClassName("ul-el")[0];
const deleteBtn = document.getElementsByClassName("delete-btn")[0];
const tabBtn = document.getElementsByClassName("tab-btn")[0];

let myleads = [];

const leadsFromStroage = JSON.parse(localStorage.getItem("myleads"));

if (leadsFromStroage) {
  myleads = leadsFromStroage;
  randar(myleads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs);
    myleads.push(tabs[0].url);
    localStorage.setItem("myleads", JSON.stringify(myleads));
    randar(myleads);
  });
});

function randar(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    // listItems += "<li><a href='" + leads[i] + "' target='_blank' > " + leads[i] + " </a ></li > ";

    // Better way is to use template string
    listItems += `
    <li>
        <a href= '${leads[i]}' target='_blank' > 
            ${leads[i]} 
        </a>
    </li > 
    `;
  }
  ulEl.innerHTML = listItems;
}
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myleads = [];
  randar(myleads);
});
inputBtn.addEventListener("click", () => {
  myleads.push(inputEl.value);
  inputEl.value = ""; // 👈 clear out the input field

  localStorage.setItem("myleads", JSON.stringify(myleads));
  randar(myleads);
});

// ulEl.innerHTML += "<li>" + myleads[i] + "</li>"; // One way to add html tag using javascript
// create Element
// Set text content
// append to ul

//                         Another Way to add html tag using javascript
//   const li = document.createElement("li");
//   li.textContent = myleads[i];
//   ulEl.append(li);
