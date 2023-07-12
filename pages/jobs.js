import view from "../utils/view.js";
import baseUrl from "../utils/baseUrl.js";
import Story from "../components/Story.js";
import checkFavorites from "../utils/checkFavorites.js";
import store from "../store.js";

export default async function Jobs(path) {
  const jobs = await getJobs(path);
  const hasJobs = jobs.length > 0;
  const { favorites } = store.getState();

  view.innerHTML = `<div>
  ${
    hasJobs
      ? jobs
          .map((job) =>
            Story({ ...job, isFavorite: checkFavorites(favorites, job) })
          )
          .join("")
      : "<div class='center-container'><img src='../images/unhappy_crying_icon.png' /> <p>No jobs for now check later </p></div>"
  }
  </div>`;
}

async function getJobs(path) {
  const url = baseUrl + path;
  const response = await fetch(url);
  const jobs = response.json();
  return jobs;
}
