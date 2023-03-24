export default function DataBindingList() {
  const sections = ["All", "Sarees", "Shirts", "Baby Wear", "Handloom"];

  return (
    <>
      <div className="container">
        <h1>Categories</h1>

        <ol>
          {sections.map((section) => (
            <li key={section}>{section}</li>
          ))}
        </ol>
        <h2>Select Catogory</h2>
      </div>

      <div className="container">
        {
          <select>
            {sections.map((section) => (
              <option key={section}>{section}</option>
            ))}
          </select>
        }
      </div>
    </>
  );
}
