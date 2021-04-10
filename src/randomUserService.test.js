import { fetchJson } from "./api";
import { getRandomUser } from "./randomUserService.js";

jest.mock("./api");

describe("random user service", () => {
  it("requests data from the random user API", async () => {
    fetchJson.mockResolvedValue({ results: [] });
    
    await getRandomUser();

    expect(fetchJson).toHaveBeenCalledWith("https://api.randomuser.me");
  });
  
  it("extracts the user data from the response body", async () => {
    const user = { name: { first: "Jane", last: "Doe" } };
    fetchJson.mockResolvedValue({ results: [user] });
    
    const actual = await getRandomUser();

    return expect(actual).toEqual(user);
  });
});
