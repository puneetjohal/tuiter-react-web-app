import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return (`
    <div>
      <!-- search bar & settings -->
      <div class="d-flex align-items-center mb-2">
        <span class="input-group rounded-pill border bg-white">
          <span class="input-group-text bg-transparent border border-0">
            <i class="fas fa-search" style="color: gray;"></i>
          </span>
          <input type="text" class="form-control bg-transparent border border-0" placeholder="Search Twitter">
        </span>
        <i class="fas fa-cog fa-2x text-primary ms-3"></i>
      </div>

      <!-- tabs -->
      <ul class="nav nav-tabs mb-2" id="explore-nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block">
          <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
      </ul>

      <!-- starship image -->
      <div class="card border border-0 position-relative mb-2">
        <img src="../../images/starship2.webp"
             class="img-fluid"/>
        <div class="card-img-overlay p-2">
          <h2 class="card-title text-light position-absolute bottom-0">SpaceX's Starship</h2>
        </div>
      </div>

      ${PostSummaryList()}
    </div>
  `);
}

export default ExploreComponent;