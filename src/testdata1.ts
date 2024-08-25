const DATA: Libdoc = {
  specversion: 3,
  name: "lib",
  doc: "<p>Documentation for library <code>lib</code>.</p>",
  version: "",
  generated: "2024-05-04T16:51:31+00:00",
  type: "LIBRARY",
  scope: "GLOBAL",
  docFormat: "HTML",
  source: "/Users/jth/Code/new-libdoc/src/lib.py",
  lineno: 1,
  tags: [],
  inits: [],
  keywords: [
    {
      name: "Foo",
      args: [
        {
          name: "a",
          type: {
            name: "dict",
            typedoc: "dictionary",
            nested: [
              {
                name: "str",
                typedoc: "string",
                nested: [],
                union: false,
              },
              {
                name: "int",
                typedoc: "integer",
                nested: [],
                union: false,
              },
            ],
            union: false,
          },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "a: dict[str, int]",
        },
        {
          name: "b",
          type: {
            name: "Union",
            typedoc: null,
            nested: [
              {
                name: "int",
                typedoc: "integer",
                nested: [],
                union: false,
              },
              {
                name: "float",
                typedoc: "float",
                nested: [],
                union: false,
              },
            ],
            union: true,
          },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "b: int | float",
        },
      ],
      returnType: null,
      doc: "",
      shortdoc: "",
      tags: [],
      source: "/Users/jth/Code/new-libdoc/src/lib.py",
      lineno: 1,
    },
  ],
  typedocs: [
    {
      type: "Standard",
      name: "dictionary",
      doc: "<p>Strings must be Python <a href=\"https://docs.python.org/library/stdtypes.html#dict\">dictionary</a> literals. They are converted to actual dictionaries using the <a href=\"https://docs.python.org/library/ast.html#ast.literal_eval\">ast.literal_eval</a> function. They can contain any values <code>ast.literal_eval</code> supports, including dictionaries and other containers.</p>\n<p>If the type has nested types like <code>dict[str, int]</code>, items are converted to those types automatically. This in new in Robot Framework 6.0.</p>\n<p>Examples: <code>{'a': 1, 'b': 2}</code>, <code>{'key': 1, 'nested': {'key': 2}}</code></p>",
      usages: ["Foo"],
      accepts: ["string", "Mapping"],
    },
    {
      type: "Standard",
      name: "float",
      doc: '<p>Conversion is done using Python\'s <a href="https://docs.python.org/library/functions.html#float">float</a> built-in function.</p>\n<p>Starting from RF 4.1, spaces and underscores can be used as visual separators for digit grouping purposes.</p>\n<p>Examples: <code>3.14</code>, <code>2.9979e8</code>, <code>10 000.000 01</code></p>',
      usages: ["Foo"],
      accepts: ["string", "Real"],
    },
    {
      type: "Standard",
      name: "integer",
      doc: '<p>Conversion is done using Python\'s <a href="https://docs.python.org/library/functions.html#int">int</a> built-in function. Floating point numbers are accepted only if they can be represented as integers exactly. For example, <code>1.0</code> is accepted and <code>1.1</code> is not.</p>\n<p>Starting from RF 4.1, it is possible to use hexadecimal, octal and binary numbers by prefixing values with <code>0x</code>, <code>0o</code> and <code>0b</code>, respectively.</p>\n<p>Starting from RF 4.1, spaces and underscores can be used as visual separators for digit grouping purposes.</p>\n<p>Examples: <code>42</code>, <code>-1</code>, <code>0b1010</code>, <code>10 000 000</code>, <code>0xBAD_C0FFEE</code></p>',
      usages: ["Foo"],
      accepts: ["string", "float"],
    },
    {
      type: "Standard",
      name: "string",
      doc: "<p>All arguments are converted to Unicode strings.</p>",
      usages: ["Foo"],
      accepts: ["Any"],
    },
  ],
};

export { DATA };
