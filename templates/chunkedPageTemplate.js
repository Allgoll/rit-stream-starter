function headTemplate() {
  return`
  <html>
  <head>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js" type="application/javascript"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">
  </head>
  <body>
    <div class="ui bottom attached menu inverted">
      <div class="ui item">
        With Stream
      </div>
    </div>
  `.trim()
}

function bodyTemplate() {
  return`
    <div class="ui center aligned container">
      <div class="ui segment">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium alias aliquam aperiam aspernatur atque consequatur, debitis dolore dolorem doloremque ea excepturi explicabo, fuga fugiat inventore ipsa ipsam libero maiores, nemo nisi nulla numquam odio optio porro possimus quae quaerat repellat repudiandae rerum sint temporibus tenetur ut vel voluptatem!</p>
      </div>
      <div class="ui segment">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque consequatur deserunt dicta dolores doloribus dolorum est excepturi explicabo in incidunt ipsam nam natus, nesciunt odio, provident quas, qui quidem quo sunt tempora ullam voluptatum! A deserunt doloremque ea, eligendi iste non nostrum nulla porro quam temporibus! Magnam, optio temporibus?</p>
      </div>
      <div class="ui segment">
        <div class="ui equal width grid">
          <div class="ui row">
            <div class="ui column">
              <img class="ui medium image" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
            </div>
            <div class="ui column">
              <img class="ui medium image" src="https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
            </div>
            <div class="ui column">
              <img class="ui medium image" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`.trim()
}

module.exports = {
  headTemplate,
  bodyTemplate,
}
