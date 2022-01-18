<script lang="ts">
  import Wraper from "./components/layout/Wrapper.svelte";
  import Navbar from "./components/layout/Navbar.svelte";
  import Help from "./components/overlays/Help.svelte";
  import CCTVTable from "./components/data/CCTVTable.svelte";

  import "./shared/i18n";
</script>

<Navbar />
<Wraper>
  <Help />
  <CCTVTable />
</Wraper>
