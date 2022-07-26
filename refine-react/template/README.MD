# <%= name %>
<% const refineGitUrl = "https://github.com/pankod/refine"; -%>
<% const superplateGitUrl = "https://github.com/pankod/refine"; -%>
<% const refineDocsUrl = "https://refine.dev/docs"; -%>
<% const superplateDocsUrl = "https://pankod.github.io/superplate/docs"; -%>

<div align="center" style="margin: 30px;">
    <a href="https://refine.dev">
    <img src="https://refine.ams3.cdn.digitaloceanspaces.com/refine_logo.png"  align="center" />
    </a>
</div>
<br/>

This [refine](<%- refineGitUrl %>) project was generated with [superplate](<%- superplateGitUrl %>).

## Getting Started

**refine** is a React-based framework for building data-intensive applications in no time ✨

Refine offers lots of out-of-the box functionality for rapid development, without compromising extreme customizability. Use-cases include, but are not limited to admin panels, B2B applications and dashboards.

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

To learn more about **refine**, please check out the [Documentation](<%- refineDocsUrl %>)

<% const list = pluginsData.filter((plugin) => plugin.url.length > 0) -%>
<% for (var i = 0; i < list.length; i++ ) { -%>
<% if (list[i].url.length > 0) { -%>
- **<%= list[i].name -%>** [Docs](<%- list[i].url %>)
<% } -%>
<% } %>

## License

MIT
