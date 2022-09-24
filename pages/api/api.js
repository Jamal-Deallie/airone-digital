// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// export async function fetcher(url, options = {}) {
//   let response;
//   if (!options) {
//     response = await fetch(url);
//   } else {
//     response = await fetch(url, options);
//   }
//   const data = await response.json();
//   return data;
// }
