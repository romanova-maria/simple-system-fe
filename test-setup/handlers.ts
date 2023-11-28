import { http, HttpResponse } from "msw";

import { users } from "./mocks/users";
import { repositories } from "./mocks/repositories";

export const handlers = [
  http.get("https://api.github.com/search/users", () => {
    return HttpResponse.json(users);
  }),
  http.get("https://api.github.com/users/:testName/repos", () => {
    return HttpResponse.json(repositories);
  }),
];
