# <%= name %>
<% const refineGitUrl = "https://github.com/refinedev/refine"; -%>
<% const createRefineAppGitUrl = "https://github.com/refinedev/refine/tree/master/packages/create-refine-app"; -%>
<% const refineDocsUrl = "https://refine.dev/docs"; -%>

<div align="center" style="margin: 30px;">
    <a href="https://refine.dev">
    <img alt="refine logo" src="https://refine.ams3.cdn.digitaloceanspaces.com/readme/refine-readme-banner.png">
    </a>
</div>
<br/>

This [Refine](<%- refineGitUrl %>) project was generated with [create refine-app](<%- createRefineAppGitUrl %>).

## Getting Started

A React Framework for building internal tools, admin panels, dashboards & B2B apps with unmatched flexibility ✨

Refine's hooks and components simplifies the development process and eliminates the repetitive tasks by providing industry-standard solutions for crucial aspects of a project, including authentication, access control, routing, networking, state management, and i18n.


## Available Scripts

### Running the development server.

```bash
    <%= pmRun %> dev
```

### Building for production.

```bash
    <%= pmRun %> build
```

### Running the production server.

```bash
    <%= pmRun %> start
```

## Learn More

To learn more about **Refine**, please check out the [Documentation](<%- refineDocsUrl %>)

<% const list = pluginsData.filter((plugin) => plugin.url.length > 0) -%>
<% for (var i = 0; i < list.length; i++ ) { -%>
<% if (list[i].url.length > 0) { -%>
- **<%= list[i].name -%>** [Docs](<%- list[i].url %>)
<% } -%>
<% } %>

## License

MIT
