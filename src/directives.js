// Make Format Custom Directive
Vue.directive("format", {
  bind: function(el, binding) {
    el.style.fontSize = binding.value + "px";
    //Bold Modifier
    if (binding.modifiers.bold) {
      el.style.fontWeight = "bold";
    }
    // Orange Modifier
    if (binding.modifiers.orange) {
      el.style.color = "orange";
    }
  }
});
