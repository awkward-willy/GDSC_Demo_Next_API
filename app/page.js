// Import your Client Component
import HomePage from "./Homepage";

const auth = "";

export async function getPosts() {
  const dataFetch = await fetch(
    "https://api.pexels.com/v1/curated?page=1&per_page=30",
    {
      next: { revalidate: 60 },
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    }
  );
  const parseData = await dataFetch.json();
  return parseData.photos;
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const photos = await getPosts();
  // Forward fetched data to your Client Component
  return <HomePage data={photos} />;
}
