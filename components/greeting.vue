<template>

  <!-- Greeting section -->
  <section class="greeting">
    <div class="message wrapper">
    </div>
  </section>
</template>

<style>
  .greeting {
    background: #fff;
    border: 1px solid #489CF1;
    margin: 2em 0;
  }

  .message {
    overflow: hidden;
    padding: 3em 0;
  }

  .message p {
    margin-bottom: 2em;
  }

  code {
    border-radius: 3px;
    background: #E1E7EA;
    padding: 3px 5px;
  }

  @media all and (min-width: 900px) {
    .message p {
      float: left;
      max-width: 70%;
      margin-bottom: 0;
    }
  }


  .message .cta {
    font-size: inherit;
    background: #489CF1;
    border: 0;
    border-radius: 3px;
    color: #fff;
    padding: 1em 2em;
    text-decoration: none;
  }

  @media all and (min-width: 900px) {
    .message .cta {
      float: right;
      max-width: 20%;
    }
  }
</style>
