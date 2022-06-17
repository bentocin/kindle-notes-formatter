export const TEMPLATES = {
  markdown: `
# Notes

{{#sections}}
## {{sectionTitle}}

{{#highlights}}
- {{highlight}} (Page: {{page}})

{{/highlights}}
{{/sections}}
`,

  // Roam Research
  roam: `
- Title:: {{title}}
- Authors:: {{authors}}

- **Highlights and Notes**
  {{#sections}}
  - ## {{sectionTitle}}
    {{#highlights}}
    - {{highlight}}
      - **{{type}}** {{#page}}page: {{page}}{{/page}} {{#location}}location: {{location}}{{/location}}
    {{/highlights}}
  {{/sections}}
`,
};
