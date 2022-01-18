<script lang="ts">
  import { _ } from "svelte-i18n";
  import { helpModal } from "./../../shared/stores";

  function closeHelp() {
    helpModal.set(false);
  }
</script>

<div class="modal {$helpModal === true ? 'is-active' : ''}">
  <div class="modal-background" on:click={closeHelp} />
  <div class="modal-card">
    <section class="hero is-black">
      <div class="hero-body">
        <p class="title">
          {$_("help.title")}
        </p>
        <p class="subtitle">{$_("help.subtitle")}</p>
      </div>
    </section>
    <section class="modal-card-body">
      <section class="section">
        <h1 class="title">Adding a Column</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading. A simple container to divide
          your page into <strong>sections</strong>, like the one you're
          currently reading. A simple container to divide your page into
          <strong>sections</strong>, like the one you're currently reading. A
          simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading.
        </h2>
      </section>

      <section class="section">
        <h1 class="title">Adding a Column</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading. A simple container to divide
          your page into <strong>sections</strong>, like the one you're
          currently reading. A simple container to divide your page into
          <strong>sections</strong>, like the one you're currently reading. A
          simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading. A simple container to divide
          your page into <strong>sections</strong>, like the one you're
          currently reading.
        </h2>
      </section>

      <section class="section">
        <h1 class="title">Adding a Column</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading. A simple container to divide
          your page into <strong>sections</strong>, like the one you're
          currently reading. A simple container to divide your page into
          <strong>sections</strong>, like the one you're currently reading.
        </h2>
      </section>

      <section class="section">
        <h1 class="title">Adding a Column</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading. A simple container to divide
          your page into <strong>sections</strong>, like the one you're
          currently reading. A simple container to divide your page into
          <strong>sections</strong>, like the one you're currently reading. A
          simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading.
        </h2>
      </section>

      <section class="section">
        <h1 class="title">{$_("help.contact.title")}</h1>
        <h2 class="subtitle">
          {$_("help.contact.text")}
        </h2>
        <div class="tags has-addons">
          <a
            class="tag is-large is-primary"
            href="mailto:laurin.kruegel@geutebrueck.com"
          >
            <ion-icon class="icon" name="mail-outline" />
          </a>
          <div class="tag is-large is-black">
            laurin.kruegel@geutebrueck.com
          </div>
        </div>

        <div class="tags has-addons">
          <a
            class="tag is-large is-primary"
            href="mailto:kevin.lieder@geutebrueck.com"
          >
            <ion-icon class="icon" name="mail-outline" />
          </a>
          <div class="tag is-large is-black">kevin.lieder@geutebrueck.com</div>
        </div>
      </section>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-rounded is-primary" on:click={closeHelp}>
        <ion-icon class="icon" name="close-outline" />
        <p>{$_("help.close")}</p>
      </button>
    </footer>
  </div>
</div>
