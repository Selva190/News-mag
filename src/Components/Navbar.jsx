

const Navbar = ({setCategory}) => {
  return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsMag</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" onClick={() => setCategory("Technology")}>Technology</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={() => setCategory("Business")}>Business</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={() => setCategory("Health")}>Health</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={() => setCategory("Science")}>Science</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={() => setCategory("Sports")}>Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={() => setCategory("Entertainment")}>Entertainment</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
