import view from "../utils/view.js";
import Story from "../components/Story.js";
import Comment from "../components/Comment.js";
import baseUrl from "../utils/baseUrl.js";

export default async function Item() {
  const story = await getStory();
  const hasComments = story.comments.length > 0;

  view.innerHTML = `<div>
    ${Story(story)}
    <hr />
    ${
      hasComments
        ? story.comments.map((comment) => Comment(comment)).join("")
        : "No comments"
    }
  </div>`;
}

async function getStory() {
  const id = window.location.hash.split("?id=")[1];
  const url = `${baseUrl}/item/${id}`;
  const response = await fetch(url);
  const story = await response.json();

  return story;
}
