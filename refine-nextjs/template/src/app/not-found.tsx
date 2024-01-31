"use client"

import { Suspense } from 'react'
<%_ if (answers["ui-framework"] === 'antd') { _%>
    import { ErrorComponent } from "@refinedev/antd";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
    import { ErrorComponent } from "@refinedev/mui";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'no') { _%>
    import { ErrorComponent } from "@refinedev/core";
<%_ } _%>
import { Authenticated } from '@refinedev/core'

export default function NotFound() {
    return (
        <Suspense>
            <Authenticated key='not-found'>
                <ErrorComponent />
            </Authenticated>
        </Suspense>
    )
}
