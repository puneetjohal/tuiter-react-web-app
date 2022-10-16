import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
  $('#wd-explore').append(`
    <div class="row mt-2">
      <div class="col-2 col-xl-3">
        ${NavigationSidebar()}
      </div>
      <div class="col-10 col-md-9 col-lg-6 col-xl-5 ps-0 pe-0" id="explore-feed-container">
        ${ExploreComponent()}
      </div>
      <div class="d-none d-lg-block col-4">
        ${WhoToFollowList()}
      </div>
    </div>
  `);
}

$(exploreComponent);