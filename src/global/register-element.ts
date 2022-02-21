import { App } from 'vue'
import 'element-plus/dist/index.css'

import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElRate
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElRate
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
