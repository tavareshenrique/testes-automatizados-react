import { runSaga } from "redux-saga";
import api from "../../services/api";
import MockAdapter from "axios-mock-adapter";

import { getRepositories } from "../../store/sagas/repositories";
import { Creators as RepositoriesActions } from "../../store/ducks/repositories";

const apiMock = new MockAdapter(api);

describe("Repositories Saga", () => {
  it("should be able to fetch repositories", async () => {
    const dispatched = [];
    const repo = ["Repo1", "Repo2"];

    apiMock.onGet("users/tavareshenrique/repos").reply(200, repo);

    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        }
      },
      getRepositories
    ).toPromise();

    expect(dispatched).toContainEqual(RepositoriesActions.getSuccess(repo));
  });
});
