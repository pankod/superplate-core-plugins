"use client";

import { Suspense } from 'react'

<%_ if (_app.hasRoutes === true) { _%>
import { NavigateToResource } from "@refinedev/nextjs-router/app";

export default function IndexPage() {
  return (
    <Suspense>
      <NavigateToResource />
    </Suspense>
  )
}
<%_ } _%>

<%_ if (_app.hasRoutes === false) { _%>
import { WelcomePage } from '@refinedev/core'

export default function IndexPage() {
  return (
    <Suspense>
      <NavigateToResource />
    </Suspense>
  )
}
<%_ } _%>