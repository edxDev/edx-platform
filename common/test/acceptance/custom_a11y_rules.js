{
  "rules": [{
      "id": "nav-aria-label",
      "selector": "nav",
      "enabled": true,
      "tags": [ "custom" ],
      "all": [
        "nav-aria-label-attr",
        "nav-aria-label-value"
      ],
      "any": [],
      "none": [],
      "metadata": {
        "description": "Ensures <nav> elements have valid aria-label attribute.",
        "help": "<nav> elements MUST have an aria-label, and the aria-label MUST NOT have 'navigation' or 'nav' as part of the value.",
        "helpUrl": "https://openedx.atlassian.net/wiki/display/A11Y/edX+Specific+Accessibility+Tests"
      }
  }],
  "checks": [
    {
      "id": "nav-aria-label-attr",
      "metadata": {
        "impact": "critical",
        "messages": {
          "pass": function anonymous(it) {
            return "all <nav> elements MUST have an aria-label or aria-labelledby attribute";
          },
          "fail": function anonymous(it) {
            return "all <nav> elements MUST have aria-label or aria-labelledby attribute";
          }
        }
      },
      evaluate: function(node, options) {
        return axe.commons.aria.label(node) != null;
      },
    },
    {
      "id": "nav-aria-label-value",
      "metadata": {
        "impact": "critical",
        "messages": {
          "pass": function anonymous(it) {
            return "aria-label values on <nav> elements MUST NOT have “navigation” or “nav” as part of their value";
          },
          "fail": function anonymous(it) {
            return "aria-label values on <nav> elements MUST NOT have “navigation” or “nav” as part of their value";
          }
        }
      },
      evaluate: function(node, options) {
        words = axe.commons.aria.label(node).split();
        return words.indexOf('nav') < 0 && words.indexOf('navigation') < 0
      },
    }
  ]
}
