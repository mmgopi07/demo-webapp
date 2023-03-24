import { useState, useEffect } from "react";

export default function NasaAPI() {
  const [mars, setMars] = useState();

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
    )
      .then((response) => response.json())
      .then((data) => {
        setMars(data);
      });
  }, []);
  return (
    <div className="contai ner">
      <h1>Mars Photos</h1>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Photo ID</th>
            <th>Camera Name</th>
            <th>Rover Name</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {mars.photos.map((photo) => (
            <tr>
              <td>{photo.id}</td>
              <td>{photo.camera.full_name}</td>
              <td>{photo.rover.name}</td>
              <td><img src={photo.img_src} width="100" height="100"></img></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
