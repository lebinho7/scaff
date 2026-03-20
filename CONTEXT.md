# Scaff — Context for Claude Code

## Architecture
- Single-file app: index.html (~2500 lines)
- CSS in <style> block, JS in <script> block, HTML in body
- State: window.STATE object + localStorage via saveData()/loadData()

## Existing Sidebar
- Selector: .global-sidebar
- Width: 260px (hardcoded in CSS :root or .global-sidebar rule)
- Nav items: .gs-item (display: flex, gap: 14px, padding: 14px 20px)
- Logo: .gs-logo
- Bottom section: gs-nav with margin-top:auto

## Layout
- #screen-app { flex-direction: row }
- .global-sidebar + .app-wrapper-right (flex: 1)

## Task
Make the sidebar collapsible (toggle between 260px and 64px)
Collapsed state: show only icons, hide text labels
Persist state in localStorage key: 'scaff_sidebar_collapsed'