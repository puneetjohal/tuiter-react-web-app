import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
  return (`
    <div class="list-group wd-small-font">
      <div class="list-group-item">
        <p class="fw-bold">Who to follow</p>
      </div>
      ${who.map(profile => 
          WhoToFollowListItem(profile)
        ).join('')}
    </div>
  `);
}

export default WhoToFollowList;

const init = () => {
  $('#wd-test').html(WhoToFollowList());
}
$(init)