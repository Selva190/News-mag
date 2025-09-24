
const Navbar = ({ setCategory }) => {
  const categories = ["Technology", "Business", "Health", "Science", "Sports", "Entertainment"];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsMag</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((category) => (
              <li className="nav-item" key={category}>
                <button
                  className="nav-link btn btn-link"
                  onClick={() => setCategory(category)}
                  style={{ cursor: 'pointer' }}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
