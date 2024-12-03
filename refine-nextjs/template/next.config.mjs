/** @type {import('next').NextConfig} */
const nextConfig = {
    <%_ if (answers["ui-framework"] === 'antd') { _%>
        transpilePackages: ['@refinedev/antd'],
    <%_ } _%>
    output: "standalone"
};

export default nextConfig;
