<template lang="pug">
  div
    header.header
      g-link(to="/") {{ $static.metadata.siteName }}
      nav
        g-link(to="/") Home
    slot
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
