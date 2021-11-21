<script>
  import { onMount, onDestroy } from 'svelte'
  import DashboardPlugin from '@uppy/dashboard'
  import Uppy from '@uppy/core'
  import XHRUpload from '@uppy/xhr-upload'

  let container;
  let plugin;

  let uppy = new Uppy();
  let plugins = [];

  const installPlugin = () => {
    const options = {
      id: 'svelte:Dashboard',
      inline: true,
      plugins,
      target: container,
      height: 280,
    }

    uppy.use(XHRUpload, {
        endpoint: '/upload'
    })
    uppy.use(DashboardPlugin, options);
    plugin = uppy.getPlugin(options.id);
  }

  const uninstallPlugin = (uppyInstance= uppy) => {
    uppyInstance.removePlugin(plugin);
  }

  onMount(() => installPlugin())

  $: {
    const options = {
      id: 'svelte:Dashboard',
      inline: true,
      plugins,
      target: container
    }
    uppy.setOptions(options)
  }
</script>
<div bind:this={container} />

<style>
@import '@uppy/core/dist/style.css';
@import '@uppy/dashboard/dist/style.css';
</style>
