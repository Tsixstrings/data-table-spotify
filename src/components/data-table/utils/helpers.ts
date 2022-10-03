export const getFlattedData = (data: any) =>
  data.map((row: any, index: number) => ({
    id: index,
    cover: row?.images[2]?.url || row?.images[0]?.url,
    name: row?.name,
    popularity: row?.popularity,
    followers: row?.followers?.total,
    link: row?.external_urls?.spotify,
  }));
