/**
 * Workbench token generator.
 *
 * Produces the full set of VS Code workbench color tokens for a given mode,
 * temperature, and contrast level. This is the single source of truth for all
 * UI chrome colors.
 *
 * The neutral color prefix is composed from three parts:
 *
 * `${mode}-${temperature}-${contrast}`
 *
 * E.g. `"dark-neutral-balanced"`, `"light-warm-crisp"`.
 *
 * Chromatic keys (syntax/accent colors) are addressed directly as
 * `"dark-green-500"` etc. and are independent of the prefix.
 *
 * @module  workbench
 * @packageDocumentation
 */

import { Configuration, Palette } from "../interface";
import { CURSOR_COLORS, OPACITY_MAP, resolveSelection } from "./shared";

/**
 * Generates the workbench token map for a given mode and configuration.
 *
 * @param  palette  – The full color palette.
 * @param  configuration  – The resolved user configuration.
 * @param  mode  – `"dark"` or `"light"`.
 * @returns  A mapping of VS Code workbench token keys to hex color strings.
 * @public
 */
export function workbench(
  palette: Palette,
  configuration: Configuration,
  mode: string
): Record<string, string> {
  const isDark = mode === "dark";

  const temperature = isDark
    ? (configuration.darkTemperature ?? "neutral")
    : (configuration.lightTemperature ?? "neutral");

  const contrast = isDark
    ? (configuration.darkContrast ?? "balanced")
    : (configuration.lightContrast ?? "balanced");

  // The single prefix that addresses all neutral scale steps.
  // e.g. "dark-neutral-balanced", "light-warm-crisp"
  const prefix = `${mode}-${temperature}-${contrast}`;

  // ─── Resolved per-variant values ───────────────────────────────────────────

  const { editorSelectionBg, editorSelectionBgHl, selectionBg } = isDark
    ? resolveSelection(palette, prefix, configuration.darkSelection ?? "grey", [
        "e0",
        "c0",
        "60",
      ])
    : resolveSelection(
        palette,
        prefix,
        configuration.lightSelection ?? "grey",
        ["c0", "a0", "50"]
      );

  const cursorColorKey = isDark
    ? (configuration.darkCursor ?? "white")
    : (configuration.lightCursor ?? "black");
  const cursorColorScale = CURSOR_COLORS[cursorColorKey];
  const cursorFg =
    cursorColorScale === "975"
      ? palette[`${prefix}-975`]
      : palette[
          isDark
            ? `dark-${cursorColorKey}-${cursorColorScale}`
            : `light-${cursorColorKey}-${cursorColorScale}`
        ];

  const diagnosticTextBackgroundOpacity =
    OPACITY_MAP[configuration.diagnosticTextBackgroundOpacity ?? "0%"] ?? "00";

  // ─── Token map ────────────────────────────────────────────────────────────

  return {
    "activityBar.activeBorder": `${
      palette[isDark ? "dark-green-400" : "light-green-400"]
    }d0`,
    "activityBar.activeFocusBorder":
      palette[isDark ? "dark-green-400" : "light-green-400"],
    "activityBar.background": palette[`${prefix}-300`],
    "activityBar.border": palette[`${prefix}-300`],
    "activityBar.dropBackground": palette[`${prefix}-300`],
    "activityBar.foreground": palette[`${prefix}-975`],
    "activityBar.inactiveForeground": palette[`${prefix}-900`],
    "activityBarBadge.background":
      palette[isDark ? "dark-green-400" : "light-green-400"],
    "activityBarBadge.foreground": palette[`${prefix}-300`],
    "badge.background": palette[isDark ? "dark-green-400" : "light-green-400"],
    "badge.foreground": palette[`${prefix}-300`],
    "breadcrumb.activeSelectionForeground": palette[`${prefix}-975`],
    "breadcrumb.background": palette[`${prefix}-300`],
    "breadcrumb.focusForeground": palette[`${prefix}-975`],
    "breadcrumb.foreground": palette[`${prefix}-900`],
    "button.background": palette[isDark ? "dark-green-400" : "light-green-400"],
    "button.foreground": palette[`${prefix}-300`],
    "button.hoverBackground": `${
      palette[isDark ? "dark-green-400" : "light-green-400"]
    }d0`,
    "button.secondaryBackground": palette[`${prefix}-500`],
    "button.secondaryForeground": palette[`${prefix}-975`],
    "button.secondaryHoverBackground": palette[`${prefix}-600`],
    "charts.blue": palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "charts.foreground": palette[`${prefix}-975`],
    "charts.green": palette[isDark ? "dark-green-500" : "light-green-500"],
    "charts.orange": palette[isDark ? "dark-orange-500" : "light-orange-500"],
    "charts.purple": palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "charts.red": palette[isDark ? "dark-red-500" : "light-red-500"],
    "charts.yellow": palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "checkbox.background": palette[`${prefix}-300`],
    "checkbox.border": palette[`${prefix}-700`],
    "checkbox.foreground":
      palette[isDark ? "dark-orange-500" : "light-orange-500"],
    contrastActiveBorder: "#00000000",
    contrastBorder: "#00000000",
    "debugConsole.errorForeground":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "debugConsole.infoForeground":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "debugConsole.sourceForeground":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "debugConsole.warningForeground":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "debugConsoleInputIcon.foreground":
      palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "debugIcon.breakpointCurrentStackframeForeground":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "debugIcon.breakpointDisabledForeground":
      palette[isDark ? "dark-red-300" : "light-red-300"],
    "debugIcon.breakpointForeground":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "debugIcon.breakpointStackframeForeground":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "debugIcon.breakpointUnverifiedForeground": palette[`${prefix}-950`],
    "debugIcon.continueForeground":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "debugIcon.disconnectForeground":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "debugIcon.pauseForeground":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "debugIcon.restartForeground":
      palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "debugIcon.startForeground":
      palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "debugIcon.stepBackForeground":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "debugIcon.stepIntoForeground":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "debugIcon.stepOutForeground":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "debugIcon.stepOverForeground":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "debugIcon.stopForeground":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "debugTokenExpression.boolean":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "debugTokenExpression.error":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "debugTokenExpression.name":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "debugTokenExpression.number":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "debugTokenExpression.string":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "debugTokenExpression.value":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "debugToolBar.background": palette[`${prefix}-300`],
    descriptionForeground: palette[`${prefix}-900`],
    "diffEditor.diagonalFill": palette[`${prefix}-700`],
    "diffEditor.insertedTextBackground": `${
      palette[isDark ? "dark-aqua-300" : "light-aqua-300"]
    }30`,
    "diffEditor.removedTextBackground": `${
      palette[isDark ? "dark-red-300" : "light-red-300"]
    }30`,
    "dropdown.background": palette[`${prefix}-300`],
    "dropdown.border": palette[`${prefix}-700`],
    "dropdown.foreground": palette[`${prefix}-950`],
    "editor.background": palette[`${prefix}-300`],
    "editor.findMatchBackground": `${
      palette[isDark ? "dark-orange-300" : "light-orange-300"]
    }40`,
    "editor.findMatchHighlightBackground": `${
      palette[isDark ? "dark-green-300" : "light-green-300"]
    }40`,
    "editor.findRangeHighlightBackground": editorSelectionBgHl,
    "editor.foldBackground": `${palette[`${prefix}-700`]}80`,
    "editor.foreground": palette[`${prefix}-975`],
    "editor.hoverHighlightBackground": isDark
      ? `${palette[`${prefix}-600`]}b0`
      : `${palette[`${prefix}-600`]}90`,
    "editor.inactiveSelectionBackground": editorSelectionBgHl,
    "editor.lineHighlightBackground": isDark
      ? `${palette[`${prefix}-500`]}90`
      : `${palette[`${prefix}-500`]}70`,
    "editor.lineHighlightBorder": `${palette[`${prefix}-700`]}00`,
    "editor.rangeHighlightBackground": `${palette[`${prefix}-500`]}80`,
    "editor.selectionBackground": editorSelectionBg,
    "editor.selectionHighlightBackground": editorSelectionBgHl,
    "editor.snippetFinalTabstopHighlightBackground": `${
      palette[isDark ? "dark-green-300" : "light-green-300"]
    }40`,
    "editor.snippetFinalTabstopHighlightBorder": palette[`${prefix}-300`],
    "editor.snippetTabstopHighlightBackground": palette[`${prefix}-500`],
    "editor.symbolHighlightBackground": `${
      palette[isDark ? "dark-blue-300" : "light-blue-300"]
    }40`,
    "editor.wordHighlightBackground": isDark
      ? `${palette[`${prefix}-600`]}58`
      : `${palette[`${prefix}-600`]}48`,
    "editor.wordHighlightStrongBackground": isDark
      ? `${palette[`${prefix}-600`]}b0`
      : `${palette[`${prefix}-600`]}90`,
    "editorBracketHighlight.foreground1":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "editorBracketHighlight.foreground2":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "editorBracketHighlight.foreground3":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "editorBracketHighlight.foreground4":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "editorBracketHighlight.foreground5":
      palette[isDark ? "dark-orange-500" : "light-orange-500"],
    "editorBracketHighlight.foreground6":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "editorBracketHighlight.unexpectedBracket.foreground":
      palette[`${prefix}-900`],
    "editorBracketMatch.background": palette[`${prefix}-700`],
    "editorBracketMatch.border": `${palette[`${prefix}-300`]}00`,
    "editorCodeLens.foreground": `${palette[`${prefix}-800`]}a0`,
    "editorCursor.foreground": cursorFg,
    "editorError.background": `${
      palette[isDark ? "dark-red-300" : "light-red-300"]
    }${diagnosticTextBackgroundOpacity}`,
    "editorError.foreground":
      palette[isDark ? "dark-red-300" : "light-red-300"],
    "editorGhostText.background": `${palette[`${prefix}-300`]}00`,
    "editorGhostText.foreground": `${palette[`${prefix}-800`]}a0`,
    "editorGroup.border": palette[`${prefix}-100`],
    "editorGroup.dropBackground": `${palette[`${prefix}-700`]}60`,
    "editorGroupHeader.border": palette[`${prefix}-300`],
    "editorGroupHeader.noTabsBackground": palette[`${prefix}-300`],
    "editorGroupHeader.tabsBackground": palette[`${prefix}-200`],
    "editorGutter.addedBackground": `${
      palette[isDark ? "dark-green-300" : "light-green-300"]
    }a0`,
    "editorGutter.background": `${palette[`${prefix}-300`]}00`,
    "editorGutter.commentRangeForeground": palette[`${prefix}-800`],
    "editorGutter.deletedBackground": `${
      palette[isDark ? "dark-red-300" : "light-red-300"]
    }a0`,
    "editorGutter.modifiedBackground": `${
      palette[isDark ? "dark-blue-300" : "light-blue-300"]
    }a0`,
    "editorHint.foreground":
      palette[isDark ? "dark-purple-300" : "light-purple-300"],
    "editorHoverWidget.background": palette[`${prefix}-400`],
    "editorHoverWidget.border": palette[`${prefix}-600`],
    "editorIndentGuide.activeBackground": `${palette[`${prefix}-950`]}50`,
    "editorIndentGuide.background": `${palette[`${prefix}-950`]}20`,
    "editorInfo.background": `${
      palette[isDark ? "dark-blue-300" : "light-blue-300"]
    }${diagnosticTextBackgroundOpacity}`,
    "editorInfo.foreground":
      palette[isDark ? "dark-blue-300" : "light-blue-300"],
    "editorInlayHint.background": `${palette[`${prefix}-300`]}00`,
    "editorInlayHint.foreground": `${palette[`${prefix}-800`]}a0`,
    "editorInlayHint.parameterBackground": `${palette[`${prefix}-300`]}00`,
    "editorInlayHint.parameterForeground": `${palette[`${prefix}-800`]}a0`,
    "editorInlayHint.typeBackground": `${palette[`${prefix}-300`]}00`,
    "editorInlayHint.typeForeground": `${palette[`${prefix}-800`]}a0`,
    "editorLightBulb.foreground":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "editorLightBulbAutoFix.foreground":
      palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "editorLineNumber.activeForeground": `${palette[`${prefix}-950`]}e0`,
    "editorLineNumber.foreground": `${palette[`${prefix}-800`]}a0`,
    "editorLink.activeForeground":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "editorMarkerNavigation.background": palette[`${prefix}-400`],
    "editorMarkerNavigationError.background": `${
      palette[isDark ? "dark-red-300" : "light-red-300"]
    }80`,
    "editorMarkerNavigationInfo.background": `${
      palette[isDark ? "dark-blue-300" : "light-blue-300"]
    }80`,
    "editorMarkerNavigationWarning.background": `${
      palette[isDark ? "dark-yellow-300" : "light-yellow-300"]
    }80`,
    "editorOverviewRuler.addedForeground": `${
      palette[isDark ? "dark-green-300" : "light-green-300"]
    }a0`,
    "editorOverviewRuler.border": `${palette[`${prefix}-300`]}00`,
    "editorOverviewRuler.commonContentForeground": palette[`${prefix}-900`],
    "editorOverviewRuler.currentContentForeground":
      palette[isDark ? "dark-blue-300" : "light-blue-300"],
    "editorOverviewRuler.deletedForeground": `${
      palette[isDark ? "dark-red-300" : "light-red-300"]
    }a0`,
    "editorOverviewRuler.errorForeground":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "editorOverviewRuler.findMatchForeground":
      palette[isDark ? "dark-aqua-300" : "light-aqua-300"],
    "editorOverviewRuler.incomingContentForeground":
      palette[isDark ? "dark-aqua-300" : "light-aqua-300"],
    "editorOverviewRuler.infoForeground":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "editorOverviewRuler.modifiedForeground": `${
      palette[isDark ? "dark-blue-300" : "light-blue-300"]
    }a0`,
    "editorOverviewRuler.rangeHighlightForeground":
      palette[isDark ? "dark-aqua-300" : "light-aqua-300"],
    "editorOverviewRuler.selectionHighlightForeground":
      palette[isDark ? "dark-aqua-300" : "light-aqua-300"],
    "editorOverviewRuler.warningForeground":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "editorOverviewRuler.wordHighlightForeground": palette[`${prefix}-700`],
    "editorOverviewRuler.wordHighlightStrongForeground":
      palette[`${prefix}-700`],
    "editorRuler.foreground": `${palette[`${prefix}-600`]}a0`,
    "editorSuggestWidget.background": palette[`${prefix}-500`],
    "editorSuggestWidget.border": palette[`${prefix}-500`],
    "editorSuggestWidget.foreground": palette[`${prefix}-975`],
    "editorSuggestWidget.highlightForeground":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "editorSuggestWidget.selectedBackground": palette[`${prefix}-600`],
    "editorUnnecessaryCode.border": palette[`${prefix}-300`],
    "editorUnnecessaryCode.opacity": "#00000080",
    "editorWarning.background": `${
      palette[isDark ? "dark-yellow-300" : "light-yellow-300"]
    }${diagnosticTextBackgroundOpacity}`,
    "editorWarning.foreground":
      palette[isDark ? "dark-yellow-300" : "light-yellow-300"],
    "editorWhitespace.foreground": palette[`${prefix}-600`],
    "editorWidget.background": palette[`${prefix}-300`],
    "editorWidget.border": palette[`${prefix}-700`],
    "editorWidget.foreground": palette[`${prefix}-975`],
    errorForeground: palette[isDark ? "dark-red-500" : "light-red-500"],
    "extensionBadge.remoteBackground":
      palette[isDark ? "dark-green-400" : "light-green-400"],
    "extensionBadge.remoteForeground": palette[`${prefix}-300`],
    "extensionButton.prominentBackground":
      palette[isDark ? "dark-green-400" : "light-green-400"],
    "extensionButton.prominentForeground": palette[`${prefix}-300`],
    "extensionButton.prominentHoverBackground": `${
      palette[isDark ? "dark-green-400" : "light-green-400"]
    }d0`,
    "extensionIcon.preReleaseForeground":
      palette[isDark ? "dark-orange-500" : "light-orange-500"],
    "extensionIcon.starForeground":
      palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "extensionIcon.verifiedForeground":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    focusBorder: `${palette[`${prefix}-300`]}00`,
    foreground: palette[`${prefix}-950`],
    "gitDecoration.addedResourceForeground":
      palette[isDark ? "dark-yellow-300" : "light-yellow-300"],
    "gitDecoration.conflictingResourceForeground":
      palette[isDark ? "dark-red-600" : "light-red-600"],
    "gitDecoration.deletedResourceForeground":
      palette[isDark ? "dark-red-600" : "light-red-600"],
    "gitDecoration.ignoredResourceForeground": palette[`${prefix}-750`],
    "gitDecoration.modifiedResourceForeground":
      palette[isDark ? "dark-orange-500" : "light-orange-500"],
    "gitDecoration.stageDeletedResourceForeground":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "gitDecoration.stageModifiedResourceForeground":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "gitDecoration.submoduleResourceForeground": palette[`${prefix}-750`],
    "gitDecoration.untrackedResourceForeground":
      palette[isDark ? "dark-orange-500" : "light-orange-500"],
    "gitlens.closedPullRequestIconColor":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "gitlens.decorations.addedForegroundColor":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "gitlens.decorations.branchAheadForegroundColor":
      palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "gitlens.decorations.branchBehindForegroundColor":
      palette[isDark ? "dark-orange-500" : "light-orange-500"],
    "gitlens.decorations.branchDivergedForegroundColor":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "gitlens.decorations.branchMissingUpstreamForegroundColor":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "gitlens.decorations.branchUnpublishedForegroundColor":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "gitlens.decorations.branchUpToDateForegroundColor":
      palette[`${prefix}-975`],
    "gitlens.decorations.copiedForegroundColor":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "gitlens.decorations.deletedForegroundColor":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "gitlens.decorations.ignoredForegroundColor": palette[`${prefix}-950`],
    "gitlens.decorations.modifiedForegroundColor":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "gitlens.decorations.renamedForegroundColor":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "gitlens.decorations.untrackedForegroundColor":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "gitlens.gutterBackgroundColor": palette[`${prefix}-300`],
    "gitlens.gutterForegroundColor": palette[`${prefix}-975`],
    "gitlens.gutterUncommittedForegroundColor":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "gitlens.lineHighlightBackgroundColor": palette[`${prefix}-400`],
    "gitlens.lineHighlightOverviewRulerColor":
      palette[isDark ? "dark-green-400" : "light-green-400"],
    "gitlens.mergedPullRequestIconColor":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "gitlens.openPullRequestIconColor":
      palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "gitlens.trailingLineForegroundColor": palette[`${prefix}-900`],
    "gitlens.unpublishedChangesIconColor":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "gitlens.unpublishedCommitIconColor":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "gitlens.unpulledChangesIconColor":
      palette[isDark ? "dark-orange-500" : "light-orange-500"],
    "icon.foreground": palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "imagePreview.border": palette[`${prefix}-300`],
    "input.background": `${palette[`${prefix}-300`]}00`,
    "input.border": palette[`${prefix}-700`],
    "input.foreground": palette[`${prefix}-975`],
    "input.placeholderForeground": palette[`${prefix}-800`],
    "inputOption.activeBorder":
      palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "inputValidation.errorBackground":
      palette[isDark ? "dark-red-300" : "light-red-300"],
    "inputValidation.errorBorder":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "inputValidation.errorForeground": palette[`${prefix}-975`],
    "inputValidation.infoBackground":
      palette[isDark ? "dark-blue-300" : "light-blue-300"],
    "inputValidation.infoBorder":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "inputValidation.infoForeground": palette[`${prefix}-975`],
    "inputValidation.warningBackground":
      palette[isDark ? "dark-yellow-300" : "light-yellow-300"],
    "inputValidation.warningBorder":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "inputValidation.warningForeground": palette[`${prefix}-975`],
    "issues.closed": palette[isDark ? "dark-red-500" : "light-red-500"],
    "issues.open": palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "keybindingLabel.background": `${palette[`${prefix}-300`]}00`,
    "keybindingLabel.border": palette[`${prefix}-200`],
    "keybindingLabel.bottomBorder": palette[`${prefix}-100`],
    "keybindingLabel.foreground": palette[`${prefix}-975`],
    "keybindingTable.headerBackground": palette[`${prefix}-500`],
    "keybindingTable.rowsBackground": palette[`${prefix}-400`],
    "list.activeSelectionBackground": palette[`${prefix}-300`],
    "list.activeSelectionForeground": palette[`${prefix}-975`],
    "list.dropBackground": `${palette[`${prefix}-400`]}80`,
    "list.errorForeground": palette[isDark ? "dark-red-600" : "light-red-600"],
    "list.focusBackground": palette[`${prefix}-300`],
    "list.focusForeground": palette[`${prefix}-975`],
    "list.highlightForeground":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "list.hoverBackground": palette[`${prefix}-300`],
    "list.hoverForeground": palette[`${prefix}-975`],
    "list.inactiveFocusBackground": `${palette[`${prefix}-300`]}80`,
    "list.inactiveSelectionBackground": `${palette[`${prefix}-300`]}80`,
    "list.inactiveSelectionForeground": palette[`${prefix}-950`],
    "list.invalidItemForeground":
      palette[isDark ? "dark-red-300" : "light-red-300"],
    "list.warningForeground":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "menu.background": palette[`${prefix}-300`],
    "menu.foreground": palette[`${prefix}-950`],
    "menu.selectionBackground": palette[`${prefix}-400`],
    "menu.selectionForeground": palette[`${prefix}-975`],
    "menubar.selectionBackground": palette[`${prefix}-300`],
    "menubar.selectionBorder": palette[`${prefix}-300`],
    "merge.border": `${palette[`${prefix}-300`]}00`,
    "merge.currentContentBackground": `${
      palette[isDark ? "dark-blue-300" : "light-blue-300"]
    }40`,
    "merge.currentHeaderBackground": `${
      palette[isDark ? "dark-blue-300" : "light-blue-300"]
    }80`,
    "merge.incomingContentBackground": `${
      palette[isDark ? "dark-aqua-300" : "light-aqua-300"]
    }40`,
    "merge.incomingHeaderBackground": `${
      palette[isDark ? "dark-aqua-300" : "light-aqua-300"]
    }80`,
    "minimap.errorHighlight": `${
      palette[isDark ? "dark-red-300" : "light-red-300"]
    }80`,
    "minimap.findMatchHighlight": `${
      palette[isDark ? "dark-aqua-300" : "light-aqua-300"]
    }60`,
    "minimap.selectionHighlight": `${palette[`${prefix}-700`]}f0`,
    "minimap.warningHighlight": `${
      palette[isDark ? "dark-yellow-300" : "light-yellow-300"]
    }80`,
    "minimapGutter.addedBackground": `${
      palette[isDark ? "dark-green-300" : "light-green-300"]
    }a0`,
    "minimapGutter.deletedBackground": `${
      palette[isDark ? "dark-red-300" : "light-red-300"]
    }a0`,
    "minimapGutter.modifiedBackground": `${
      palette[isDark ? "dark-blue-300" : "light-blue-300"]
    }a0`,
    "notebook.cellBorderColor": palette[`${prefix}-700`],
    "notebook.cellHoverBackground": palette[`${prefix}-300`],
    "notebook.cellStatusBarItemHoverBackground": palette[`${prefix}-400`],
    "notebook.cellToolbarSeparator": palette[`${prefix}-700`],
    "notebook.focusedCellBackground": palette[`${prefix}-300`],
    "notebook.focusedCellBorder": palette[`${prefix}-700`],
    "notebook.focusedEditorBorder": palette[`${prefix}-700`],
    "notebook.focusedRowBorder": palette[`${prefix}-700`],
    "notebook.inactiveFocusedCellBorder": palette[`${prefix}-700`],
    "notebook.outputContainerBackgroundColor": palette[`${prefix}-200`],
    "notebook.selectedCellBorder": palette[`${prefix}-700`],
    "notebookStatusErrorIcon.foreground":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "notebookStatusRunningIcon.foreground":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "notebookStatusSuccessIcon.foreground":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "notificationCenterHeader.background": palette[`${prefix}-500`],
    "notificationCenterHeader.foreground": palette[`${prefix}-975`],
    "notificationLink.foreground":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "notifications.background": palette[`${prefix}-300`],
    "notifications.foreground": palette[`${prefix}-975`],
    "notificationsErrorIcon.foreground":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "notificationsInfoIcon.foreground":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "notificationsWarningIcon.foreground":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "panel.background": palette[`${prefix}-300`],
    "panel.border": palette[`${prefix}-300`],
    "panelInput.border": palette[`${prefix}-700`],
    "panelSection.border": palette[`${prefix}-100`],
    "panelSectionHeader.background": palette[`${prefix}-300`],
    "panelTitle.activeBorder": `${
      palette[isDark ? "dark-green-400" : "light-green-400"]
    }d0`,
    "panelTitle.activeForeground": palette[`${prefix}-975`],
    "panelTitle.inactiveForeground": palette[`${prefix}-900`],
    "peekView.border": palette[`${prefix}-600`],
    "peekViewEditor.background": palette[`${prefix}-400`],
    "peekViewEditor.matchHighlightBackground": `${
      palette[isDark ? "dark-yellow-300" : "light-yellow-300"]
    }50`,
    "peekViewEditorGutter.background": palette[`${prefix}-400`],
    "peekViewResult.background": palette[`${prefix}-400`],
    "peekViewResult.fileForeground": palette[`${prefix}-975`],
    "peekViewResult.lineForeground": palette[`${prefix}-950`],
    "peekViewResult.matchHighlightBackground": `${
      palette[isDark ? "dark-yellow-300" : "light-yellow-300"]
    }50`,
    "peekViewResult.selectionBackground": `${
      palette[isDark ? "dark-aqua-300" : "light-aqua-300"]
    }50`,
    "peekViewResult.selectionForeground": palette[`${prefix}-975`],
    "peekViewTitle.background": palette[`${prefix}-600`],
    "peekViewTitleDescription.foreground": palette[`${prefix}-975`],
    "peekViewTitleLabel.foreground":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "pickerGroup.border": `${
      palette[isDark ? "dark-green-400" : "light-green-400"]
    }1a`,
    "pickerGroup.foreground": palette[`${prefix}-975`],
    "ports.iconRunningProcessForeground":
      palette[isDark ? "dark-orange-500" : "light-orange-500"],
    "problemsErrorIcon.foreground":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "problemsInfoIcon.foreground":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "problemsWarningIcon.foreground":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "progressBar.background":
      palette[isDark ? "dark-green-400" : "light-green-400"],
    "quickInputTitle.background": palette[`${prefix}-400`],
    "rust_analyzer.inlayHints.background": `${palette[`${prefix}-300`]}00`,
    "rust_analyzer.inlayHints.foreground": `${palette[`${prefix}-800`]}a0`,
    "rust_analyzer.syntaxTreeBorder":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "sash.hoverBorder": palette[`${prefix}-600`],
    "scrollbar.shadow": "#00000000",
    "scrollbarSlider.activeBackground": palette[`${prefix}-950`],
    "scrollbarSlider.background": `${palette[`${prefix}-700`]}80`,
    "scrollbarSlider.hoverBackground": palette[`${prefix}-700`],
    "selection.background": selectionBg,
    "settings.checkboxBackground": palette[`${prefix}-300`],
    "settings.checkboxBorder": palette[`${prefix}-700`],
    "settings.checkboxForeground":
      palette[isDark ? "dark-orange-500" : "light-orange-500"],
    "settings.dropdownBackground": palette[`${prefix}-300`],
    "settings.dropdownBorder": palette[`${prefix}-700`],
    "settings.dropdownForeground":
      palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "settings.focusedRowBackground": palette[`${prefix}-400`],
    "settings.headerForeground": palette[`${prefix}-950`],
    "settings.modifiedItemIndicator": palette[`${prefix}-800`],
    "settings.numberInputBackground": palette[`${prefix}-300`],
    "settings.numberInputBorder": palette[`${prefix}-700`],
    "settings.numberInputForeground":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "settings.rowHoverBackground": palette[`${prefix}-400`],
    "settings.textInputBackground": palette[`${prefix}-300`],
    "settings.textInputBorder": palette[`${prefix}-700`],
    "settings.textInputForeground":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "sideBar.background": palette[`${prefix}-200`],
    "sideBar.foreground": palette[`${prefix}-900`],
    "sideBarSectionHeader.background": palette[`${prefix}-300`],
    "sideBarSectionHeader.border": `${palette[`${prefix}-300`]}00`,
    "sideBarSectionHeader.foreground": palette[`${prefix}-950`],
    "sideBarTitle.foreground": palette[`${prefix}-950`],
    "statusBar.background": palette[`${prefix}-200`],
    "statusBar.border": palette[`${prefix}-200`],
    "statusBar.debuggingBackground": palette[`${prefix}-200`],
    "statusBar.debuggingForeground":
      palette[isDark ? "dark-orange-500" : "light-orange-500"],
    "statusBar.foreground": palette[`${prefix}-950`],
    "statusBar.noFolderBackground": palette[`${prefix}-200`],
    "statusBar.noFolderBorder": palette[`${prefix}-200`],
    "statusBar.noFolderForeground": palette[`${prefix}-950`],
    "statusBarItem.activeBackground": `${palette[`${prefix}-600`]}70`,
    "statusBarItem.errorBackground": palette[`${prefix}-200`],
    "statusBarItem.errorForeground":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "statusBarItem.hoverBackground": `${palette[`${prefix}-600`]}a0`,
    "statusBarItem.prominentBackground": palette[`${prefix}-200`],
    "statusBarItem.prominentForeground": palette[`${prefix}-975`],
    "statusBarItem.prominentHoverBackground": `${palette[`${prefix}-600`]}a0`,
    "statusBarItem.remoteBackground": palette[`${prefix}-200`],
    "statusBarItem.remoteForeground": palette[`${prefix}-950`],
    "statusBarItem.warningBackground": palette[`${prefix}-200`],
    "statusBarItem.warningForeground":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "symbolIcon.arrayForeground":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "symbolIcon.booleanForeground":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "symbolIcon.classForeground":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "symbolIcon.colorForeground": palette[`${prefix}-975`],
    "symbolIcon.constantForeground":
      palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "symbolIcon.constructorForeground":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "symbolIcon.enumeratorForeground":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "symbolIcon.enumeratorMemberForeground":
      palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "symbolIcon.eventForeground":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "symbolIcon.fieldForeground": palette[`${prefix}-975`],
    "symbolIcon.fileForeground": palette[`${prefix}-975`],
    "symbolIcon.folderForeground": palette[`${prefix}-975`],
    "symbolIcon.functionForeground":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "symbolIcon.interfaceForeground":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "symbolIcon.keyForeground":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "symbolIcon.keywordForeground":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "symbolIcon.methodForeground":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "symbolIcon.moduleForeground":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "symbolIcon.namespaceForeground":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "symbolIcon.nullForeground":
      palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "symbolIcon.numberForeground":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "symbolIcon.objectForeground":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "symbolIcon.operatorForeground":
      palette[isDark ? "dark-orange-500" : "light-orange-500"],
    "symbolIcon.packageForeground":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "symbolIcon.propertyForeground":
      palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "symbolIcon.referenceForeground":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "symbolIcon.snippetForeground": palette[`${prefix}-975`],
    "symbolIcon.stringForeground":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "symbolIcon.structForeground":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "symbolIcon.textForeground": palette[`${prefix}-975`],
    "symbolIcon.typeParameterForeground":
      palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "symbolIcon.unitForeground": palette[`${prefix}-975`],
    "symbolIcon.variableForeground":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "tab.activeBackground": palette[`${prefix}-300`],
    "tab.activeBorder": "#00000000",
    "tab.activeBorderTop": `${
      palette[isDark ? "dark-green-400" : "light-green-400"]
    }d0`,
    "tab.activeForeground": palette[`${prefix}-975`],
    "tab.border": palette[`${prefix}-200`],
    "tab.hoverBackground": palette[`${prefix}-300`],
    "tab.hoverForeground": palette[`${prefix}-975`],
    "tab.inactiveBackground": palette[`${prefix}-200`],
    "tab.inactiveForeground": palette[`${prefix}-800`],
    "tab.lastPinnedBorder": `${
      palette[isDark ? "dark-green-400" : "light-green-400"]
    }d0`,
    "tab.unfocusedActiveBorder": palette[`${prefix}-900`],
    "tab.unfocusedActiveForeground": palette[`${prefix}-950`],
    "tab.unfocusedHoverForeground": palette[`${prefix}-975`],
    "tab.unfocusedInactiveForeground": palette[`${prefix}-800`],
    "terminal.ansiBlack": isDark
      ? palette[`${prefix}-400`]
      : palette[`${prefix}-975`],
    "terminal.ansiBlue": palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "terminal.ansiBrightBlack": isDark
      ? palette[`${prefix}-900`]
      : palette[`${prefix}-975`],
    "terminal.ansiBrightBlue":
      palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "terminal.ansiBrightCyan":
      palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "terminal.ansiBrightGreen":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "terminal.ansiBrightMagenta":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "terminal.ansiBrightRed":
      palette[isDark ? "dark-red-500" : "light-red-500"],
    "terminal.ansiBrightWhite": isDark
      ? palette[`${prefix}-975`]
      : palette[`${prefix}-400`],
    "terminal.ansiBrightYellow":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "terminal.ansiCyan": palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "terminal.ansiGreen":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "terminal.ansiMagenta":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "terminal.ansiRed": palette[isDark ? "dark-red-500" : "light-red-500"],
    "terminal.ansiWhite": isDark
      ? palette[`${prefix}-975`]
      : palette[`${prefix}-900`],
    "terminal.ansiYellow":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "terminal.foreground": palette[`${prefix}-975`],
    "terminalCursor.foreground": cursorFg,
    "testing.iconErrored": palette[isDark ? "dark-red-500" : "light-red-500"],
    "testing.iconFailed": palette[isDark ? "dark-red-500" : "light-red-500"],
    "testing.iconPassed": palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "testing.iconQueued": palette[isDark ? "dark-blue-500" : "light-blue-500"],
    "testing.iconSkipped":
      palette[isDark ? "dark-purple-500" : "light-purple-500"],
    "testing.iconUnset":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "testing.runAction": palette[isDark ? "dark-aqua-500" : "light-aqua-500"],
    "textBlockQuote.background": palette[`${prefix}-200`],
    "textBlockQuote.border": palette[`${prefix}-600`],
    "textCodeBlock.background": palette[`${prefix}-200`],
    "textLink.activeForeground": `${
      palette[isDark ? "dark-green-500" : "light-green-500"]
    }c0`,
    "textLink.foreground":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "textPreformat.foreground":
      palette[isDark ? "dark-yellow-500" : "light-yellow-500"],
    "titleBar.activeBackground": palette[`${prefix}-200`],
    "titleBar.activeForeground": palette[`${prefix}-950`],
    "titleBar.border": palette[`${prefix}-200`],
    "titleBar.inactiveBackground": palette[`${prefix}-200`],
    "titleBar.inactiveForeground": palette[`${prefix}-800`],
    "toolbar.hoverBackground": palette[`${prefix}-400`],
    "tree.indentGuidesStroke": palette[`${prefix}-800`],
    "walkThrough.embeddedEditorBackground": palette[`${prefix}-200`],
    "welcomePage.buttonBackground": palette[`${prefix}-400`],
    "welcomePage.buttonHoverBackground": `${palette[`${prefix}-400`]}a0`,
    "welcomePage.progress.foreground":
      palette[isDark ? "dark-green-500" : "light-green-500"],
    "welcomePage.tileHoverBackground": palette[`${prefix}-400`],
    "widget.shadow": "#00000000",
  };
}
