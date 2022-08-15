import { json, LoaderFunction } from "@remix-run/node";
import { parseTableParams } from "@pankod/refine-core";
export { RemixRouteComponent as default } from "@pankod/refine-remix-router";
<%_ if (answers["auth-provider"] !== 'none') { _%>
import { requireUserId } from "~/session.server";
<%_ } _%>

<%_ if (answers["auth-provider"] !== 'none' && answers["data-provider"] === 'data-provider-custom-json-rest') { _%>
import dataProvider from "@pankod/refine-simple-rest";
    const API_URL = "https://api.fake-rest.refine.dev";
<%_ } else if (answers["auth-provider"] !== 'none' && answers["data-provider"] === 'data-provider-nestjsx-crud') { _%>
import dataProvider from "@pankod/refine-nestjsx-crud";
    const API_URL = "https://api.nestjsx-crud.refine.dev"; 
<%_ } _%>

<%_ if (answers["auth-provider"] !== 'none') { _%>
import { authProvider } from "~/authProvider.ts";
<%_ } _%>

<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== 'no') { _%>
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<%_ } _%>

export const loader: LoaderFunction = async ({ params, request }) => {
    <%_ if (answers["auth-provider"] !== 'none') { _%>

    await requireUserId(request);

    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== 'no') { _%>
    const i18nProps = (await serverSideTranslations(context.locale ?? "en", ["common"]))
    
    //TODO: handle i18n
    return { props: { ...props, ...i18nProps } };
    <%_ } _%>

    const { resource } = params;
    const url = new URL(request.url);

    const { parsedCurrent, parsedPageSize, parsedSorter, parsedFilters } =
    parseTableParams(url.search);
        try {
            const data = await dataProvider(API_URL).getList({
                resource: resource as string,
                filters: parsedFilters,
                pagination: {
                    current: parsedCurrent || 1,
                    pageSize: parsedPageSize || 10,
                },
                sort: parsedSorter,
            });

            return json({ initialData: data });

/*             return {
                props: {
                    initialData: data,
                    
                 <%_ if(answers[`i18n-${answers["ui-framework"]}`] !== 'no') { _%>
                ...i18nProps
                <%_ } _%>
             }, 
         };*/
     } catch (error) {
        return json({});
    //TODO: handle i18n
/*     return {
        props: {
              <%_ if(answers[`i18n-${answers["ui-framework"]}`] !== 'no') { _%>
                ...i18nProps
            <%_ } _%>
         } };
         */
     } 

    <%_ } else if (answers[`i18n-${answers["ui-framework"]}`] !== 'no') { _%>

    //TODO: handle i18n
    return json({});
    /* const i18nProps = (await serverSideTranslations(context.locale ?? "en", ["common"]))
    return {
        props: {
            ...i18nProps,
        },
    }; */
    <%_ } else { _%>
    return json({});
    <%_ } _%>

};
