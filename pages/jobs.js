import view from "../utils/view.js";
import baseUrl from "../utils/baseUrl.js";
import Job from "../components/Job.js";
import Loader from "../components/Loader.js";

export default async function Jobs(path) {
  let jobs = null;
  let hasJobs = false;

  try {
    view.innerHTML = Loader();
    jobs = await getJobs(path);
    hasJobs = jobs.length > 0;
  } catch (error) {
    console.error(error);
  }

  view.innerHTML = `<div>
  ${
    hasJobs
      ? jobs.map((job) => Job({ ...job })).join("")
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
