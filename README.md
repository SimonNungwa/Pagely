# Page2PDF

Welcome to **Page2PDF**, a super simple Chrome extension that lets you convert any web page to a PDF with just one click!

## Features

- 📄 Convert any web page to a PDF
- 🎨 Retain colors and layout
- ⚡ Fast and easy to use

## How to Install

1. Clone or download this repository to your computer.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the folder where you downloaded/cloned this repository.

## How to Use

1. Navigate to any web page you want to convert to a PDF.
2. Click on the **Page2PDF** extension icon in the Chrome toolbar.
3. Click the "Convert Current Page" button in the popup.
4. Voilà! Your PDF will be generated and downloaded.

## Files

- **manifest.json**: The configuration file for the Chrome extension.
- **background.js**: The background script that handles the PDF conversion.
- **popup.html**: The HTML file for the popup interface.
- **images/**: Folder containing the extension icons.

## Libraries Used

- [jsPDF](https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js): To generate PDF files.
- [html2canvas](https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js): To capture web page content.

## Troubleshooting

If you run into any issues:

1. Make sure you're on an active tab that can be converted.
2. Check the console for any error messages (Right-click on the page -> Inspect -> Console).
3. Ensure you have the necessary permissions enabled in `manifest.json`.

## Contributions

Feel free to fork this repository and make your own enhancements. Pull requests are welcome!

## License

This project is licensed under the MIT License.

---

Enjoy converting pages to PDFs effortlessly with **Page2PDF**! 🚀
