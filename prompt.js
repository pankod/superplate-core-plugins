module.exports = {
  prompts: [
    {
      name: "ui",
      message: "UI framework:",
      type: "select",
      pageSize: 3,
      choices: [
        { message: "None", name: "none" },
        { message: "Tailwind CSS", name: "tailwind" },
      ],
      default: "none",
    },
    {
      name: "css_features",
      message: "CSS Solution:",
      type: "select",
      pageSize: 2,
      choices: [{ message: "SASS/SCSS", name: "sass" }],
      default: "none",
    },
    {
      name: "features",
      message: "Features:",
      type: "multiselect",
      pageSize: 2,
      choices: [
        { message: "Axios", name: "axios" },
        { message: "Prettier", name: "prettier" },
        { message: "Jest", name: "jest" },
      ],
      default: "none",
    },
    {
      name: "docker",
      message: "Docker integration:",
      type: "select",
      pageSize: 3,
      choices: [
        { message: "None", name: "none" },
        { message: "Dockerfile", name: "Docker" },
      ],
      default: "none",
    },
    {
      name: "CI",
      message: "Continuous integration:",
      type: "select",
      choices: [
        { message: "None", name: "none" },
        { message: "GitHub Actions", name: "github-actions" },
        { message: "Travis", name: "travis" },
      ],
      default: "none",
    },
    {
      name: "state-management",
      message: "State Management:",
      type: "select",
      pageSize: 10,
      choices: [
        { message: "None", name: "none" },
        { message: "Redux", name: "redux" },
      ],
      default: "none",
    },
  ],
};
