/**
 * Italic keyword syntax token overrides.
 *
 * Composes over {@link getDefaultSyntax} by appending italic overrides for
 * keywords, preprocessor directives, and language-specific import/ export
 * constructs. VS Code applies the last matching TextMate rule, so appending
 * ensures the italic rules take precedence.
 *
 * @module  syntax.italic
 * @packageDocumentation
 */

import { Palette } from "../interface";
import { getDefaultSyntax } from "./default";

/**
 * Generates TextMate syntax highlighting with italic keyword overrides.
 *
 * Calls the base syntax generator and appends specific fontStyle overrides for
 * control keywords and storage types.
 *
 * @param  palette  – The theme color palette.
 * @param  italicComments  – Whether to render comments in italics.
 * @param  isDark  – Whether the current variant is dark mode.
 * @param  prefix  – The resolved neutral color prefix (e.g., "dark-warm").
 * @returns  An array of TextMate token color rules with italic overrides.
 * @public
 */
export function getItalicSyntax(
  palette: Palette,
  italicComments: boolean,
  isDark: boolean,
  prefix: string
) {
  const syntax = getDefaultSyntax(palette, italicComments, isDark, prefix);

  // Appended overrides: VS Code applies the last matching rule, so appending
  // here correctly overrides the base entries from getDefaultSyntax.
  const italicOverrides = [
    {
      name: "C red",
      scope:
        "keyword.control.directive.include.c, punctuation.definition.directive.c, keyword.control.directive.pragma.c, keyword.control.directive.line.c, keyword.control.directive.define.c, keyword.control.directive.conditional.c, keyword.control.directive.diagnostic.error.c, keyword.control.directive.undef.c, keyword.control.directive.conditional.ifdef.c, keyword.control.directive.endif.c, keyword.control.directive.conditional.ifndef.c, keyword.control.directive.conditional.if.c, keyword.control.directive.else.c",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "C# purple",
      scope: "entity.name.type.namespace.cs",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "C# red",
      scope: "keyword.other.using.cs",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "C++ red",
      scope:
        "keyword.control.directive.include.cpp, punctuation.definition.directive.cpp, keyword.control.directive.pragma.cpp, keyword.control.directive.line.cpp, keyword.control.directive.define.cpp, keyword.control.directive.conditional.cpp, keyword.control.directive.diagnostic.error.cpp, keyword.control.directive.undef.cpp, keyword.control.directive.conditional.ifdef.cpp, keyword.control.directive.endif.cpp, keyword.control.directive.conditional.ifndef.cpp, keyword.control.directive.conditional.if.cpp, keyword.control.directive.else.cpp, storage.type.namespace.definition.cpp, keyword.other.using.directive.cpp, storage.type.struct.cpp",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Clojure purple",
      scope: "entity.global.clojure",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "CSS purple",
      scope:
        "entity.name.tag.css, entity.other.keyframe-offset.css, punctuation.definition.keyword.css, keyword.control.at-rule.keyframes.css, meta.selector.css",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Dart purple",
      scope: "keyword.other.import.dart, storage.type.annotation.dart",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Elixir purple",
      scope: "keyword.control.module.elixir",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Erlang purple",
      scope:
        "keyword.control.directive.export.erlang, keyword.control.directive.module.erlang, keyword.control.directive.import.erlang, keyword.control.directive.behaviour.erlang",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Erlang red",
      scope:
        "keyword.control.directive.erlang, keyword.control.directive.define.erlang",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Fish red",
      scope: "support.function.builtin.fish",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Go purple",
      scope: "keyword.import.go, keyword.package.go",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Go red",
      scope: "keyword.type.go",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Groovy red",
      scope:
        "keyword.other.import.groovy, keyword.other.package.groovy, keyword.other.import.static.groovy",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Haskell aqua",
      scope: "entity.name.namespace, meta.preprocessor.haskell",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Html orange",
      scope:
        "entity.name.tag.html, entity.name.tag.xml, entity.name.tag.localname.xml",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-orange-500" : "light-orange-500"],
      },
    },
    {
      name: "Java purple",
      scope:
        "variable.language.wildcard.java, storage.modifier.import.java, storage.type.annotation.java, punctuation.definition.annotation.java, storage.modifier.package.java, entity.name.type.module.java",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Java red",
      scope: "keyword.other.import.java, keyword.other.package.java",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Julia red",
      scope:
        "keyword.control.import.julia, keyword.control.export.julia, keyword.other.julia",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Keyword Italic",
      scope:
        "keyword.control, storage.type.function, storage.type.class, storage.type.enum, storage.type.interface, storage.type.property, keyword.operator.new, keyword.operator.expression, keyword.operator.new, keyword.operator.delete, storage.type.extends",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "Kotlin purple",
      scope: "entity.name.package.kotlin, storage.type.annotation.kotlin",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Kotlin red",
      scope: "keyword.other.import.kotlin",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Lisp red",
      scope: "storage.type.function-type.lisp",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Modules",
      scope:
        "support.module, support.node, support.other.module, support.type.object.module, entity.name.type.module, entity.name.type.class.module, keyword.control.module",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
      },
    },
    {
      name: "Perl red",
      scope: "storage.type.sub.perl, storage.type.declare.routine.perl",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "PHP purple",
      scope: "keyword.control.import.include.php, storage.type.php",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Preproc Italic",
      scope:
        "keyword.control.at-rule, keyword.control.import, keyword.control.export, storage.type.namespace, keyword.control.directive, keyword.preprocessor, keyword.other.import, keyword.other.package, entity.name.type.namespace, entity.name.scope-resolution, keyword.other.using, keyword.package, keyword.import, keyword.map",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "Pug purple",
      scope: "entity.name.tag.pug, storage.type.import.include.pug",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "PureScript purple",
      scope: "support.other.module.purescript",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Python purple",
      scope:
        "keyword.control.import.python, keyword.control.import.from.python",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "R purple",
      scope: "entity.namespace.r",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Regular",
      scope: "storage.type.function.arrow, keyword.other.arrow",
      settings: {
        fontStyle: "regular",
      },
    },
    {
      name: "Ruby purple italic",
      scope: "keyword.control.module.ruby",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Ruby purple regular",
      scope: "punctuation.definition.constant.ruby",
      settings: {
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Rust purple",
      scope:
        "meta.attribute.rust, variable.language.rust, storage.type.module.rust",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "SASS purple",
      scope:
        "keyword.control.at-rule.include.scss, keyword.control.at-rule.use.scss, keyword.control.at-rule.mixin.scss, keyword.control.at-rule.extend.scss, keyword.control.at-rule.import.scss",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Scala purple",
      scope: "entity.name.package.scala",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "Scala red",
      scope: "keyword.other.import.scala",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-red-500" : "light-red-500"],
      },
    },
    {
      name: "Special identifier",
      scope:
        "variable.language.this, variable.language.self, variable.language.super, keyword.other.this, variable.language.special, constant.language.null, constant.language.undefined, constant.language.nan",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "TSX purple",
      scope:
        "keyword.control.import.tsx, keyword.control.export.tsx, storage.type.namespace.tsx",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
    {
      name: "TypeScript purple",
      scope:
        "keyword.control.import.ts, keyword.control.export.ts, storage.type.namespace.ts",
      settings: {
        fontStyle: "italic",
        foreground: palette[isDark ? "dark-purple-500" : "light-purple-500"],
      },
    },
  ];

  return [...syntax, ...italicOverrides];
}
