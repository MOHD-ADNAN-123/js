/*
  DOM (Document Object Model) Tree Explanation:

  The DOM represents the structure of an HTML document as a tree of nodes.

  ┌────────────────┐
  │   Document     │  ← Root of the DOM tree (represents the entire web page)
  └────────────────┘
          │
          ▼
  ┌────────────────┐
  │     HTML       │  ← Root HTML element (contains all other HTML content)
  └────────────────┘
      /         \
     ▼           ▼
┌────────┐   ┌────────┐
│  HEAD  │   │  BODY  │  ← HEAD contains meta info; BODY contains visible content
└────────┘   └────────┘
   /   \         │
  ▼     ▼        ▼
title  meta     div  ← HEAD contains 'title' and 'meta' elements; BODY contains 'div'
  │      │        │
  ▼      ▼        ├── attribute (like id, class, etc.)
text   attribute  ▼
node             / \
                ▼   ▼
              h1     p   ← 'div' contains 'h1' and 'p' elements
              │     │
              ▼     ▼
           text   text
           node   node

NOTES:
- Every element (like 'title', 'div', 'h1') is a node.
- Each tag can have attributes (e.g., class, id).
- Tags like 'h1', 'p', and 'title' contain text nodes.
- The DOM lets JavaScript access and manipulate this tree structure dynamically.
*/
