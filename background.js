chrome.action.onClicked.addListener((tab) => {
    if (tab && tab.id) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: convertPageToPDF
      }, (result) => {
        if (result && result[0].result) {
          console.log("PDF generated successfully");
        } else {
          console.error("Error generating PDF");
        }
      });
    } else {
      console.error("Invalid tab object");
    }
  });
  
  function convertPageToPDF() {
    const { jsPDF } = window.jspdf;
  
    // Create a new jsPDF instance
    const pdf = new jsPDF();
  
    // Fetch the content of the body
    const content = document.body.innerText;
  
    // Add the content to the PDF
    pdf.text(content, 10, 10);
  
    // Save the generated PDF
    pdf.save("webpage.pdf");
  }
  