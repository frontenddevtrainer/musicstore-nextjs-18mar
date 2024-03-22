const PostPage = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character", { next: { revalidate : 3600 } });
  const { results } = await res.json();

  return (
    <>
      {results.map((result: any) => {
        return <div key={result.id}>{result.name}</div>;
      })}
    </>
  );
};

export default PostPage;
