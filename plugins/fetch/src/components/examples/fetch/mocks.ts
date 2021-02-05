import nock from "nock";

export const mockResponse = [
    {
        id: 74,
        type: "programming",
        setup: "Why do C# and Java developers keep breaking their keyboards?",
        punchline: "Because they use a strongly typed language.",
    },
];

nock("https://official-joke-api.appspot.com")
    .get("/jokes/programming/random")
    .reply(200, mockResponse);
