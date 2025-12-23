import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/quick-start',
        'getting-started/ui-tour',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/creating-requirements',
        'guides/defining-context',
        'guides/constraint-management',
        'guides/error-guide',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/node-types',
        'reference/edge-types',
        'reference/search-guide',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/legacy-import',
        'advanced/code-integration',
        'advanced/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Scenarios',
      items: [
        'scenarios/drafting-first-req',
        'scenarios/handling-conflicts',
      ],
    },
  ],
};

export default sidebars;
