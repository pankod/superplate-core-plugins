"use client";

import { Suspense } from 'react'

<%_ if (_app.hasRoutes === true) { _%>
import { NavigateToResource } from "@refinedev/nextjs-router";
import { Authenticated } from "@refinedev/core";

export default function IndexPage() {
  return (
    <Suspense>
      <Authenticated key="home-page">
          <NavigateToResource />
      </Authenticated>
    </Suspense>
  )
}
<%_ } _%>

<%_ if (_app.hasRoutes === false) { _%>
import { WelcomePage } from '@refinedev/core'

export default function IndexPage() {
  return (
    <Suspense>
      <WelcomePage />
    </Suspense>
  )
}
<%_ } _%>