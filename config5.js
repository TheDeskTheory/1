// Store configuration — shared across cart & checkout pages
const STORE_CONFIG = {
  // Flat shipping fee added at checkout (in ₹). Currently free.
  shipping: 0,

  // Your UPI ID for accepting payments, e.g. "yourname@okhdfcbank"
  // Leave the "PASTE" prefix until you fill this in — checkout will
  // show a "payment setup in progress" message instead of a broken QR code.
  upiId: "PASTE_YOUR_UPI_ID_HERE",

  // Name shown to the customer in the UPI app during payment
  payeeName: "The Desk Theory",

  // Instagram handle (no @) customers use to send payment screenshots via DM.
  // e.g. "the.desk.theory"
  instagramHandle: "the.desk.theory",

  // Optional: a Google Apps Script / Sheet webhook URL to log orders.
  // Leave the "PASTE" prefix if you haven't set one up yet — orders will
  // still complete locally without being logged anywhere.
  sheetWebhookUrl: "https://script.google.com/macros/s/AKfycbw4UfkOCQnhVjyhN6Ge4kpINgpcumZ_uOzeC9BnDd5vOE5bdUScUduMSNAMxPOUMrbf/exec",
};
