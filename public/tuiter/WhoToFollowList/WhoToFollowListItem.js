const WhoToFollowListItem = (who) => {
  return (`
  <div class="list-group-item d-flex align-items-center justify-content-between">
    <div class="d-flex align-items-center">
      <img src="${who.avatarIcon}" class="wd-pfp me-3">
      <div>
        <p class="fw-bold d-inline">${who.userName}</p>
        <i class="fas fa-check-circle fa-sm"></i>
        <p>@${who.handle}</p>
      </div>
    </div>
    <button type="button" class="btn btn-primary rounded-pill float-right">Follow</button>
  </div>
  `);
}

export default WhoToFollowListItem;

const init = () => {
  $('#wd-test').html(WhoToFollowListItem(
    {
      avatarIcon: 'https://cdn.worldvectorlogo.com/logos/virgin-1.svg',
      userName: 'Virgin Galactic',
      handle: 'virgingalactic',
    }
  ));
}
$(init)