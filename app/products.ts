type Product = {
  id: string;
  name: string; // first 5 characters of id
  image: string;
};

const imageUrls = [
  "https://yzy-sply.com/cdn/shop/files/TS-01W.jpg?v=1736420981&width=1920",
  "https://yzy-sply.com/cdn/shop/files/TS-02W.jpg?v=1736420977&width=1920",
  "https://yzy-sply.com/cdn/shop/files/HD-01W.jpg?v=1736420995&width=1920",
  "https://yzy-sply.com/cdn/shop/files/WB-01W.jpg?v=1736420976&width=1920",
  "https://yzy-sply.com/cdn/shop/files/RC-01W.jpg?v=1736420991&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SH-01W.jpg?v=1736420990&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SP-01W.jpg?v=1736420987&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SP-06W.jpg?v=1736420984&width=1920",
  "https://yzy-sply.com/cdn/shop/files/19_SK-01_624731a3-cc56-4fa5-befb-87175ad485e9.jpg?v=1734929299&width=1920",
  "https://yzy-sply.com/cdn/shop/files/TS-01W0.jpg?v=1736420979&width=1920",
  "https://yzy-sply.com/cdn/shop/files/TS-02W0.jpg?v=1736420976&width=1920",
  "https://yzy-sply.com/cdn/shop/files/HD-01W0.jpg?v=1736420994&width=1920",
  "https://yzy-sply.com/cdn/shop/files/WB-01W0.jpg?v=1736420974&width=1920",
  "https://yzy-sply.com/cdn/shop/files/RC-01W0.jpg?v=1736420990&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SH-01W0.jpg?v=1736420988&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SP-01W0.jpg?v=1736420985&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SP-06W0.jpg?v=1736420983&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SL-01-WHT-1.jpg?v=1738437660&width=1920",
  "https://yzy-sply.com/cdn/shop/files/TS-01G.jpg?v=1736420979&width=1920",
  "https://yzy-sply.com/cdn/shop/files/TS-02G.jpg?v=1736420977&width=1920",
  "https://yzy-sply.com/cdn/shop/files/HD-01G.jpg?v=1736420993&width=1920",
  "https://yzy-sply.com/cdn/shop/files/WB-01G.jpg?v=1736420976&width=1920",
  "https://yzy-sply.com/cdn/shop/files/RC-01G.jpg?v=1736420990&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SH-01G.jpg?v=1736420987&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SP-01G.jpg?v=1736420986&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SP-06G.jpg?v=1736420984&width=1920",
  "https://yzy-sply.com/cdn/shop/files/19_SK-01_ea536387-4d5f-4b96-ba48-03541752c20c.jpg?v=1734929309&width=1920",
  "https://yzy-sply.com/cdn/shop/files/TS-01G0_cf5774ee-0c14-4e3e-af9e-557203346e4e.jpg?v=1736420979&width=1920",
  "https://yzy-sply.com/cdn/shop/files/TS-02G0.jpg?v=1736420977&width=1920",
  "https://yzy-sply.com/cdn/shop/files/HD-01G0.jpg?v=1736420992&width=1920",
  "https://yzy-sply.com/cdn/shop/files/WB-01G0.jpg?v=1736420973&width=1920",
  "https://yzy-sply.com/cdn/shop/files/RC-01G0.jpg?v=1736420990&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SH-01G0.jpg?v=1736420988&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SP-01G0.jpg?v=1736420985&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SP-06G0.jpg?v=1736420984&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SL-01-GRY-1.jpg?v=1738437648&width=1920",
  "https://yzy-sply.com/cdn/shop/files/TS-01B.jpg?v=1736420979&width=1920",
  "https://yzy-sply.com/cdn/shop/files/TS-02B.jpg?v=1736420976&width=1920",
  "https://yzy-sply.com/cdn/shop/files/HD-01B.jpg?v=1736420992&width=1920",
  "https://yzy-sply.com/cdn/shop/files/WB-01B.jpg?v=1736420972&width=1920",
  "https://yzy-sply.com/cdn/shop/files/RC-01B.jpg?v=1736420990&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SH-01B.jpg?v=1736420988&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SP-01B.jpg?v=1736420984&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SP-06B.jpg?v=1736420983&width=1920",
  "https://yzy-sply.com/cdn/shop/files/19_SK-01_fddb90a0-688e-4910-8e59-ac9fdc779c9e.jpg?v=1734929319&width=1920",
  "https://yzy-sply.com/cdn/shop/files/TS-01B0_07c1cc3d-ad59-4118-86dd-79ce4d3a86c0.jpg?v=1736420979&width=1920",
  "https://yzy-sply.com/cdn/shop/files/TS-02B0.jpg?v=1736420976&width=1920",
  "https://yzy-sply.com/cdn/shop/files/HD-01B0.jpg?v=1736420993&width=1920",
  "https://yzy-sply.com/cdn/shop/files/WB-01B0.jpg?v=1736420973&width=1920",
  "https://yzy-sply.com/cdn/shop/files/RC-01B0.jpg?v=1736420989&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SH-01B0.jpg?v=1736420987&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SP-01B0.jpg?v=1736420983&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SP-06B0.jpg?v=1736420980&width=1920",
  "https://yzy-sply.com/cdn/shop/files/SLPR-B-SIDE-lighter.jpg?v=1736852737&width=1920",
];

export const products: Product[] = imageUrls.map((url) => {
  // Extract the file name from the URL (ignoring query parameters)
  const parts = url.split("/");
  const fileWithQuery = parts[parts.length - 1];
  const fileName = fileWithQuery.split("?")[0];

  // The id is the entire part of the file name up until ".jpg"
  const id = fileName.replace(/\.jpg$/i, "");

  // The name is the first 5 characters of the id.
  const name = id.substring(0, 5);

  return {
    id,
    name,
    image: url,
  };
});

console.log(products);
