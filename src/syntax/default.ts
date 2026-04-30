/**
 * Default TextMate syntax token array.
 *
 * Builds the full set of TextMate grammar token color rules covering all
 * supported languages. Appends the comment rule last, with `fontStyle` always
 * written explicitly to prevent inheritance from parent scopes.
 *
 * Consumed directly when `italicKeywords` is `false`, or as the base for
 * {@link syntax.italic!getItalicSyntax} when `italicKeywords` is `true`.
 *
 * @module  syntax.default
 * @packageDocumentation
 */

import { Palette } from "../interface";

/**
 * Generates the base TextMate syntax highlighting tokens.
 *
 * @param  palette  – The theme color palette.
 * @param  italicComments  - Whether to render comments in italics.
 * @param  isDark  – Whether the current variant is dark mode.
 * @param  prefix  – The resolved neutral color prefix (e.g., "dark-hard").
 * @returns  An array of TextMate token color rules.
 * @public
 */
export function getDefaultSyntax(
  palette: Palette,
  italicComments: boolean,
  isDark: boolean,
  prefix: string
) {
  const syntax = [
    {
      name: "Annotation",
      scope: "storage.type.annotation",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Attribute",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Boolean",
      scope: "constant.language.boolean",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "C aqua",
      scope: "variable.other.member.c",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "C grey",
      scope:
        "punctuation.separator.dot-access.c, constant.character.escape.line-continuation.c",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "C orange",
      scope: "punctuation.separator.pointer-access.c",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "C red",
      scope:
        "keyword.control.directive.include.c, punctuation.definition.directive.c, keyword.control.directive.pragma.c, keyword.control.directive.line.c, keyword.control.directive.define.c, keyword.control.directive.conditional.c, keyword.control.directive.diagnostic.error.c, keyword.control.directive.undef.c, keyword.control.directive.conditional.ifdef.c, keyword.control.directive.endif.c, keyword.control.directive.conditional.ifndef.c, keyword.control.directive.conditional.if.c, keyword.control.directive.else.c",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "C white",
      scope:
        "meta.function-call.c, storage.modifier.array.bracket.square.c, meta.function.definition.parameters.c",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "C# aqua",
      scope: "variable.other.object.property.cs",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "C# green",
      scope:
        "string.quoted.double.cs, string.quoted.single.cs, punctuation.definition.string.begin.cs, punctuation.definition.string.end.cs",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "C# purple",
      scope: "entity.name.type.namespace.cs",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "C# red",
      scope: "keyword.other.using.cs",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "C# yellow",
      scope:
        "keyword.type.cs, constant.character.escape.cs, punctuation.definition.interpolation.begin.cs, punctuation.definition.interpolation.end.cs",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "C++ aqua",
      scope: "variable.other.member.cpp",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "C++ grey",
      scope:
        "punctuation.separator.dot-access.cpp, constant.character.escape.line-continuation.cpp",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "C++ orange",
      scope:
        "punctuation.separator.pointer-access.cpp, punctuation.section.angle-brackets.begin.template.call.cpp, punctuation.section.angle-brackets.end.template.call.cpp",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "C++ red",
      scope:
        "keyword.control.directive.include.cpp, punctuation.definition.directive.cpp, keyword.control.directive.pragma.cpp, keyword.control.directive.line.cpp, keyword.control.directive.define.cpp, keyword.control.directive.conditional.cpp, keyword.control.directive.diagnostic.error.cpp, keyword.control.directive.undef.cpp, keyword.control.directive.conditional.ifdef.cpp, keyword.control.directive.endif.cpp, keyword.control.directive.conditional.ifndef.cpp, keyword.control.directive.conditional.if.cpp, keyword.control.directive.else.cpp, storage.type.namespace.definition.cpp, keyword.other.using.directive.cpp, storage.type.struct.cpp",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "C++ white",
      scope:
        "meta.function-call.cpp, storage.modifier.array.bracket.square.cpp, meta.function.definition.parameters.cpp, meta.body.function.definition.cpp",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "Class",
      scope:
        "entity.name.type.class, support.class, entity.name.class, entity.other.inherited-class, storage.class",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "Clojure blue",
      scope: "entity.name.function.clojure",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "Clojure green",
      scope:
        "constant.keyword.clojure, support.variable.clojure, meta.definition.variable.clojure",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Clojure purple",
      scope: "entity.global.clojure",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "CMake aqua",
      scope: "entity.source.cmake",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "CMake green",
      scope: "string.source.cmake",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "CMake purple",
      scope: "storage.source.cmake",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "CoffeeScript orange",
      scope: "storage.type.function.coffee",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Comment",
      scope: "comment, string.comment, punctuation.definition.comment",
      settings: {
        fontStyle: italicComments ? "italic" : "regular",
        foreground: palette[`${prefix}-800`],
      },
    },
    {
      name: "Constant",
      scope: "constant.language, support.constant",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "CSS aqua",
      scope: "support.type.property-name.css",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "CSS blue",
      scope: "support.type.vendored.property-name.css",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "CSS green",
      scope:
        "string.quoted.single.css, string.quoted.double.css, support.constant.property-value.css, meta.property-value.css, punctuation.definition.string.begin.css, punctuation.definition.string.end.css, constant.numeric.css, support.constant.font-name.css, variable.parameter.keyframe-list.css",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "CSS grey",
      scope:
        "punctuation.definition.entity.css, punctuation.separator.key-value.css, punctuation.terminator.rule.css, punctuation.separator.list.comma.css",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "CSS orange",
      scope: "keyword.other.unit",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "CSS purple",
      scope:
        "entity.name.tag.css, entity.other.keyframe-offset.css, punctuation.definition.keyword.css, keyword.control.at-rule.keyframes.css, meta.selector.css",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "CSS red",
      scope: "entity.other.attribute-name.class.css",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "CSS yellow",
      scope:
        "entity.other.attribute-name.pseudo-class.css, entity.other.attribute-name.pseudo-element.css",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Dart blue",
      scope: "variable.language.dart",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "Dart green",
      scope:
        "entity.name.function.dart, string.interpolated.single.dart, string.interpolated.double.dart",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Dart grey",
      scope: "punctuation.dot.dart",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "Dart orange",
      scope: "storage.type.primitive.dart",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Dart purple",
      scope: "keyword.other.import.dart, storage.type.annotation.dart",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Dart yellow",
      scope: "support.class.dart",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Debug",
      scope: "keyword.other.debugger",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Delimiter",
      scope: "punctuation, meta.brace, meta.delimiter, meta.bracket",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "Diff blue",
      scope: "markup.changed.diff, punctuation.definition.changed.diff",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "Diff green",
      scope: "markup.inserted.diff, punctuation.definition.inserted.diff",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Diff grey",
      scope: "punctuation.definition.separator.diff",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "Diff orange",
      scope: "meta.diff.range.context, punctuation.definition.range.diff",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Diff purple",
      scope: "punctuation.definition.from-file.diff",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Diff red",
      scope: "markup.deleted.diff, punctuation.definition.deleted.diff",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Diff yellow",
      scope: "meta.diff.header.from-file",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Dockerfile aqua",
      scope: "constant.character.escape.dockerfile",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Dockerfile green",
      scope: "string.quoted.double.dockerfile, string.quoted.single.dockerfile",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Dockerfile orange",
      scope: "entity.name.function.package-manager.dockerfile",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Dockerfile purple",
      scope:
        "entity.name.type.base-image.dockerfile, entity.name.image.dockerfile",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Dockerfile yellow",
      scope: "keyword.operator.flag.dockerfile",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Elixir aqua",
      scope:
        "variable.other.readwrite.module.elixir, punctuation.definition.variable.elixir",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Elixir blue",
      scope: "constant.language.elixir",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "Elixir purple",
      scope: "keyword.control.module.elixir",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Elm white",
      scope: "keyword.other.period.elm",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "Elm yellow",
      scope: "storage.type.elm",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },

    {
      name: "Erlang green",
      scope:
        "string.quoted.double.erlang, string.quoted.single.erlang, punctuation.definition.string.begin.erlang, punctuation.definition.string.end.erlang",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Erlang grey",
      scope:
        "punctuation.separator.module-function.erlang, punctuation.section.directive.begin.erlang",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "Erlang purple",
      scope:
        "keyword.control.directive.export.erlang, keyword.control.directive.module.erlang, keyword.control.directive.import.erlang, keyword.control.directive.behaviour.erlang",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Erlang red",
      scope:
        "keyword.control.directive.erlang, keyword.control.directive.define.erlang",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Erlang yellow",
      scope: "entity.name.type.class.module.erlang",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "F# blue",
      scope: "entity.name.section.fsharp",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "F# green",
      scope:
        "string.quoted.double.fsharp, string.quoted.single.fsharp, punctuation.definition.string.begin.fsharp, punctuation.definition.string.end.fsharp",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "F# purple",
      scope: "support.function.attribute.fsharp",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "F# white",
      scope: "keyword.symbol.fsharp, constant.language.unit.fsharp",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "F# yellow",
      scope: "keyword.format.specifier.fsharp, entity.name.type.fsharp",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Fish blue",
      scope:
        "variable.other.normal.fish, punctuation.definition.variable.fish, variable.other.fixed.fish, variable.other.special.fish",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "Fish green",
      scope:
        "string.quoted.double.fish, punctuation.definition.string.end.fish, punctuation.definition.string.begin.fish, string.quoted.single.fish",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Fish orange",
      scope: "support.function.unix.fish",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Fish purple",
      scope: "constant.character.escape.single.fish",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Fish red",
      scope: "support.function.builtin.fish",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Function",
      scope:
        "entity.name.function, support.function, meta.function, meta.function-call, meta.definition.method",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Git aqua",
      scope: "keyword.other.definition.ini",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Git green",
      scope:
        "string.quoted.double.ini, string.quoted.single.ini, punctuation.definition.string.begin.ini, punctuation.definition.string.end.ini",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Git orange",
      scope: "punctuation.separator.key-value.ini",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Git red",
      scope:
        "entity.name.section.group-title.ini, punctuation.definition.entity.ini",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Go aqua",
      scope: "entity.name.package.go",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Go purple",
      scope: "keyword.import.go, keyword.package.go",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Go red",
      scope: "keyword.type.go",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "GraphQL aqua",
      scope: "constant.character.enum.graphql",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "GraphQL blue",
      scope: "variable.parameter.graphql",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "GraphQL purple",
      scope: "entity.name.fragment.graphql",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "GraphQL red",
      scope: "keyword.type.graphql",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "GraphQL white",
      scope: "string.unquoted.alias.graphql",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "GraphQL yellow",
      scope: "support.type.graphql",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Groovy aqua",
      scope: "storage.modifier.import.groovy, storage.modifier.package.groovy",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Groovy green",
      scope: "variable.other.interpolated.groovy, meta.method.groovy",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Groovy grey",
      scope: "punctuation.separator.groovy",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "Groovy orange",
      scope: "storage.type.def.groovy",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Groovy purple",
      scope: "storage.type.annotation.groovy",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Groovy red",
      scope:
        "keyword.other.import.groovy, keyword.other.package.groovy, keyword.other.import.static.groovy",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Groovy white",
      scope:
        "keyword.operator.navigation.groovy, meta.method.body.java, meta.definition.method.groovy, meta.definition.method.signature.java",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "Haskell aqua",
      scope: "entity.name.namespace, meta.preprocessor.haskell",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Haskell blue",
      scope: "entity.name.function.haskell",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "Haskell green",
      scope:
        "constant.other.haskell, string.quoted.double.haskell, string.quoted.single.haskell, punctuation.definition.string.begin.haskell, punctuation.definition.string.end.haskell",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Haskell orange",
      scope:
        "keyword.other.arrow.haskell, keyword.other.big-arrow.haskell, keyword.other.double-colon.haskell",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Haskell yellow",
      scope: "storage.type.haskell",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Html green",
      scope:
        "string.quoted.double.html, string.quoted.single.html, punctuation.definition.string.begin.html, punctuation.definition.string.end.html, punctuation.separator.key-value.html, punctuation.definition.string.begin.xml, punctuation.definition.string.end.xml, string.quoted.double.xml, string.quoted.single.xml, punctuation.definition.tag.begin.html, punctuation.definition.tag.end.html, punctuation.definition.tag.xml, meta.tag.xml, meta.tag.preprocessor.xml, meta.tag.other.html, meta.tag.block.any.html, meta.tag.inline.any.html",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Html grey",
      scope: "punctuation.separator.namespace.xml",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "Html orange",
      scope:
        "entity.name.tag.html, entity.name.tag.xml, entity.name.tag.localname.xml",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Html purple",
      scope: "variable.language.documentroot.xml, meta.tag.sgml.doctype.xml",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Html yellow",
      scope:
        "entity.other.attribute-name.html, entity.other.attribute-name.xml, entity.other.attribute-name.localname.xml",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Identifier",
      scope: "variable, support.variable, meta.definition.variable",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "Java aqua",
      scope: "variable.other.property.java",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Java grey",
      scope: "punctuation.separator.java, punctuation.separator.period.java",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "Java orange",
      scope: "storage.type.function.arrow.java, keyword.control.ternary.java",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Java purple",
      scope:
        "variable.language.wildcard.java, storage.modifier.import.java, storage.type.annotation.java, punctuation.definition.annotation.java, storage.modifier.package.java, entity.name.type.module.java",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Java red",
      scope: "keyword.other.import.java, keyword.other.package.java",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "JavaScript grey",
      scope:
        "punctuation.accessor.js, punctuation.separator.key-value.js, punctuation.separator.label.js, keyword.operator.accessor.js",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "JavaScript orange",
      scope: "storage.type.js, storage.type.function.arrow.js",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "JavaScript red",
      scope: "punctuation.definition.block.tag.jsdoc",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "JavaScript white",
      scope: "string.unquoted.js",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "JSON green",
      scope: "string.quoted.double.json",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "JSON grey",
      scope:
        "punctuation.support.type.property-name.begin.json, punctuation.support.type.property-name.end.json, punctuation.separator.dictionary.key-value.json, punctuation.definition.string.begin.json, punctuation.definition.string.end.json, punctuation.separator.dictionary.pair.json, punctuation.separator.array.json",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "JSON orange",
      scope: "support.type.property-name.json",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "JSX green",
      scope:
        "punctuation.definition.tag.jsx, entity.other.attribute-name.jsx, punctuation.definition.tag.begin.js.jsx, punctuation.definition.tag.end.js.jsx, entity.other.attribute-name.js.jsx",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "JSX white",
      scope: "JSXNested",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "Julia aqua",
      scope: "constant.language.julia",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Julia orange",
      scope: "keyword.storage.modifier.julia",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Julia purple",
      scope: "support.function.macro.julia",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Julia red",
      scope: "keyword.control.import.julia, keyword.control.export.julia",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Keyword",
      scope:
        "keyword, storage.type.function, storage.type.class, storage.type.enum, storage.type.interface, storage.type.property, keyword.operator.new, keyword.operator.expression, keyword.operator.new, keyword.operator.delete, storage.type.extends",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Kotlin aqua",
      scope: "constant.language.kotlin",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Kotlin orange",
      scope: "storage.type.kotlin",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Kotlin purple",
      scope: "entity.name.package.kotlin, storage.type.annotation.kotlin",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Kotlin red",
      scope: "keyword.other.import.kotlin",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Label",
      scope: "entity.name.label, constant.other.label",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "LaTex delimiter",
      scope:
        "punctuation.definition.function.latex, punctuation.definition.function.tex, punctuation.definition.keyword.latex, constant.character.newline.tex, punctuation.definition.keyword.tex",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "LaTex orange",
      scope:
        "support.function.section.latex, keyword.control.table.cell.latex, keyword.control.table.newline.latex",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "LaTex purple",
      scope: "keyword.control.preamble.latex",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "LaTex red",
      scope: "support.function.be.latex",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "LaTex yellow",
      scope:
        "support.class.latex, variable.parameter.latex, variable.parameter.function.latex, variable.parameter.definition.label.latex, constant.other.reference.label.latex",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Lisp aqua",
      scope: "entity.name.function.lisp",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Lisp green",
      scope: "keyword.constant.lisp",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Lisp red",
      scope: "storage.type.function-type.lisp",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Lisp white",
      scope: "meta.function.lisp",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "Lua aqua",
      scope: "constant.language.lua",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Lua blue",
      scope: "entity.name.class.lua",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "Macro",
      scope: "entity.name.function.preprocessor",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Makefile green",
      scope: "meta.scope.prerequisites.makefile",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Makefile orange",
      scope: "entity.name.function.target.makefile",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Makefile yellow",
      scope: "variable.other.makefile",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Markdown bold",
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
      },
    },
    {
      name: "Markdown bold delimiter",
      scope: "punctuation.definition.bold.markdown",
      settings: {
        fontStyle: "regular",
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "Markdown bold italic",
      scope: "markup.bold markup.italic, markup.italic markup.bold",
      settings: {
        fontStyle: "italic bold",
      },
    },
    {
      name: "Markdown code block",
      scope:
        "markup.fenced_code.block.markdown, markup.inline.raw.string.markdown",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Markdown code delimiter",
      scope:
        "punctuation.definition.markdown, punctuation.definition.raw.markdown",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Markdown code type",
      scope: "fenced_code.block.language",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Markdown delimiter",
      scope:
        "punctuation.definition.string.begin.markdown, punctuation.definition.string.end.markdown, punctuation.definition.italic.markdown, punctuation.definition.quote.begin.markdown, punctuation.definition.metadata.markdown, punctuation.separator.key-value.markdown, punctuation.definition.constant.markdown",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "Markdown heading delimiter",
      scope: "punctuation.definition.heading.markdown",
      settings: {
        fontStyle: "regular",
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "Markdown heading1",
      scope: "heading.1.markdown, markup.heading.setext.1.markdown",
      settings: {
        fontStyle: "bold",
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Markdown heading2",
      scope: "heading.2.markdown, markup.heading.setext.2.markdown",
      settings: {
        fontStyle: "bold",
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Markdown heading3",
      scope: "heading.3.markdown",
      settings: {
        fontStyle: "bold",
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Markdown heading4",
      scope: "heading.4.markdown",
      settings: {
        fontStyle: "bold",
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Markdown heading5",
      scope: "heading.5.markdown",
      settings: {
        fontStyle: "bold",
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "Markdown heading6",
      scope: "heading.6.markdown",
      settings: {
        fontStyle: "bold",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Markdown italic",
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "Markdown link",
      scope:
        "string.other.link.title.markdown, constant.other.reference.link.markdown, string.other.link.description.markdown",
      settings: {
        fontStyle: "regular",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Markdown link text",
      scope:
        "markup.underline.link.image.markdown, markup.underline.link.markdown",
      settings: {
        fontStyle: "underline",
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Markdown list mark",
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Markdown separator delimiter",
      scope:
        "meta.separator.markdown, punctuation.definition.constant.begin.markdown, punctuation.definition.constant.end.markdown",
      settings: {
        fontStyle: "bold",
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "Modules",
      scope:
        "support.module, support.node, support.other.module, support.type.object.module, entity.name.type.module, entity.name.type.class.module, keyword.control.module",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Number",
      scope: "constant.numeric",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "OCaml aqua",
      scope: "constant.language.variant.ocaml",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "OCaml orange",
      scope: "keyword.other.ocaml",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "OCaml white",
      scope: "entity.name.type.value-signature.ocaml",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "Operator",
      scope: "keyword.operator",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Perl red",
      scope: "storage.type.sub.perl, storage.type.declare.routine.perl",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "PHP aqua",
      scope: "constant.language.php, support.other.namespace.php",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "PHP blue",
      scope:
        "storage.type.modifier.access.control.public.cpp, storage.type.modifier.access.control.private.cpp",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "PHP orange",
      scope: "storage.type.trait.php",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "PHP purple",
      scope: "keyword.control.import.include.php, storage.type.php",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "PHP white",
      scope: "keyword.operator.class.php",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "PowerShell aqua",
      scope: "variable.other.member.powershell",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "PowerShell green",
      scope:
        "string.quoted.single.powershell, string.quoted.double.powershell, punctuation.definition.string.begin.powershell, punctuation.definition.string.end.powershell, string.quoted.double.heredoc.powershell",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "PowerShell grey",
      scope: "punctuation.definition.variable.powershell",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "PowerShell yellow",
      scope:
        "entity.name.function.powershell, support.function.attribute.powershell, support.function.powershell",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Preproc",
      scope:
        "keyword.control.at-rule, keyword.control.import, keyword.control.export, storage.type.namespace, punctuation.decorator, keyword.control.directive, keyword.preprocessor, punctuation.definition.preprocessor, punctuation.definition.directive, keyword.other.import, keyword.other.package, entity.name.type.namespace, entity.name.scope-resolution, keyword.other.using, keyword.package, keyword.import, keyword.map",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Property",
      scope:
        "variable.object.property, support.variable.property, variable.other.property, variable.other.object.property, variable.other.enummember, variable.other.member, meta.object-literal.key",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "Proto aqua",
      scope: "entity.name.class.proto, entity.name.class.message.proto",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Proto green",
      scope:
        "string.quoted.double.proto.syntax, string.quoted.single.proto.syntax, string.quoted.double.proto, string.quoted.single.proto",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Proto yellow",
      scope: "storage.type.proto",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Pug aqua",
      scope: "entity.other.attribute-name.tag.pug",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Pug orange",
      scope: "storage.type.function.pug",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Pug purple",
      scope: "entity.name.tag.pug, storage.type.import.include.pug",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Pug red",
      scope: "entity.other.attribute-name.class.pug",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "PureScript green",
      scope:
        "string.quoted.single.purescript, string.quoted.double.purescript, punctuation.definition.string.begin.purescript, punctuation.definition.string.end.purescript, string.quoted.triple.purescript, entity.name.type.purescript",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "PureScript orange",
      scope:
        "keyword.other.double-colon.purescript, keyword.other.arrow.purescript, keyword.other.big-arrow.purescript",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "PureScript purple",
      scope: "support.other.module.purescript",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "PureScript white",
      scope: "meta.type-signature.purescript",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "PureScript yellow",
      scope: "entity.name.function.purescript",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Python aqua",
      scope: "constant.language.python",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Python grey",
      scope:
        "punctuation.definition.decorator.python, punctuation.separator.period.python",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "Python purple",
      scope:
        "keyword.control.import.python, keyword.control.import.from.python",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Python white",
      scope: "meta.function-call.arguments.python",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "R aqua",
      scope: "constant.language.r",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "R green",
      scope: "entity.name.function.r, variable.function.r",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "R orange",
      scope: "keyword.other.r",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "R purple",
      scope: "entity.namespace.r",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "reStructuredText aqua",
      scope:
        "entity.name.tag.restructuredtext, punctuation.definition.link.restructuredtext, punctuation.definition.raw.restructuredtext, punctuation.section.raw.restructuredtext",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "reStructuredText delimiter",
      scope:
        "punctuation.definition.field.restructuredtext, punctuation.separator.key-value.restructuredtext, punctuation.definition.directive.restructuredtext, punctuation.definition.constant.restructuredtext, punctuation.definition.italic.restructuredtext, punctuation.definition.table.restructuredtext",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "reStructuredText delimiter bold",
      scope: "punctuation.definition.bold.restructuredtext",
      settings: {
        fontStyle: "regular",
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "reStructuredText green",
      scope:
        "entity.name.directive.restructuredtext, markup.raw.restructuredtext, markup.raw.inner.restructuredtext, string.other.link.title.restructuredtext",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "reStructuredText heading",
      scope: "punctuation.definition.heading.restructuredtext",
      settings: {
        fontStyle: "bold",
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "reStructuredText purple",
      scope: "constant.other.footnote.link.restructuredtext",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "reStructuredText red",
      scope: "support.directive.restructuredtext",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Ruby blue",
      scope: "variable.other.constant.ruby",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "Ruby green",
      scope: "keyword.other.special-method.ruby",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Ruby grey",
      scope: "punctuation.separator.method.ruby",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "Ruby orange",
      scope: "keyword.control.pseudo-method.ruby, storage.type.variable.ruby",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Ruby purple",
      scope:
        "keyword.control.module.ruby, punctuation.definition.constant.ruby",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Ruby white",
      scope: "meta.function.method.with-arguments.ruby",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "Ruby yellow",
      scope:
        "string.regexp.character-class.ruby,string.regexp.interpolated.ruby,punctuation.definition.character-class.ruby,string.regexp.group.ruby, punctuation.section.regexp.ruby, punctuation.definition.group.ruby",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Rust aqua",
      scope: "support.constant.core.rust",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Rust grey",
      scope: "keyword.operator.path.rust, keyword.operator.member-access.rust",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "Rust orange",
      scope: "storage.type.rust",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Rust purple",
      scope:
        "meta.attribute.rust, variable.language.rust, storage.type.module.rust",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Rust white",
      scope: "entity.name.type.mod.rust",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "SASS green",
      scope:
        "punctuation.definition.string.begin.scss, punctuation.definition.string.end.scss, string.quoted.double.scss, string.quoted.single.scss, constant.character.css.sass, meta.property-value.scss",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "SASS grey",
      scope:
        "punctuation.definition.entity.scss, punctuation.separator.key-value.scss, punctuation.terminator.rule.scss, punctuation.separator.list.comma.scss",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "SASS orange",
      scope: "keyword.control.at-rule.keyframes.scss",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "SASS purple",
      scope:
        "keyword.control.at-rule.include.scss, keyword.control.at-rule.use.scss, keyword.control.at-rule.mixin.scss, keyword.control.at-rule.extend.scss, keyword.control.at-rule.import.scss",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "SASS yellow",
      scope:
        "punctuation.definition.interpolation.begin.bracket.curly.scss, punctuation.definition.interpolation.end.bracket.curly.scss",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Scala aqua",
      scope: "entity.name.import.scala",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Scala blue",
      scope: "constant.language.scala",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "Scala green",
      scope:
        "string.quoted.double.scala, string.quoted.single.scala, punctuation.definition.string.begin.scala, punctuation.definition.string.end.scala, string.quoted.double.interpolated.scala, string.quoted.single.interpolated.scala, string.quoted.triple.scala",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Scala orange",
      scope: "keyword.declaration.stable.scala, keyword.other.arrow.scala",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Scala purple",
      scope: "entity.name.package.scala",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Scala red",
      scope: "keyword.other.import.scala",
      settings: {
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Scala yellow",
      scope: "entity.name.class, entity.other.inherited-class.scala",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Shell green",
      scope:
        "string.quoted.double.shell, string.quoted.single.shell, punctuation.definition.string.begin.shell, punctuation.definition.string.end.shell, string.unquoted.heredoc.shell",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Shell purple",
      scope:
        "keyword.control.heredoc-token.shell, variable.other.normal.shell, punctuation.definition.variable.shell, variable.other.special.shell, variable.other.positional.shell, variable.other.bracket.shell",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Shell white",
      scope: "meta.scope.if-block.shell, meta.scope.group.shell",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "Shell yellow",
      scope: "support.function.builtin.shell, entity.name.function.shell",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Special identifier",
      scope:
        "variable.language.this, variable.language.self, variable.language.super, keyword.other.this, variable.language.special, constant.language.null, constant.language.undefined, constant.language.nan",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "SQL green",
      scope:
        "string.quoted.single.sql, punctuation.definition.string.end.sql, punctuation.definition.string.begin.sql, string.quoted.double.sql",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "SQL yellow",
      scope: "support.function.aggregate.sql",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Storage",
      scope:
        "storage, modifier, keyword.var, entity.name.tag, keyword.control.case, keyword.control.switch",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "String",
      scope:
        "string, punctuation.definition.string.end, punctuation.definition.string.begin, punctuation.definition.string.template.begin, punctuation.definition.string.template.end",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "String Escape",
      scope:
        "constant.character.escape, punctuation.quasi.element, punctuation.definition.template-expression, punctuation.section.embedded, storage.type.format, constant.other.placeholder, constant.other.placeholder, variable.interpolation",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "Stylus white",
      scope: "meta.function.stylus",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "Stylus yellow",
      scope: "entity.name.function.stylus",
      settings: {
        foreground: palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
      },
    },
    {
      name: "Swift aqua",
      scope: "support.variable.swift",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Swift white",
      scope: "meta.function-call.swift, support.function.any-method.swift",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "Tmux green",
      scope: "constant.language.tmux, constant.numeric.tmux",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "TOML blue",
      scope: "constant.other.boolean.toml",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "TOML green",
      scope:
        "string.quoted.single.basic.line.toml, string.quoted.single.literal.line.toml, punctuation.definition.keyValuePair.toml",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "TOML orange",
      scope: "keyword.key.toml",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "TOML purple",
      scope:
        "entity.other.attribute-name.table.toml, punctuation.definition.table.toml, entity.other.attribute-name.table.array.toml, punctuation.definition.table.array.toml",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "TSX aqua",
      scope:
        "entity.name.type.tsx, entity.name.type.interface.tsx, entity.other.inherited-class.tsx, entity.name.type.alias.tsx, entity.name.type.class.tsx, entity.name.type.enum.tsx",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "TSX blue",
      scope: "entity.name.type.module.tsx",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "TSX green",
      scope:
        "punctuation.definition.tag.directive.tsx, entity.other.attribute-name.directive.tsx, punctuation.definition.tag.begin.tsx, punctuation.definition.tag.end.tsx, entity.other.attribute-name.tsx",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "TSX grey",
      scope:
        "keyword.operator.type.annotation.tsx, punctuation.accessor.tsx, punctuation.separator.key-value.tsx",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "TSX orange",
      scope:
        "storage.type.tsx, storage.type.function.arrow.tsx, storage.type.type.tsx, support.class.component.tsx",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "TSX purple",
      scope:
        "keyword.control.import.tsx, keyword.control.export.tsx, storage.type.namespace.tsx",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "TSX white",
      scope: "entity.name.type.module.tsx",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "Type",
      scope: "storage.type, support.type, entity.name.type, keyword.type",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "TypeScript aqua",
      scope:
        "entity.name.type.ts, entity.name.type.interface.ts, entity.other.inherited-class.ts, entity.name.type.alias.ts, entity.name.type.class.ts, entity.name.type.enum.ts",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "TypeScript blue",
      scope: "entity.name.type.module.ts",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "TypeScript green",
      scope:
        "punctuation.definition.tag.directive.ts, entity.other.attribute-name.directive.ts",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "TypeScript grey",
      scope:
        "keyword.operator.type.annotation.ts, punctuation.accessor.ts, punctuation.separator.key-value.ts",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "TypeScript orange",
      scope:
        "storage.type.ts, storage.type.function.arrow.ts, storage.type.type.ts",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "TypeScript purple",
      scope:
        "keyword.control.import.ts, keyword.control.export.ts, storage.type.namespace.ts",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "TypeScript white",
      scope: "entity.name.type.module.ts",
      settings: {
        foreground: palette[`${prefix}-975`],
      },
    },
    {
      name: "VimL blue",
      scope: "constant.character.map.special.viml",
      settings: {
        foreground: palette[isDark ? "dark-blue-500" : "light-blue-500"],
      },
    },
    {
      name: "VimL green",
      scope: "constant.character.map.viml, constant.character.map.key.viml",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "VimL grey",
      scope: "punctuation.definition.map.viml",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
    {
      name: "VimL orange",
      scope: "storage.type.map.viml",
      settings: {
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "YAML aqua",
      scope:
        "punctuation.definition.anchor.yaml, punctuation.definition.block.sequence.item.yaml",
      settings: {
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "YAML green",
      scope:
        "string.unquoted.plain.out.yaml, string.quoted.single.yaml, string.quoted.double.yaml, punctuation.definition.string.begin.yaml, punctuation.definition.string.end.yaml, string.unquoted.plain.in.yaml, string.unquoted.block.yaml",
      settings: {
        foreground: palette[isDark ? "dark-green-500" : "light-green-500"],
      },
    },
    {
      name: "YAML grey",
      scope: "punctuation.separator.key-value.mapping.yaml",
      settings: {
        foreground: palette[`${prefix}-900`],
      },
    },
  ];

  return syntax;
}
