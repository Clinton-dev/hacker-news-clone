export default function Job(job) {
  // Display the first 10 jobs then user should press a button to show more jobs

  const { title, domain, url, time_ago } = job;

  return `<div>
            <div>
                <a href="${url}">${title}</a>
                <span class="gray">(${domain})</span>
            </div>
        <div class="job-detail">
            <div class="gray">
                ${time_ago}
            </div>
        </div>
</div>`;
}
