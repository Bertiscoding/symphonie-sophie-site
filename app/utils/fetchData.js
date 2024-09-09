import Papa from "papaparse"

export const fetchData = async () => {
  const url =`https://docs.google.com/spreadsheets/d/e/${process.env.GOOGLE_SPREADSHEET_ID}/pub?gid=0&single=true&output=csv`

  const res = await fetch(url, { cache: 'no-store' });
  const csv = await res.text();
  const parsedData = Papa.parse(csv, { header: true }).data;
  
  return parsedData;
}
