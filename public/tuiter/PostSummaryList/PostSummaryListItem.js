const PostSummaryListItem = (post) => {
  return(`
    <div class="list-group-item d-flex justify-content-between">
      <div>
        <p class="text-muted">${post.topic}</p>
        <p class="fw-bold d-inline">${post.userName}</p>
        <i class="fas fa-check-circle fa-sm me-1"></i>
        <p class="d-inline text-muted">- ${post.time}</p>
        <p class="fw-bold">${post.title}</p>
      </div>
      <img src="${post.image}"
           class="wd-image">
    </div>
  `);
}

export default PostSummaryListItem;

const init = () => {
  $('#wd-test').html(PostSummaryListItem(
    {
      topic: 'Web Development',
      userName: 'ReactJS',
      time: '2h',
      image: '../../images/react-blue.png',
      title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs'
    }
  ));
}
$(init)