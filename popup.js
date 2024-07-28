// Add event listener to the convert button
document.getElementById('convert-btn').addEventListener('click', () => {
  // Query the active tab in the current window
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // Execute the script in the tab
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: convertPageToPDF
    });
  });
});

// Define the convertPageToPDF function
function convertPageToPDF() {
  // Create a print button
  const printButton = document.createElement('button');
  printButton.innerHTML = 'Print';
  printButton.style.display = 'block'; // Make the button visible
  document.body.appendChild(printButton);

  // Add event listener to the print button
  printButton.addEventListener('click', () => {
    // Create a new style element
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(`
      @page { size: auto; margin: 0mm; }
    `));
    document.head.appendChild(style);

    // Print the page
    window.print();

    // Remove the print button
    printButton.remove();
  });
}

// Add error handling
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.error) {
    console.error(request.error);
  }
});

// Define the manifest file permissions
// (Make sure to add these permissions to your extension's manifest file)
/*
{
  "name": "Your Extension",
  "version": "1.0",
  "manifest_version": 2,
  "permissions": ["tabs", "scripting"],
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["contentScript.js"]
    }
  ]
}
*/