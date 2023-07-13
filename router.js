import Stories from "./pages/stories.js";
import Item from "./pages/item.js";
import Favorites from "./pages/favorites.js";
import Show from "./pages/show.js";
import Jobs from "./pages/jobs.js";

const router = new Navigo(null, true, "#");

export default class RouteHandler {
  constructor() {
    this.createRoutes();
  }

  createRoutes() {
    const routes = [
      { path: "/", page: Stories },
      { path: "/new", page: Stories },
      { path: "/ask", page: Stories },
      { path: "/item", page: Item },
      { path: "/show", page: Show },
      { path: "/favorites", page: Favorites },
      { path: "/jobs", page: Jobs },
    ];

    routes.forEach(({ path, page }) => {
      router
        .on(path, () => {
          page(path);
        })
        .resolve();
    });
  }
}
