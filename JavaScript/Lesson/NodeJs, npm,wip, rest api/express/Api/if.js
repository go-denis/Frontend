const handlebars = require('handlebars');

const template = handlebars.compile(
    '{{#if blod}} <b>Hello!</b> {{else}} <p>Hello else!<p/> {{/if}}'
);

console.log(template({ blod: true }));
console.log(template({ blod: false }));