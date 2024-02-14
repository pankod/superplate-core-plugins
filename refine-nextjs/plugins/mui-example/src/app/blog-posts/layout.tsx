import React from "react";
import { ThemedLayout } from "@components/themed-layout";
<%_ if (_app.isNextAuthCheck) { _%>
    import authOptions from "@app/api/auth/[...nextauth]/options";
    import { getServerSession } from 'next-auth/next'
    import { redirect } from 'next/navigation' 
<%_ } _%>
<%_ if (_app.isAuthProviderCheck) { _%>
    import { authProviderServer } from '@providers/auth-provider'
    import { redirect } from 'next/navigation' 
<%_ } _%>

export default async function Layout({ children }: React.PropsWithChildren) {
    <%_ if (_app.isNextAuthCheck || _app.isAuthProviderCheck) { _%>
    const data = await getData()

    <%_ if (_app.isAuthProviderCheck) { _%>
    if (!data.authenticated) {
        return redirect(data?.redirectTo || '/login')
    }
    <%_ } _%>

    <%_ if (_app.isNextAuthCheck) { _%>
    if (!data.session?.user) {
        return redirect('/login')
    }
    <%_ } _%>

    <%_ } _%>

    return <ThemedLayout>{children}</ThemedLayout>;
}


<%_ if (_app.isNextAuthCheck) { _%>
    async function getData() {
        const session = await getServerSession(authOptions)
        return {
            session,
        }
    }   
<%_ } _%>

<%_ if (_app.isAuthProviderCheck) { _%>
    async function getData() {
        const { authenticated, redirectTo } = await authProviderServer.check()
      
        return {
            authenticated,
            redirectTo,
        }
    }  
<%_ } _%>