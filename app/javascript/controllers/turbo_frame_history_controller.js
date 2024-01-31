// import { navigator } from '@hotwired/turbo-rails'
import { Controller } from "@hotwired/stimulus"
import { useMutation } from 'stimulus-use'

export default class extends Controller {

  connect () {
    useMutation(this, { attributes: true })
  }

  mutate(entries) {
    entries.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
        const src = this.element.getAttribute('src')

        if (src != null) {
          Turbo.navigator.history.push(new URL(src))
        }
      }
    })
  }
}
