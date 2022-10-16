const SideNav = () => {
  return (`
  <div class="list-group">
    <div class="list-group-item">
      <i class="fab fa-twitter fa-lg"></i>
    </div>
    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
      <i class="fas fa-home fa-lg me-2"></i>
      <p class="fw-semibold d-none d-xl-block">Home</p>
    </a>
    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center active">
      <i class="fas fa-hashtag fa-lg me-2"></i>
      <p class="fw-semibold d-none d-xl-block">Explore</p>
    </a>
    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
      <i class="fas fa-bell fa-lg me-2"></i>
      <p class="fw-semibold d-none d-xl-block">Notifications</p>
    </a>
    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
      <i class="fas fa-envelope fa-lg me-2"></i>
      <p class="fw-semibold d-none d-xl-block">Messages</p>
    </a>
    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
      <i class="fas fa-bookmark fa-lg me-2"></i>
      <p class="fw-semibold d-none d-xl-block">Bookmarks</p>
    </a>
    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
      <i class="fas fa-list fa-lg me-2"></i>
      <p class="fw-semibold d-none d-xl-block">Lists</p>
    </a>
    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
      <i class="fas fa-user fa-lg me-2"></i>
      <p class="fw-semibold d-none d-xl-block">Profile</p>
    </a>
    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
      <span class="fa-stack fa-xs me-2">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
      </span>
      <p class="fw-semibold d-none d-xl-block">More</p>
    </a>
  </div>
  `);
}

const NavigationSidebar = () => {
  return (`
    <div>
      <!-- left sidebar content when screen size is >= medium -->
      <div class="w-75 float-end d-none d-md-block">

        <!-- side nav -->
        ${SideNav()}

        <!-- tweet button -->
        <a href="tweet.html">
          <button type="button" class="btn btn-primary rounded-pill w-100 mt-2">
            Tweet
          </button>
        </a>

      </div>

      <!-- left sidebar content when screen size is small -->
      <div class="d-block d-md-none">

        <!-- side nav -->
        ${SideNav()}

        <!-- tweet button -->
        <a href="tweet.html">
          <button type="button" class="btn btn-primary rounded-pill w-100 mt-2">
            Tweet
          </button>
        </a>

      </div>
    </div>
  `);
}

export default NavigationSidebar;

const init = () => {
  $('#wd-test').html(NavigationSidebar());
}
$(init)