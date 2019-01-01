let code = {}
code.columnsThree = `
<template>
  <div>
    <vb-tile>
      <vb-tile>
        <vb-box>
          <vb-title>Hello World</vb-title>
          <vb-title type="subtitle">What is up?</vb-title>
        </vb-box>
      </vb-tile>
      <vb-tile>
        <vb-box>
          <vb-title>Foo</vb-title>
          <vb-title type="subtitle">Bar</vb-title>
        </vb-box>
      </vb-tile>
      <vb-tile>
        <vb-box>
          <vb-title>Third column</vb-title>
          <vb-title type="subtitle">With some content</vb-title>
          <vb-content>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
              vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </vb-content>
        </vb-box>
      </vb-tile>
    </vb-tile>

    <vb-tile>
      <vb-tile vertical size="8">
        <vb-tile>
          <vb-tile vertical>
            <vb-tile>
              <vb-box>
                <vb-title>Vertical tiles</vb-title>
                <vb-title type="subtitle">Top box</vb-title>
              </vb-box>
            </vb-tile>
            <vb-tile>
              <vb-box>
                <vb-title>Vertical tiles</vb-title>
                <vb-title type="subtitle">Bottom box</vb-title>
              </vb-box>
            </vb-tile>
          </vb-tile>

          <vb-tile>
            <vb-box>
              <vb-content>
                <vb-title>Middle tile</vb-title>
                <vb-title type="subtitle">With an image</vb-title>
                <vb-image size="4by3" src="https://bulma.io/images/placeholders/640x480.png"></vb-image>
              </vb-content>
            </vb-box>
          </vb-tile>
        </vb-tile>

        <vb-tile>
          <vb-box>
            <vb-content>
              <vb-title>Wide tile</vb-title>
              <vb-title type="subtitle">Aligned with the right tile</vb-title>
              <vb-content>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
                  tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </vb-content>
            </vb-content>
          </vb-box>
        </vb-tile>
      </vb-tile>

      <vb-tile>
        <vb-box>
          <vb-content>
            <vb-title>Tall tile</vb-title>
            <vb-title type="subtitle">With even more content</vb-title>
            <vb-content>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at
                pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi
                maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
              <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque
                interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet
                erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida
                diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
              <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor
                consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a
                nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
            </vb-content>
          </vb-content>
        </vb-box>
      </vb-tile>
    </vb-tile>

    <vb-tile>
      <vb-tile size="4">
        <vb-box>
          <vb-title>Side column</vb-title>
          <vb-title type="subtitle">With some content</vb-title>
          <vb-content>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
              vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </vb-content>
        </vb-box>
      </vb-tile>

      <vb-tile size="8">
        <vb-box>
          <vb-title>Main column</vb-title>
          <vb-title type="subtitle">With some content</vb-title>
          <vb-content>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
              vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </vb-content>
        </vb-box>
      </vb-tile>
    </vb-tile>
  </div>
</template>
`
export default code