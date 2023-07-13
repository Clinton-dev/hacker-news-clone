export default function Story(story) {
  const {
    index,
    title,
    domain,
    url,
    points,
    user,
    time_ago,
    id,
    comments_count,
    isFavorite,
  } = story;
  const encodedStory = encodeURIComponent(JSON.stringify(story));

  return `<div class="story">
  <div>
    <span class="gray">${index || ""}</span>
    <span class="upvote">▲</span>
    <a href="${url}">${title}</a>
    <span>(${domain})</span>
  </div>
  <div>
    <div class="gray">
        ${points} points by ${user} ${time_ago} |
        <a href='#/item?id=${id}'>
            ${comments_count} comments
        </a>
        |
        <span class="favorite" data-story="${encodedStory}">
            ${
              isFavorite
                ? `<img class="heart" src="../images/unheart_icon.svg">`
                : `<img class="heart" src="../images/heart_rate_icon.svg">`
            }
            ${isFavorite ? "Remove from favorites" : "Add to favorites"}
        </span>
    </div>
  </div>
  </div>`;
}
