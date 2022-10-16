import PostSummaryListItem from "./PostSummaryListItem.js";
import posts from './posts.js';

const PostSummaryList = () => {
  return (`
    <div class="list-group wd-small-font">
      ${posts.map(post => 
        PostSummaryListItem(post)  
      ).join('')}
    </div>
  `);
}

export default PostSummaryList;

const init = () => {
  $('#wd-test').html(PostSummaryList());
}
$(init)