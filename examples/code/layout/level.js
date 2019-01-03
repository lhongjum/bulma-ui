let code = {}
code.basic = {}
code.basic.normal = `
<template>
  <vb-level>
    <vb-level-item>
      <vb-title type="subtitle" size="5">
        <strong>123</strong> posts
      </vb-title>
    </vb-level-item>

    <vb-level-item>
      <vb-form-item addons>
        <vb-input placeholder="Find a post"></vb-input>
        <vb-button>Search</vb-button>
      </vb-form-item>
    </vb-level-item>
  </vb-level>
</template>
`
code.basic.basic = `
<template>
  <vb-level>
    <template slot="left">
      <vb-level-item>
        <vb-title type="subtitle" size="5">
          <strong>123</strong> posts
        </vb-title>
      </vb-level-item>

      <vb-level-item>
        <vb-form-item addons>
          <vb-input placeholder="Find a post"></vb-input>
          <vb-button>Search</vb-button>
        </vb-form-item>
      </vb-level-item>
    </template>

    <template slot="right">
      <vb-level-item>
        <strong>All</strong>
      </vb-level-item>
      <vb-level-item>
        <a>Published</a>
      </vb-level-item>
      <vb-level-item>
        <a>Drafts</a>
      </vb-level-item>
      <vb-level-item>
        <a>Deleted</a>
      </vb-level-item>
      <vb-level-item>
        <vb-button color="success">New</vb-button>
      </vb-level-item>
    </template>
  </vb-level>
</template>
`
code.alignment = `
<template>
  <vb-level>
    <vb-level-item>
      <div>
        <p class="heading">Tweets</p>
        <p class="title">3,456</p>
      </div>
    </vb-level-item>

    <vb-level-item>
      <div>
        <p class="heading">Following</p>
        <p class="title">123</p>
      </div>
    </vb-level-item>

    <vb-level-item>
      <div>
        <p class="heading">Followers</p>
        <p class="title">456K</p>
      </div>
    </vb-level-item>

    <vb-level-item>
      <div>
        <p class="heading">Likes</p>
        <p class="title">789</p>
      </div>
    </vb-level-item>
  </vb-level>


  <vb-level align="centered">
    <vb-level-item>
      <div>
        <p class="heading">Tweets</p>
        <p class="title">3,456</p>
      </div>
    </vb-level-item>

    <vb-level-item>
      <div>
        <p class="heading">Following</p>
        <p class="title">123</p>
      </div>
    </vb-level-item>

    <vb-level-item>
      <div>
        <p class="heading">Followers</p>
        <p class="title">456K</p>
      </div>
    </vb-level-item>

    <vb-level-item>
      <div>
        <p class="heading">Likes</p>
        <p class="title">789</p>
      </div>
    </vb-level-item>
  </vb-level>


  <vb-level>
    <vb-level-item align="right">
      <div>
        <p class="heading">Tweets</p>
        <p class="title">3,456</p>
      </div>
    </vb-level-item>

    <vb-level-item align="right">
      <div>
        <p class="heading">Following</p>
        <p class="title">123</p>
      </div>
    </vb-level-item>

    <vb-level-item align="right">
      <div>
        <p class="heading">Followers</p>
        <p class="title">456K</p>
      </div>
    </vb-level-item>

    <vb-level-item align="right">
      <div>
        <p class="heading">Likes</p>
        <p class="title">789</p>
      </div>
    </vb-level-item>
  </vb-level>
</template>
`
code.mobile = `
<template>
  <vb-level mobile align="centered">
    <vb-level-item>
      <div>
        <p class="heading">Tweets</p>
        <p class="title">3,456</p>
      </div>
    </vb-level-item>

    <vb-level-item>
      <div>
        <p class="heading">Following</p>
        <p class="title">123</p>
      </div>
    </vb-level-item>

    <vb-level-item>
      <div>
        <p class="heading">Followers</p>
        <p class="title">456K</p>
      </div>
    </vb-level-item>

    <vb-level-item>
      <div>
        <p class="heading">Likes</p>
        <p class="title">789</p>
      </div>
    </vb-level-item>
  </vb-level>
</template>
`
export default code