import React from "react";

const Fetch = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!res.ok) {
    throw new Error("failed to fetch");
  }

  const albums = await res.json();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {albums.map((album: { id: number; title: string }) => (
        <div key={album.id} className="bg-white p-4 m-2 rounded-md shadow-md">
          <h3>{album.title}</h3>
          <p>Album Id: {album.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
