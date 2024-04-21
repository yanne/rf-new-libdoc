type Libdoc = {
  specversion: number;
  name: string;
  doc: string;
  version: string;
  generated: string;
  type: string;
  scope: string;
  docFormat: string;
  source: string;
  lineno: number;
  tags: Array<any>;
  inits: Array<any>;
  keywords: Array<any>;
  typedocs: Array<any>;
};

const DATA: Libdoc = {
  specversion: 3,
  name: "libdoc_data",
  doc: '<p>Library for <code>libdoc.html</code> testing.</p>\n<p><b>URL:</b>    <a href="http://robotframework.org">http://robotframework.org</a></p>\n<p><i>Image:</i>  <img src="https://github.com/robotframework/visual-identity/raw/master/logo/robot-framework.svg" title="https://github.com/robotframework/visual-identity/raw/master/logo/robot-framework.svg"></p>\n<p><i><b>Cross linking</b></i>: <a href="#Links" class="name">Links</a>, <a href="#One%20Paragraph" class="name">One Paragraph</a>, <a href="#Hr" class="name">HR</a>, <a href="#Hr" class="name">hr</a>. <a href="#Section" class="name">section</a>, <a href="#N%C3%B6n-%C3%84SC%C3%8F%C3%8F" class="name">N\u00f6n-\u00c4SC\u00cf\u00cf</a>, <a href="#Special%20%C2%BD!%22%23%C2%A4%25%26%2F()%3D%3F%3C%7C%3E%2B-_.!~*\'()%20chars" class="name">Special \u00bd!"#\u00a4%&amp;/()=?&lt;|&gt;+-_.!~*\'() chars</a></p>\n<hr>\n<h2 id="Section">Section</h2>\n<h3 id="Subsection with \u00c4\u00e4kk\u00f6set">Subsection with \u00c4\u00e4kk\u00f6set</h3>\n<table border="1">\n<tr>\n<td><b>My</b></td>\n<td><b>Table</b></td>\n</tr>\n<tr>\n<td>1</td>\n<td>2</td>\n</tr>\n<tr>\n<td>foo</td>\n<td></td>\n</tr>\n</table>\n<p>regular line</p>\n<pre>\nblock formatted\n   content            and whitespaces\n</pre>',
  version: "",
  generated: "2024-04-12T18:40:57+00:00",
  type: "LIBRARY",
  scope: "GLOBAL",
  docFormat: "HTML",
  source:
    "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
  lineno: 1,
  tags: [
    "<|>+-_.!~*'()",
    "another tag",
    "N\u00f6n",
    "tag",
    "t\u00e4g\u00df",
    '\u00bd!"#\u00a4%&/()=?',
    "\u00e4sc\u00ef\u00ef",
  ],
  inits: [],
  keywords: [
    {
      name: "Hr",
      args: [],
      returnType: null,
      doc: "<hr>\n<hr>\n<hr>",
      shortdoc: "--- ---",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 125,
    },
    {
      name: "Images",
      args: [],
      returnType: null,
      doc: '<p><img src="https://github.com/robotframework/visual-identity/raw/master/logo/robot-framework.svg" title="https://github.com/robotframework/visual-identity/raw/master/logo/robot-framework.svg"></p>\n<p>Images <img src="https://github.com/robotframework/visual-identity/raw/master/logo/robot-framework.svg" title="title"> inside paragraphs. This one is also a link: <a href="https://github.com/robotframework/visual-identity/raw/master/logo/robot-framework.svg"><img src="https://github.com/robotframework/visual-identity/raw/master/logo/robot-framework.svg" title="https://github.com/robotframework/visual-identity/raw/master/logo/robot-framework.svg"></a></p>',
      shortdoc:
        "https://github.com/robotframework/visual-identity/raw/master/logo/robot-framework.svg",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 144,
    },
    {
      name: "Int 1",
      args: [
        {
          name: "i",
          type: { name: "int", typedoc: "integer", nested: [], union: false },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "i: int",
        },
      ],
      returnType: null,
      doc: "",
      shortdoc: "",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 70,
    },
    {
      name: "Int 10",
      args: [
        {
          name: "i",
          type: { name: "int", typedoc: "integer", nested: [], union: false },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "i: int",
        },
      ],
      returnType: null,
      doc: "",
      shortdoc: "",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 70,
    },
    {
      name: "Int 2",
      args: [
        {
          name: "i",
          type: { name: "int", typedoc: "integer", nested: [], union: false },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "i: int",
        },
      ],
      returnType: null,
      doc: "",
      shortdoc: "",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 70,
    },
    {
      name: "Int 3",
      args: [
        {
          name: "i",
          type: { name: "int", typedoc: "integer", nested: [], union: false },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "i: int",
        },
      ],
      returnType: null,
      doc: "",
      shortdoc: "",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 70,
    },
    {
      name: "Int 4",
      args: [
        {
          name: "i",
          type: { name: "int", typedoc: "integer", nested: [], union: false },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "i: int",
        },
      ],
      returnType: null,
      doc: "",
      shortdoc: "",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 70,
    },
    {
      name: "Int 5",
      args: [
        {
          name: "i",
          type: { name: "int", typedoc: "integer", nested: [], union: false },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "i: int",
        },
      ],
      returnType: null,
      doc: "",
      shortdoc: "",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 70,
    },
    {
      name: "Int 6",
      args: [
        {
          name: "i",
          type: { name: "int", typedoc: "integer", nested: [], union: false },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "i: int",
        },
      ],
      returnType: null,
      doc: "",
      shortdoc: "",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 70,
    },
    {
      name: "Int 7",
      args: [
        {
          name: "i",
          type: { name: "int", typedoc: "integer", nested: [], union: false },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "i: int",
        },
      ],
      returnType: null,
      doc: "",
      shortdoc: "",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 70,
    },
    {
      name: "Int 8",
      args: [
        {
          name: "i",
          type: { name: "int", typedoc: "integer", nested: [], union: false },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "i: int",
        },
      ],
      returnType: null,
      doc: "",
      shortdoc: "",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 70,
    },
    {
      name: "Int 9",
      args: [
        {
          name: "i",
          type: { name: "int", typedoc: "integer", nested: [], union: false },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "i: int",
        },
      ],
      returnType: null,
      doc: "",
      shortdoc: "",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 70,
    },
    {
      name: "Links",
      args: [],
      returnType: null,
      doc: '<ul>\n<li><a href="#Lists" class="name">Lists</a>, <a href="#One%20Paragraph" class="name">One Paragraph</a>, <a href="#Hr" class="name">HR</a>, <a href="#Hr" class="name">hr</a>, <a href="#N%C3%B6n-%C3%84SC%C3%8F%C3%8F" class="name">n\u00f6n-\u00e4sc\u00ef\u00ef</a>, <a href="#Special%20%C2%BD!%22%23%C2%A4%25%26%2F()%3D%3F%3C%7C%3E%2B-_.!~*\'()%20chars" class="name">Special \u00bd!"#\u00a4%&amp;/()=?&lt;|&gt;+-_.!~*\'() chars</a></li>\n<li><a href="#Section" class="name">Section</a>, <a href="#Subsection%20with%20%C3%84%C3%A4kk%C3%B6set" class="name">Sub section with \u00e4\u00e4kk\u00f6set</a></li>\n<li><span class="name">Shortcuts</span>, <a href="#Keywords" class="name">keywords</a>, <a href="#Introduction" class="name">LIBRARY intro duct ion</a></li>\n<li><a href="http://robotframework.org">http://robotframework.org</a></li>\n<li><a href="http://robotframework.org">Robot Framework</a></li>\n</ul>',
      shortdoc:
        "- `Lists`, `One Paragraph`, `HR`, `hr`, `n\u00f6n-\u00e4sc\u00ef\u00ef`, `Special \u00bd!\"#\u00a4%&/()=?<|>+-_.!~*'() chars` - `Section`, `Sub section with \u00e4\u00e4kk\u00f6set` - `Shortcuts`, `keywords`, `LIBRARY intro duct ion` - http://robotframework.org - [http://robotframework.org|Robot Framework]",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 134,
    },
    {
      name: "Lists",
      args: [
        {
          name: "list",
          type: null,
          defaultValue: null,
          kind: "VAR_POSITIONAL",
          required: false,
          repr: "*list",
        },
      ],
      returnType: null,
      doc: "<ul>\n<li>first</li>\n<li>second</li>\n</ul>\n<ul>\n<li>another</li>\n</ul>",
      shortdoc: "- first - second",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 116,
    },
    {
      name: "Multiple Paragraphs",
      args: [
        {
          name: "one",
          type: null,
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "one",
        },
        {
          name: "two",
          type: null,
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "two",
        },
        {
          name: "three",
          type: null,
          defaultValue: "default",
          kind: "POSITIONAL_OR_NAMED",
          required: false,
          repr: "three=default",
        },
      ],
      returnType: null,
      doc: '<p>Hello, world!</p>\n<p>Second paragraph <b>has formatting</b> and <a href="http://example.com">link</a>. It also refers to argument <code>one</code> using <code>code</code> style. This is still part of second paragraph.</p>\n<p>Third paragraph is <i>short</i>.</p>',
      shortdoc: "Hello, world!",
      tags: ["another tag", "tag"],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 81,
    },
    {
      name: "N\u00f6n-\u00c4SC\u00cf\u00cf",
      args: [
        {
          name: "\u00e4rg",
          type: null,
          defaultValue: "\u00f6\u00f6\u00f6\u00f6\u00f6",
          kind: "POSITIONAL_OR_NAMED",
          required: false,
          repr: "\u00e4rg=\u00f6\u00f6\u00f6\u00f6\u00f6",
        },
      ],
      returnType: null,
      doc: "<p>\u00c4ls\u00f6 d\u00f6c h\u00e4s n\u00f6n-\u00e4sc\u00ef\u00ef st\u00fcff. \u00cfncl\u00fcd\u00efng \u2603.</p>",
      shortdoc:
        "\u00c4ls\u00f6 d\u00f6c h\u00e4s n\u00f6n-\u00e4sc\u00ef\u00ef st\u00fcff. \u00cfncl\u00fcd\u00efng \u2603.",
      tags: ["N\u00f6n", "t\u00e4g\u00df", "\u00e4sc\u00ef\u00ef"],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 156,
    },
    {
      name: "One Paragraph",
      args: [
        {
          name: "one",
          type: null,
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "one",
        },
      ],
      returnType: null,
      doc: "<p>Hello, world!</p>",
      shortdoc: "Hello, world!",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 77,
    },
    {
      name: "Preformatted",
      args: [],
      returnType: null,
      doc: "<pre>\nFirst block\nhas two lines\n</pre>\n<pre>\nSecond has only one\n</pre>",
      shortdoc: "| First block | has two lines",
      tags: ["TAG"],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 105,
    },
    {
      name: "Special \u00bd!\"#\u00a4%&/()=?<|>+-_.!~*'() chars",
      args: [],
      returnType: null,
      doc: "<p>Also doc has \u00bd!\"#\u00a4%&amp;/()=?&lt;|&gt;+-_.!~*'().</p>",
      shortdoc: "Also doc has \u00bd!\"#\u00a4%&/()=?<|>+-_.!~*'().",
      tags: ["<|>+-_.!~*'()", '\u00bd!"#\u00a4%&/()=?'],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 162,
    },
    {
      name: "Tables Alone",
      args: [],
      returnType: null,
      doc: '<table border="1">\n<tr>\n<td><b>a</b></td>\n<td><b>b</b></td>\n<td><b>c</b></td>\n</tr>\n<tr>\n<td>1st</td>\n<td>table</td>\n<td>here</td>\n</tr>\n</table>\n<table border="1">\n<tr>\n<td>2nd</td>\n<td>table</td>\n<td>has</td>\n<td>only</td>\n<td>one</td>\n<td>row</td>\n</tr>\n</table>',
      shortdoc: "| *a* | *b*   | *c*  | | 1st | table | here |",
      tags: ["another tag"],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 94,
    },
    {
      name: "Type Aliases",
      args: [
        {
          name: "a",
          type: { name: "date", typedoc: "date", nested: [], union: false },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "a: date",
        },
        {
          name: "b",
          type: { name: "date2", typedoc: "date", nested: [], union: false },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "b: date2",
        },
      ],
      returnType: null,
      doc: "",
      shortdoc: "",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 66,
    },
    {
      name: "Type Hints",
      args: [
        {
          name: "a",
          type: { name: "int", typedoc: "integer", nested: [], union: false },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "a: int",
        },
        {
          name: "b",
          type: {
            name: "Direction",
            typedoc: "Direction",
            nested: [],
            union: false,
          },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "b: Direction",
        },
        {
          name: "c",
          type: { name: "Point", typedoc: "Point", nested: [], union: false },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "c: Point",
        },
        {
          name: "d",
          type: { name: "date", typedoc: "date", nested: [], union: false },
          defaultValue: null,
          kind: "POSITIONAL_OR_NAMED",
          required: true,
          repr: "d: date",
        },
        {
          name: "e",
          type: { name: "bool", typedoc: "boolean", nested: [], union: false },
          defaultValue: "True",
          kind: "POSITIONAL_OR_NAMED",
          required: false,
          repr: "e: bool = True",
        },
        {
          name: "f",
          type: {
            name: "Union",
            typedoc: null,
            nested: [
              { name: "int", typedoc: "integer", nested: [], union: false },
              { name: "date", typedoc: "date", nested: [], union: false },
            ],
            union: true,
          },
          defaultValue: "None",
          kind: "POSITIONAL_OR_NAMED",
          required: false,
          repr: "f: int | date = None",
        },
      ],
      returnType: null,
      doc: '<p>We use <a href="#type-integer" class="name">integer</a>, <a href="#type-date" class="name">date</a>, <a href="#type-Direction" class="name">Direction</a>, and many other types.</p>',
      shortdoc: "We use `integer`, `date`, `Direction`, and many other types.",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 61,
    },
    {
      name: "Zzz Long Documentation",
      args: [],
      returnType: null,
      doc: "<p>Last keyword has a bit longer documentation to make sure page moves when testing linking to keywords.</p>\n<ul>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n<li>- -</li>\n</ul>",
      shortdoc:
        "Last keyword has a bit longer documentation to make sure page moves when testing linking to keywords.",
      tags: [],
      source:
        "/Users/jth/Code/robotframework/src/robot/htmldata/testdata/libdoc_data.py",
      lineno: 166,
    },
  ],
  typedocs: [
    {
      type: "Standard",
      name: "boolean",
      doc: "<p>Strings <code>TRUE</code>, <code>YES</code>, <code>ON</code> and <code>1</code> are converted to Boolean <code>True</code>, the empty string as well as strings <code>FALSE</code>, <code>NO</code>, <code>OFF</code> and <code>0</code> are converted to Boolean <code>False</code>, and the string <code>NONE</code> is converted to the Python <code>None</code> object. Other strings and other accepted values are passed as-is, allowing keywords to handle them specially if needed. All string comparisons are case-insensitive.</p>\n<p>Examples: <code>TRUE</code> (converted to <code>True</code>), <code>off</code> (converted to <code>False</code>), <code>example</code> (used as-is)</p>",
      usages: ["Type Hints"],
      accepts: ["string", "integer", "float", "None"],
    },
    {
      type: "Custom",
      name: "date",
      doc: "<p>Date in format <code>dd.mm.yyyy</code>.</p>",
      usages: ["Type Aliases", "Type Hints"],
      accepts: ["string"],
    },
    {
      type: "Enum",
      name: "Direction",
      doc: "<p>Move direction.</p>",
      usages: ["Type Hints"],
      accepts: ["string"],
      members: [
        { name: "UP", value: "1" },
        { name: "DOWN", value: "2" },
        { name: "LEFT", value: "3" },
        { name: "RIGHT", value: "4" },
      ],
    },
    {
      type: "Standard",
      name: "integer",
      doc: '<p>Conversion is done using Python\'s <a href="https://docs.python.org/library/functions.html#int">int</a> built-in function. Floating point numbers are accepted only if they can be represented as integers exactly. For example, <code>1.0</code> is accepted and <code>1.1</code> is not.</p>\n<p>Starting from RF 4.1, it is possible to use hexadecimal, octal and binary numbers by prefixing values with <code>0x</code>, <code>0o</code> and <code>0b</code>, respectively.</p>\n<p>Starting from RF 4.1, spaces and underscores can be used as visual separators for digit grouping purposes.</p>\n<p>Examples: <code>42</code>, <code>-1</code>, <code>0b1010</code>, <code>10 000 000</code>, <code>0xBAD_C0FFEE</code></p>',
      usages: [
        "Int 1",
        "Int 10",
        "Int 2",
        "Int 3",
        "Int 4",
        "Int 5",
        "Int 6",
        "Int 7",
        "Int 8",
        "Int 9",
        "Type Hints",
      ],
      accepts: ["string", "float"],
    },
    {
      type: "TypedDict",
      name: "Point",
      doc: "<p>Pointless point.</p>",
      usages: ["Type Hints"],
      accepts: ["string", "Mapping"],
      items: [
        { key: "x", type: "int", required: true },
        { key: "y", type: "int", required: true },
      ],
    },
  ],
};

export { Libdoc, DATA };