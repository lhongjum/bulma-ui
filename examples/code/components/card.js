let code = {}

code.imageCard = `\
<vb-card>
  <vb-image slot="image" src="https://bulma.io/images/placeholders/1280x960.png" size="4by3"></vb-image>

  <vb-media-object>
    <vb-image slot="left" src="https://bulma.io/images/placeholders/96x96.png" size="48x48"></vb-image>
    <vb-content>
      <vb-title size="4">John Smith</vb-title>
      <vb-title type="subtitle" size="6">@johnsmith</vb-title>
    </vb-content>
  </vb-media-object>

  <vb-content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Phasellus nec iaculis mauris.
    <a>@bulmaio</a>.
    <a href="#">#css</a>
    <a href="#">#responsive</a>
    <br>
    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
  </vb-content>
</vb-card>
`

code.card = {}

code.card.oneKind = `\
<vb-card>
  <span slot="title">Component</span>
  <vb-icon slot="icon" name="fa fa-angle-down"></vb-icon>

  <vb-content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Phasellus nec iaculis mauris.
    <a>@bulmaio</a>.
    <a href="#">#css</a>
    <a href="#">#responsive</a>
    <br>
    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
  </vb-content>

  <template slot="footer">
    <a class="card-footer-item">Save</a>
    <a class="card-footer-item">Edit</a>
    <a class="card-footer-item">Delete</a>
  </template>
</vb-card>
`

code.card.anotherKind = `\
<vb-card title="Component" icon="fa fa-angle-down" title-centered>
  <vb-content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Phasellus nec iaculis mauris.
    <a>@bulmaio</a>.
    <a href="#">#css</a>
    <a href="#">#responsive</a>
    <br>
    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
  </vb-content>

  <template slot="footer">
    <a class="card-footer-item">Save</a>
    <a class="card-footer-item">Edit</a>
    <a class="card-footer-item">Delete</a>
  </template>
</vb-card>
`

code.card.hideHeader = `\
<vb-card>
  <vb-content>
    <vb-title>“There are two hard things in computer science: cache invalidation, naming things, and off-by-one
      errors.”</vb-title>
    <vb-title type="subtitle">Jeff Atwood</vb-title>
  </vb-content>

  <p slot="footer" class="card-footer-item">View on
    <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
  </p>
  <p slot="footer" class="card-footer-item">Share on
    <a href="#">Facebook</a>
  </p>
</vb-card>
`

export default code
