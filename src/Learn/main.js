import instance from './VueInstance/create_vue_instance'
import template from './TemplateGrammar/template_grammar'
import directives from './TemplateGrammar/directives'
import calculatingPropertiesListener from './TemplateGrammar/calculating_properties_listener'
import htmlClassBind from './ClassStyleBind/html_class_bind'
import conditionalRendering from './ConditionalRendering/conditional_rendering'

export default {
  instance,
  template,
  directives,
  calculatingPropertiesListener,
  htmlClassBind,
  conditionalRendering
}
